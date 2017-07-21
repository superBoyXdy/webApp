function showGene(){
    $('#gene').show(200).siblings().hide(10);
};
function fillHeight(){
    var height = $(window).height();
    $('#content').height(height);
    $('#m-nav').height(height-30);
};
$(function(){
    fillHeight();
    $('#nav>li').click(function(){
        $('#content').show();
        var $index = $(this).index();
        var $ele = $(this);
        $('.nav-menu').hide();
        $ele.addClass("nav-current").siblings().removeClass("nav-current");
        $ele.find('.nav-menu').show();
        if($index != 2){
            $('#content').show();
            if($index == 0){
                setTitle($('#home'),2,"老建筑");
            }else if($index == 1){
                setTitle($('#find'),-49,"发现");
            }else if($index == 3){
                setTitle($('#collect'),-147,"我的收藏");
            }else if($index == 4){
                setTitle($('#pic'),-195,"我的相册");
            }else if($index == 5){
                setTitle($('#know'),-244,"了解十里洋场");
            }else if($index == 6){
                setTitle($('#set'),-290,"设置");
            }
        }else{
            $('#content').hide();
        }
    });
    $('#nav>li:eq(0) .nav-menu li').click(function(){
        $(this).addClass("nav-menu-current").siblings().removeClass("nav-menu-current");
        var $index = $(this).index();
        $('.home-page:eq(' + $index + ')').addClass('home-page-current').siblings().removeClass('home-page-current');
    });
    $('#nav>li:eq(2) .nav-menu li').click(function(){
        $(this).addClass("nav-menu-current").siblings().removeClass("nav-menu-current");
        var url = 'url(img/guide'+ $(this).index() +'.png)';
        $('#img').css('background-image',url);
    });
    $('#homePage1>li').click(function(){
        var $index = $(this).index();
        if($index == 0){
            setTitle($('#museum'),2,"武汉美术馆");
            toogle($('#museum-page1'));
        }else if($index == 1){
            setTitle($('#museum'),2,"江汉关博物馆");
            toogle($('#museum-page2'));
        }else if($index == 2){
            setTitle($('#museum'),2,"武汉科技馆");
            toogle($('#museum-page3'));
        }else if($index == 3){
            setTitle($('#museum'),2,"湖北省电力博物馆");
            toogle($('#museum-page4'));
        }else if($index == 4){
            setTitle($('#museum'),2,"武汉市群众艺术馆");
            toogle($('#museum-page5'));
        }
    });
    $('#homePage2>li').click(function(){
        var $index = $(this).index();
        if($index == 0){
            setTitle($('#story'),2,"江汉路");
            toogle($('#story-page1'));
        }else if($index == 1){
            setTitle($('#story'),2,"胜利街");
            toogle($('#story-page2'));
        }else if($index == 2){
            setTitle($('#story'),2,"鄱阳街");
            toogle($('#story-page3'));
        }else if($index == 3){
            setTitle($('#story'),2,"中山大道");
            toogle($('#story-page4'));
        }else if($index == 4){
            setTitle($('#story'),2,"黎黄陂路");
            toogle($('#story-page5'));
        }else if($index == 5){
            setTitle($('#story'),2,"保成街");
            toogle($('#story-page6'));
        }
    });
    $('#homePage3>li').click(function(){
        var $index = $(this).index();
        if($index == 0){
            setTitle($('#leased'),2,"俄国租界");
            toogle($('#leased-page1'));
        }else if($index == 1){
            setTitle($('#leased'),2,"英国租界");
            toogle($('#leased-page2'));
        }else if($index == 2){
            setTitle($('#leased'),2,"法国租界");
            toogle($('#leased-page3'));
        }else if($index == 3){
            setTitle($('#leased'),2,"德国租界");
            toogle($('#leased-page4'));
        }else if($index == 4){
            setTitle($('#leased'),2,"日本租界");
            toogle($('#leased-page5'));
        }
    });
    $('#close').click(function(){
        $('#content').hide();
    });
    $('.story>div').find('a').click(function(){
        setTitle($('#home'),2,"老建筑");
    });
    $('.point').click(function(event){
        event.preventDefault();
        event.stopPropagation();
        var index = $(this).index() + 1;
        var url = '../Particulars/Particulars'+index+'.html';
        $('#content').show();
        $('#particulars').load(url);
        var title = '老建筑';
        console.log(title);
        setTitle($('#particulars'),2,title);
    });
    function setTitle($element,y,name){
        $element.show(200).siblings().hide(10);
        $('#icon').css('background-position-y',y+'px');
        $('#title').html(name);
    };
    function toogle($element){
        $element.show(200).siblings().hide(10);
    }
});
$(window).resize(fillHeight);