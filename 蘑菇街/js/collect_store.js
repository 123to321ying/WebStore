/*店铺列表 hover动画*/
$(".store li").hover(function() {
	var $index = $(this).index();
	$(".store li").each(function() {
		$(this).css({
			background: "#F5F5F5",
			borderRight: "1px solid #FFFFFF"
		});
		$(this).children(".del").css("display", "none");
	})
	$(this).children(".del").css("display", "block");
	$(this).css({
		background: "#fff",
		borderRight: "1px solid #ef2f23"
	});
	/*列表的店铺在hover时 右侧展示自动跳转*/
	if($index == 0) {
		$("html,body").animate({
			scrollTop: 157
		});
	} else if($index == 1) {
		$("html,body").animate({
			scrollTop: 999
		});
	}

})
/*点击删除字样 删除列表内信息 及 对应店铺的商品展示*/
$(".store li .del").click(function() {
	var $index = $(this).parent().index();
	/*点击删除列表内店铺信息*/
	$(this).parent().remove();
	/*删除店铺后 同时删除右侧的商品展示*/
	$(".store_goods_item").eq($index).remove();
	/*空空如也*/
	if($(".store li").length == 0) {
		/*没有关注的店铺显示 空空如也*/
		$(".view_box").children().remove();
		var img = "<img class='nothing' src='img/idid_ifrgim3bmyzdgnbrmizdambqmeyde_718x770.png'/>";
		$(".view_box").append(img);
	}
})

/*店铺列表栏固定*/
$(window).scroll(function() {
	var $top = $(document).scrollTop();
	console.log($top);
	if($top > 　152) {
		$(".store").css({
			position: "fixed",
			left: "75px",
			top: "0px"
		});
	} else {
		$(".store").css({
			position: "absolute",
			left: "0"
			
		});
	}
})


/*商品hover动画*/
$(".goods li").hover(function() {
	/*商品展示中贯穿商品名和价格之间的横线动画*/
	$(this).children().children().children(".line").stop(true).animate({
		width: "202px",
		opacity: "1"		
	}, 800);
	$(this).children().children().children(".price").stop(true).animate({
		paddingLeft:"5px"		
	}, 600);
	$(this).children().children().children(".date").stop(true).animate({
		paddingRight:"5px"		
	}, 600);
	$(this).children().children().children("img").stop(true).animate({
		opacity:"0.7"	
	}, 300);
	$(this).children().children().children(".bling").stop(true).animate({
		opacity:"1"	
	}, 300);
},function () {
	/*商品展示中贯穿商品名和价格之间的横线动画 -- 消失*/
	$(this).children().children().children(".line").stop(true).animate({
		width: "50px",
		opacity: "0"		
	}, 600);
	$(this).children().children().children(".price").stop(true).animate({
		paddingLeft:"0px"		
	}, 600);
	$(this).children().children().children(".date").stop(true).animate({
		paddingRight:"0px"		
	}, 600);
	$(this).children().children().children("img").stop(true).animate({
		opacity:"1"	
	}, 300);
	$(this).children().children().children(".bling").stop(true).animate({
		opacity:"0"	
	}, 300);
})