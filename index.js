/*****************header_news的切换样式*********************/
$('#header_n1 .ctrl a').click(function(){
	$('#header_n1 .ctrl a').removeClass();
	$(this).attr('class','ctrl_active');
})
$('#header_n1 .ctrl a')[1].onclick=function(){
	$('.header_news_ul').animate({'left':'-640px'},700);
}
$('#header_n1 .ctrl a')[0].onclick=function(){
	$('.header_news_ul').animate({'left':'0px'},700);
}
/********************hot_phone的切换样式******************************/
/*$('.lzx ').mouseover(function(){
	
		$('.hot_phone_cover').slideDown()
	})
$('.lzx ').mouseout(function(){
	
		$('.hot_phone_cover').slideUp()
	})
*/
var width=$('#header_1').width();
	$(function(){
		for (var i=1;i<=4;i++)
			{
				$('.lunbo_ul li').eq(i).css('left',width+'px');
			}
		var temp=0;
		var inow=0;
		$('#ol1 li').mouseover(function(){
			clearInterval(time)
			$('#ol1 li').attr('class','');
			$('#ol1 li').each(function(i){
				this.index=i;
			})
			$(this).attr('class','current');
			if (this.index>inow)
			{	
				$('.lunbo_ul li').eq(this.index).css({'left':width+'px'});
				$('.lunbo_ul li').eq(inow).animate({'left':-1*width+'px'},1000);
			}else if(this.index<inow){
				$('.lunbo_ul li').eq(this.index).css({'left':-1*width+'px'});
				$('.lunbo_ul li').eq(inow).animate({'left':width+'px'},1000);
			}
			$('.lunbo_ul li').eq(this.index).animate({'left':'0px'},1000);
			inow=this.index;
		})
		$('#ol1 li').mouseout(function(){
			time=setInterval(change,2000)
		});
		var time=setInterval(change,2000);
		function change(){
			$('#ol1 li').attr('class','');
			$('.lunbo_ul li').eq(inow).animate({'left':-1*width+'px'},1000);
			inow++;
			inow=inow%5;
			$('#ol1 li').eq(inow).attr('class','current');
			$('.lunbo_ul li').eq(inow).css({'left':width+'px'});
			$('.lunbo_ul li').eq(inow).animate({'left':'0px'},1000);
		}
		})