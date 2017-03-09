$(function(){
    //在父窗口获取悬浮窗父元素
    var $su_win = $(window.parent.document).find('.su-win');
    //在父窗口获取每个悬浮窗元素
    var $suspension = $(window.parent.document).find('.Suspension');

    //document绑定点击事件
    $(document).bind('click',function(e){
        var target = $(e.target);
        //if 点击的非当前元素（或非当前同类元素）时，
        if(target.closest('.point>a').length == 0){
            //隐藏 悬浮窗的父元素和子元素
            $su_win.css('visibility','hidden');
            $suspension.hide();
        }
    })
    //绑定a标签点击事件
    $('.point>a').bind('click',function(e){
        //var $this = $this;
        //初始化显示状态
        $su_win.css('visibility','hidden');
        $suspension.hide();
        //获取当前点击元素的index
        var $index = $(e.target).html();
        //显示第index个悬浮窗元素
        $su_win.css('visibility','visible');
        $suspension.eq($index-1).show();
        return false;
    })
    
    $suspension.find('a').bind('click',function(){
        $su_win.css('visibility','hidden');
        $suspension.hide();
    })
})