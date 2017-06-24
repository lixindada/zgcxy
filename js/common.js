//返回顶部
$(function(){
	$(window).scroll(function(){
		var $scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
         if($scrollTop >350){
            $("#hid").show();
        }else{ $("#hid").hide();};	
    });
	$("#top").click(function(){
		$('body,html').animate({scrollTop:0},500);
		return false;
	});
});
//结束

//下拉 start
$(document).ready(function(){
$(".flip").click(function(){
    $(".panel").slideToggle("slow");
  });
});

$(document).ready(function(){
$("#img_top").click(function(){
	$(".panel").slideToggle("slow");
});
});
//下拉 end
$(document).ready(function(){
$(".flip1").click(function(){
    $(".panel1").slideToggle("slow");
	$("#shouqi4").css("display","block");
	$(".flip1").css("display","none");
});
});

$(document).ready(function(){
$("#shouqi4").click(function(){
	$(".panel1").slideToggle("slow");
	$("#shouqi4").css("display","none");
	$(".flip1").css("display","block");
});
});

$(document).ready(function(){
$(".flip2").click(function(){
    $(".panel2").slideToggle("slow");
	$("#shouqi3").css("display","block");
	$(".flip2").css("display","none");
});
});

$(document).ready(function(){
$("#shouqi3").click(function(){
	$(".panel2").slideToggle("slow");
	$("#shouqi3").css("display","none");
	$(".flip2").css("display","block");
});
});

$(document).ready(function(){
$(".flip3").click(function(){
    $(".panel3").slideToggle("slow");
	$("#shouqi2").css("display","block");
	$(".flip3").css("display","none");
});
});

$(document).ready(function(){
$("#shouqi2").click(function(){
	$(".panel3").slideToggle("slow");
	$("#shouqi2").css("display","none");
	$(".flip3").css("display","block");
});
});

$(document).ready(function(){
$(".flip4").click(function(){
    $(".panel4").slideToggle("slow");
	$("#shouqi1").css("display","block");
	$(".flip4").css("display","none");
  });
});

//shouqi
$(document).ready(function(){
$("#shouqi1").click(function(){
	$(".panel4").slideToggle("slow");
	$("#shouqi1").css("display","none");
	$(".flip4").css("display","block");
});
});
// xia la
$(document).ready(function(){
$(".flip5").click(function(){
    $(".panel5").slideToggle("slow");
	$("#shouqi").css("display","block");
	$(".flip5").css("display","none");
  });
});

//shouqi
$(document).ready(function(){
$("#shouqi").click(function(){
	$(".panel5").slideToggle("slow");
	$("#shouqi").css("display","none");
	$(".flip5").css("display","block");
});
});
//end

$(document).ready(function(){
	$(".flip_0").click(function(){
		if ($(this).next().is(":hidden")){
			$(".panel_0").slideUp("slow");	
			$(this).next().slideDown("slow");	
		}else{
			$(this).next().slideUp("slow");
		}
	});
});
//index end
//facylty start
//
//$(document).ready(function(){
//	$(".fa1").click(function(){
//		if ($(this).next().is(":hidden")){
//			$(".fa_1").slideUp("slow");	
//			$(this).next().slideDown("slow");	
//		}else{
//			$(this).next().slideUp("slow");
//		}
//	});
//});
////$(document).ready(function(){
////	$(".fa1").click(function(){
////		if($(".fa1").css('background','url(../images/00_03.png) no-repeat 60% center')){
////			$(".fa1").css('background','url(../images/000_03.png) no-repeat 60% center')
////		}else{
////			$(".fa1").css('background','url(../images/00_03.png) no-repeat 60% center')
////		}
////	});
////});
//window.onload=function() {
//var fa=document.getElementsByClassName('fa1');
//			for(var i=0;i<fa.length;i++){
//				fa[i].onclick=(function (y){
//					return function(){
//					for(var x=0;x<fa.length;x++){
//						fa[x].style.background="url(../images/000_03.png) no-repeat 60% center";
//						}	
//						fa[y].style.background="url(../images/00_03.png) no-repeat 60% center";
//					}
//			})(i);	
//		}
//	}
//facylty end