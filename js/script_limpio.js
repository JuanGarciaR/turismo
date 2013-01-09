$(document).on("ready", function(){
  $("#principal li, #sub1 li, #sub2 li").hide();
	$("#principal ul li:first,#sub1 ul li:first,#sub2 ul li:first").slideDown("Show");

	corre1();
});

function corre1(){
		var cant = $("#principal ul li").size();
		$("#principal ul li").each(function(i){
			if($(this).is(':visible')) {
				$(this).hide();
				if (i == (cant-1)){
					$("#principal ul li:first").fadeIn("Show");
					return false;
				}else{
					$(this).next().fadeIn("Show");
					$(this).next()
					return false;
				}
			}
		});

		setTimeout('corre2()',2000);
}

function corre2(){
		var cant = $("#sub1 ul li").size();
		$("#sub1 ul li").each(function(i){
			if($(this).is(':visible')) {
				$(this).hide();
				if (i == (cant-1)){
					$("#sub1 ul li:first").fadeIn("Show");
					return false;
				}else{
					$(this).next().fadeIn("Show");
					return false;
				}
			}
		});

		setTimeout('corre3()',2000);
}
function corre3(){
		var cant = $("#sub2 ul li").size();
		$("#sub2 ul li").each(function(i){
			if($(this).is(':visible')) {
				$(this).hide();
				if (i == (cant-1)){
					$("#sub2 ul li:first").fadeIn("Show");
					return false;
				}else{
					$(this).next().fadeIn("Show");
					return false;
				}
			}
		});
		setTimeout('corre1()',2000);
	}
