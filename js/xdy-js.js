/**
 * Created by 64866 on 2017/3/4.
 */
$("#login_button").click(function () {
    var username = $("#user").val();
    var password = $("#password").val();
    if(username == ""){
        $("#errorMessage").html("用户名不能为空");
    }else if(password== ""){
        $("#errorMessage").html("密码不能为空");
    }
    else{
        $("#errorMessage").html("正在登录...");
        window.location.href = "index.html"
    }
});