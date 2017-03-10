/**
 * Created by 64866 on 2017/3/4.
 */
$("#login_button").click(function () {
    var username = $("#user").val();
    var password = $("#password").val();
    if(username == ""){
        $("#errorMessage").html("请输入用户名");
    }else if(password== ""){
        $("#errorMessage").html("请输入密码");
    }
    else{
        $("#errorMessage").html("登入中...");
        window.location.href = "./index.html"
    }
});
//侧边栏js
$(function(){
    slider = $("#slider").slideReveal({
        width: "250px",
        //push: false,
        position: "left",
        speed: 400,
        trigger: $("#trigger"),
        // autoEscape: false,
        overlay: true
        
    });
    $('#trigger').bind('click',setTimeout(function(){
        $("#slider").show();
    }),400);
});