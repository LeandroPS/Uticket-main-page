function nxt(){
	console.log("nxt");
	
	left_1 = $("div.destaques div.left-1");
	left_2 = $("div.destaques div.left-2");
	centro = $("div.destaques div.centro");
	right_1 = $("div.destaques div.right-1");
	right_2 = $("div.destaques div.right-2");
	
	left_1.removeClass("first left-1").addClass("second left-2");
	left_2.removeClass("left-2").addClass("right-2");
	centro.removeClass("centro").addClass("left-1 first");
	right_1.removeClass("first right-1").addClass("centro");
	right_2.removeClass("second right-2").addClass("first right-1");
}

function prv(){
	left_1 = $("div.destaques div.left-1");
	left_2 = $("div.destaques div.left-2");
	centro = $("div.destaques div.centro");
	right_1 = $("div.destaques div.right-1");
	right_2 = $("div.destaques div.right-2");
	
	left_1.removeClass("first left-1").addClass("centro");
	left_2.removeClass("second left-2").addClass("left-1 first");
	centro.removeClass("centro").addClass("right-1 first");
	right_1.removeClass("first right-1").addClass("second right-2");
	right_2.removeClass("second right-2").addClass("second left-2");
}

$(function(){
	
	$("div.destaques").on("click", "div.left-1", function(event){
		prv();
		event.stopPropagation();
		event.preventDefault();
	});
	
	$("div.destaques").on("click", "div.right-1", function(event){
		event.stopPropagation();
		event.preventDefault();
		
		nxt();
		
	});
	
	$("div.header-config div.config-categorias ul li").click(function(){
		$("div.header-config div.config-categorias ul li").removeClass("current");
		$(this).addClass("current");
	});
	
	$("button.messages-button").click(function(){
		$("div.mensagens-painel").toggleClass("show");
	});
	
	$("div.header-config div.config-city").click(function(){
		$("div.what-city").addClass("show");
	});
	
	$("div.what-city button.close").click(function(){
		$("div.what-city").removeClass("show");
	});
	
	$("header div.carteira").click(function(){
		$("div.drop-menu.wallet-menu").toggleClass("show");
	});
	
	$("header img.header-foto").click(function(){
		$("div.drop-menu.personal-menu").toggleClass("show");
	});
	
});