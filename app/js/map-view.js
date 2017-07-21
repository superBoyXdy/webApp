$(function(){
    //获取需要动态调整的容器
    var $bg = $('#bg');
    var $img = $('#img');

    //获取屏幕宽高
    var width = $(window).width() > 1920 ? $(window).width() : 1920;
    var height = $(window).height() > 1006 ? $(window).height() : 1006;
    
    //初始化位移量
    var left = $img.offset().left;
    var top = $img.offset().top;

    //获取鼠标x/y坐标
    var getMousePos = function(event){
        return { 'x' : event.pageX, 'y': event.pageY }
    }

    //计算鼠标相对于$ele的位置
    var calcOffset = function(event,$ele){
        var pos = getMousePos(event);
        var off = $ele.offset();
        return { x : pos.x - off.left , y : pos.y - off.top}
    }

    //记录当前位移量
    var getOffset = function($ele){
        left = $ele.offset().left;
        top = $ele.offset().top;
    }

    //设置宽高
    var setWH = function(width,height){
        $bg.width(width);
        $bg.height(height);
        $img.width(width);
        $img.height(height);
    }

    //设置位移
    var setOffset = function(left,top){
        $bg.css('left',left+'px');
        $bg.css('top',top+'px');
        $img.css('left',left+'px');
        $img.css('top',top+'px');
    }

    //初始化宽高
    setWH(width,height);

    //鼠标滑轮操作
    $img.mousewheel(function(event,delta){
        event.preventDefault();
        //如果滑轮值为null,则return
        if(!delta){ return; }
        //获取鼠标当对于img的x、y坐标
        var off = calcOffset(event,$img);
        // console.log(off.x,off.y);
        var w = 400; var h = 209;
        
        //获取位移量并更新值
        getOffset($img);

        if($img.width() >= 1920 && $img.height() >= 1006){
            
            //delta > 0 时表示滑轮向上  放大
            if(delta > 0){
                if($img.width() >= 10000 || $img.height() >= 5000){
                    return;
                }
                //宽度高度分别增加 w 、 h 
                width = $img.width() + w;
                height = $img.height() + h;

                //计算位移值 保持鼠标中心位置不变
                left += off.x - off.x / $img.width() * width;
                top += off.y - off.y / $img.height() * height;

                setWH(width,height);
                setOffset(left,top);
            }else{
                if($img.width() == 1920 && $img.height() == 1006){
                    return;
                }
                width = $img.width() - w;
                height = $img.height() - h;

                left += off.x - off.x / $img.width() * width;
                top += off.y - off.y / $img.height() * height;

                setWH(width,height);
                setOffset(left,top);
            }
        }else{
            setWH(1920,1006);
            setOffset(0,0);
        }
    })

    //鼠标按下事件
    $img.mousedown(function(event){
        event.preventDefault();
        //计算鼠标相对于$img的位置
        var offset = calcOffset(event,$img);

        //鼠标移动事件
        $img.mousemove(function(event){
            event.preventDefault();
            //鼠标形状变成移动状态
            $img.css('cursor','move');
            var pos = getMousePos(event);

            //计算位移量
            var offset_x = pos.x - offset.x;
            var offset_y = pos.y - offset.y;

            //在移动中接触边距时，锁定位移量
            offset_x = offset_x > 300 ? 300 : offset_x;
            offset_x = $(window).width() - offset_x < $img.width() ? offset_x : $(window).width() - $img.width();
            offset_y = offset_y > 0 ? 0 : offset_y;
            offset_y = $(window).height() - offset_y < $img.height() ? offset_y : $(window).height() - $img.height();

            //移动
            setOffset(offset_x,offset_y);

        })
        //当鼠标松开时移除鼠标移动事件
        $img.mouseup(function(event){
            $img.unbind('mousemove');
            $img.unbind('mouseup');
            $img.css('cursor','default');
        })
    });
});
