$(function(){
	/*팝업창*/
		$("h1").click(function(){
			$(".pop").show();
		});
		$(".pop .close").click(function(){
			$(".pop").hide();
		});
	/*메뉴*/
		$("#wrapper h1").mouseover(function(){//로고 이미지에 마우스 올릴때.
			$(".leftNav").css("display","block").animate({'right':'600px','width':600},"fast");						
			$(".rightNav").css("display","block").animate({'left':'601px','width':599},"fast");							
		});	
		
		$(".LS ").mouseenter(function(){
			$(".landscape").stop().slideDown();	
			$('.LS').text("팬션전경").css("color","#111949");//주메뉴에 마우스올리면 LANDSCAPE에서 "펜션전경"으로.. 색상과 함께 변화 하면서 하위메뉴가slideDown됨.
			
		});
		$(".LS ").mouseleave(function(){
			$(".landscape").stop().slideUp();
				
			$('.LS').text("LANDSCAPE").css("color","#7392ca");//주메뉴에 마우스 내리면 "펜션전경"에서 LANDSCAPE으로 .. 색상과 함께 처음 모습으로 변화 하면서 하위메뉴가slideUp됨.
		});
	
		$(".RM").hover(
			function(){
				$(this).next().stop(true).slideDown();//주메뉴에 마우스올리면 ROOM에서 "객실"로.. 색상과 함께 변화 하면서 하위메뉴가slideDown됨.
				$('.RM').text("객실").css("color","#111949");
			},
			function(){
				$(this).next().stop(true).slideUp();
				$('.RM').text("ROOM").css("color","#7392ca");
			}//주메뉴에 마우스 내리면 "객실"에서  ROOM으로 .. 색상과 함께 처음 모습으로 변화 하면서 하위메뉴가slideUp됨.
		);		
		
		$(".SPE").hover(
			function(){
				$('.special ').slideDown();
				$('.SPE').text("서비스").css("color","#111949");
			},//주메뉴에 마우스올리면 SPECIAL에서 "서비스"로.. 색상과 함께 변화 하면서 하위메뉴가slideDown됨.
			function(){	
				$('.special ').stop(true).slideUp();
				$('.SPE').text("SPECIAL").css("color","#7395ca");
			}//주메뉴에 마우스 내리면 "서비스"에서  SPECIAL로 .. 색상과 함께 처음 모습으로 변화 하면서 하위메뉴가slideUp됨.
		);	
	
	/*right 메뉴 */		
		$(".TRA ").hover(
			function(){
				$(this).next().stop(true).slideDown();
				
				$('.TRA').text("오시는 길").css("color","#111949");
			},	//주메뉴에 마우스올리면 TRAFFIC에서 "오시는 길"로.. 색상과 함께 변화 하면서 하위메뉴가slideDown됨.
			function(){	
				$(this).next().stop(true).slideUp();
				$('.TRA').text("TRAFFIC").css("color","#7395ca");
			}//주메뉴에 마우스 내리면 "오시는 길"에서  TRAFFIC로 .. 색상과 함께 처음 모습으로 변화 하면서 하위메뉴가slideUp됨.
		);
		$(".RR").hover(
			function(){
				$(this).next().stop(true).slideDown();
				
				$('.RR').text("예약안내").css("color","#111949");
			},//주메뉴에 마우스올리면 RESERVE에서 "예약안내"로.. 색상과 함께 변화 하면서 하위메뉴가slideDown됨.
			function(){	
				$(this).next().stop(true).slideUp();
				$('.RR').text("RESERVE").css("color","#7395ca");
			}//주메뉴에 마우스 내리면 "예약안내"에서  RESERVE로 .. 색상과 함께 처음 모습으로 변화 하면서 하위메뉴가slideUp됨.
		);			
		$(".Com").hover(
			function(){
				$(this).next().stop(true).slideDown();
				
				$('.Com').text("커뮤니티").css("color","#111949");
			},//주메뉴에 마우스올리면 COMMUNITY에서 "커뮤니티"로.. 색상과 함께 변화 하면서 하위메뉴가slideDown됨.
			function(){	
				$(this).next().stop(true).slideUp();
				$('.Com').text("COMMUNITY").css("color","#7395ca");
			}//주메뉴에 마우스 내리면 "커뮤니티"에서  COMMUNITY로 .. 색상과 함께 처음 모습으로 변화 하면서 하위메뉴가slideUp됨.
		);			
		
	/*메인이미지슬라이드*/	
		$(".mainSlide img").each(function(aa){
			$(this).css("left",1200*aa);
		});
		setInterval(function(){
			$(".mainSlide img").each(function(){
				var nowL = parseInt($(this).css("left"));
				var moveL = nowL - 1200;
				$(this).animate({left:moveL},1000,function(){
					if(moveL <= -1200){
						$(this).css("left",3600);
					}
				});
			});
			
		},3000);
		
	/*스크롤다운*/
		$("a").on("click",function(event){
			if (this.hash !==""){
				event.preventDefault();
				var hash = this.hash;
				$("html, body").animate({scrollTop: $(hash).offset().top},1000,function(){
					window.location.hash = hash;
				});
			}
		});
		
	/*룸 오버*/
		$(".B").mouseover(function(){
			$(this).css({backgroundColor:"transparent"});
		});
		$(".B").mouseout(function(){
			$(this).css({backgroundColor:"black",opacity:"60%"});
		});
		
	/*travel 슬라이딩*/
		$("#travel img").each(function(tt){
			$(this).css("left",1200*tt);
		});
		setInterval(function(){
			$("#travel img").each(function(){
				var nowL = parseInt($(this).css("left"));
				var moveL = nowL - 1200;
				$(this).animate({left:moveL},1000,function(){
					if(moveL <= -1200){
						$(this).css("left",3600);
					}
				});
			});
		},3000);
		$("#travel .travelTxt").each(function(tx){
			$(this).css("left",1200*tx);
		});
		setInterval(function(){
			$("#travel .travelTxt").each(function(){
				var nowT = parseInt($(this).css("left"));
				var moveT = nowT - 1200;
				$(this).animate({left:moveT},1000,function(){
					if(moveT <= -1200){
						$(this).css("left",3600);
					}
				});
			});
		},3000);
	
		
	/*서비스 fadeIn fadeOut*/
		setInterval(function(){
			$("#service img ").eq(4).fadeOut(1000, function(){
			$("#service img ").eq(4).insertBefore("#service img:eq(0)");
			$("#service img ").eq(0).fadeIn();
			});
			
		},3000);
		setInterval(function(){
			$(".Serv").eq(4).fadeOut(1000, function(){
			$(".Serv").eq(4).insertBefore(".Serv:eq(0)");
			$(".Serv").eq(0).fadeIn();
			});
			
		},3000);
		
});