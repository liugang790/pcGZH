//头部 区域划分
$(".h-header-bot-main .regional").hover(function(){
    $(".h-regional-list").stop().slideDown(200);
},function(){
    $(".h-regional-list").stop().slideUp(200);
})

//表单焦点
function Comform(formbtn){
var defval = $(formbtn).val();
$(formbtn).focus(function(){
	var thisval = $(this).val();
	if(thisval==defval){
        $(this).val(''); 
		}else{
		$(this).val(thisval);
		}
})
$(formbtn).blur(function(){
	var thisval = $(this).val();
    if(thisval==""){
				$(this).val(defval);
			}
})
}
Comform(".h-Search input.se");
Comform(".h-decorate-form .user");
Comform(".h-decorate-form .mobile");
Comform(".h-decorate-form .dress");
Comform(".h-decorate-form .qy");
Comform(".h-loginbox-login-list li input.user");
Comform(".h-loginbox-login-list li input.pass");
Comform(".h-loginbox-login-list li input.code");
Comform(".h-regbox-reg-list li input.tel");
Comform(".h-regbox-reg-list li input.code");

//注册页面
function pw(pwd){
var pwd = $(pwd);
pwd.attr("type","text");

pwd.bind("focus",function() {
pwd.attr("type","password");
pwd.attr("value","");
});

pwd.bind("blur",function() {
var pwdtext = pwd.val();
if(pwdtext.length ==""){
pwd.attr("type","text");
pwd.attr("value","输入密码");
}
});
}
pw("#passwd");

//关于我们页面
function Combut(Btn,Tab){
	$(Btn).click(function(){
		var _index=$(this).index();
		 $(this).addClass("on").siblings("li").removeClass("on");
		 $(Tab).eq(_index).show().siblings("li").hide();
	})
}
	Combut(".h-abcpages-leftlist li",".h-abcpages-rightlist li");
	Combut("#renovation1 li","#ren1 li");
	Combut("#renovation2 li","#ren2 li");
//装修知识

jQuery(".h-slideBox1").slide({mainCell:".bd ul",autoPlay:true,effect:"fold"});
jQuery(".h-sideMenu").slide({
			titCell:"h3", //鼠标触发对象
			trigger:"click",
			targetCell:"ul", //与titCell一一对应，第n个titCell控制第n个targetCell的显示隐藏
			effect:"slideDown", //targetCell下拉效果
			delayTime:300 , //效果时间
			triggerTime:150, //鼠标延迟触发时间（默认150）
			defaultPlay:true,//默认是否执行效果（默认true）
			returnDefault:true //鼠标从.sideMen移走后返回默认状态（默认false）
			});
