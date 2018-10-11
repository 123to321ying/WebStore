/*点击商品展示下的小图片，上边展示自动换取当前点击图片*/
$(".goods_show .goods_photo_list img").hover(function() {
	$(".goods_show .goods_photo_list img").each(function() {
		$(this).parent(".goods_photo_item").css({
			"border-bottom": "2px solid white"
		})
		$(this).css({
			"opacity": "0.5",
		})
	})
	var $temp = $(this).attr("src");
	$(".goods_photo .detail_show_photo").attr("src", $temp);
	$(this).parent(".goods_photo_item").css({
		"border-bottom": "2px solid #ef2f23"
	})
	$(this).css({
		"opacity": "1",
	})
}, function() {
	$(".goods_show .goods_photo_list img").each(function() {
		$(this).css({
			"opacity": "0.5"
		});
		$(this).parent(".goods_photo_item").css({
			"border-bottom": "2px solid white"
		});
	})
	$(this).css({
		"opacity": "1"
	});
	$(this).parent(".goods_photo_item").css({
		"border-bottom": "2px solid #ef2f23"
	});
});
/*商品规格产品单击选定后样式*/
/*样式*/
$(".goods_show .choose_photo li").click(function() {
	$(".choose_photo li").each(function() {
		$(this).css("border", "2px solid #ddd");
		$(this).children().remove(".choose_right");
	})
	var $temp = $(this).children().attr("src");
	$(this).css("border", "2px solid #666");
	var addSpan = "<span class='choose_right'></span>";
	$(this).append(addSpan);
	$(".goods_photo .detail_show_photo").attr("src", $temp);
})
$(".set_meal .choose_photo li").click(function() {
	$(".choose_photo li").each(function() {
		$(this).css("border", "2px solid #ddd");
		$(this).children().remove(".choose_right");
	})
	var $temp = $(this).children().attr("src");
	$(this).css("border", "2px solid #666");
	var addSpan = "<span class='choose_right'></span>";
	$(this).append(addSpan);
})
/*尺寸*/
$(".choose_goods_size li").click(function() {
	$(".choose_goods_size li").each(function() {
		$(this).css("border", "2px solid #ddd");
		$(this).children().remove(".choose_right");
	})
	var $temp = $(this).children().attr("src");
	$(this).css("border", "2px solid #666");
	var addSpan = "<span class='choose_right'></span>";
	$(this).append(addSpan);
	$(".goods_photo .detail_show_photo").attr("src", $temp);
	console.log($(this).text());
	switch($(this).text()) {
		case "S":
			$(this).parents().find(".inventory").children("span").text("100");
			break;
		case "M":
			$(this).parents().find(".inventory").children("span").text("200");
			break;
		case "L":
			$(this).parents().find(".inventory").children("span").text("300");
			break;
		case "XL":
			$(this).parents().find(".inventory").children("span").text("400");
			break;
		default:
			$(this).parents().find(".inventory").children("span").text("500");
			break;
	}
})
/*商品数量--减*/
$(".num_add_del .del").click(function() {
	var $temp = parseInt($(".num_add_del input").val());

	if($temp == 1) {
		$(".num_add_del input").val("1");
	} else {
		$temp -= 1;
		$(".num_add_del input").val($temp);
	}
})
/*商品数量--加*/
$(".num_add_del .add").click(function() {
	var $temp = parseInt($(".num_add_del input").val());
	$temp += 1;
	$(".num_add_del input").val($temp);
})
/*商品数量--input*/
$(".num_add_del input").focusout(function() {
	if($(this).val() == 0) {
		$(this).val("1");
	}
})

/*隐藏列表加减*/
/*商品数量--减*/
$(".num_add_del .del_").click(function() {
	var $temp = parseInt($(".num_add_del input").val());

	if($temp == 1) {
		$(".num_add_del input").val("1");
	} else {
		$temp -= 1;
		$(".num_add_del input").val($temp);
	}
})
/*商品数量--加*/
$(".num_add_del .add_").click(function() {
	var $temp = parseInt($(".num_add_del input").val());
	$temp += 1;
	$(".num_add_del input").val($temp);
})
/*套餐选择展示*/
$(".set_meal_title li").click(function() {
	$(".set_meal_title li").each(function() {
		$(this).removeClass("active");
	})
	$(this).addClass("active");
})
/*套餐隐藏页显示*/
var flag = true; //判断隐藏页隐藏于否
$(".select_type").click(function() {
	$(".hide_more").each(function() {
		$(this).css("display", "none");
	})
	if(flag) {
		$(this).siblings(".hide_more").css("display", "block");
		flag = false;
	} else {
		$(this).siblings(".hide_more").css("display", "none");
		flag = true;
	}
	$(".close").click(function() {
		flag = true;
		$(this).parents().find(".hide_more").css("display", "none");
	})
	flag = true;
})
/*切换套餐*/
$(".set_meal_title li").click(function() {
	var $index = $(this).index();
	$(".set_meal_list ul").each(function() {
		$(this).css("display", "none");
	})
	console.log($(".set_meal_list ul").eq($index));
	$(".set_meal_list .meal").eq($index).css("display", "inline-block");

})
/*商品详情-评价-本店同款商品切换*/
$(".products_detail").eq(0).css("display", "block");
$(".model_sorts li").click(function() {
	var $index = $(this).index();
	$(".model_sorts li").each(function() {
		$(this).css("border-top", "4px solid #f6f6f6");
		$(".model_sorts li").css("background", "#f6f6f6");
	})
	//判断 只有商品详情时显示右侧导航
	if($index == "0") {
		$(".right ul").css("display", "block");
	} else {
		$(".right ul").css("display", "none");
	}
	$(".products_detail").each(function() {
		$(this).css("display", "none");
	})
	$(this).css("border-top", "4px solid #ef2f23");
	if($(this).attr("class") == "same fl") {
		$(".products_detail").eq(0).css("display", "block");
	} else {
		$(".products_detail").eq($index).css("display", "block");
	}

})
/*二维码显示*/
$(".right_title").hover(function() {
	$(".QR_code").css("display", "block");
}, function() {
	$(".QR_code").css("display", "none");
})
/*商品详情介绍 右侧边栏 文本框显示*/
$(".right ul li").hover(function() {
	$(this).css("border", "1px solid #ddd");
}, function() {
	$(this).css("border", "1px solid #fff");
})
/*商品详情滚动 标题固定*/
$(".model_sorts li").eq(0).css("background", "white");
$(window).scroll(function() {
	var $top = $(document).scrollTop();
	$(".model_sorts li").click(function() {
		$(".model_sorts li").each(function() {
			$(".model_sorts li").css("background", "#f6f6f6");
		})
		$(this).css("background", "white");
	})
	var $top_ = $(".left_mid_right").offset().top;
	if($top > 　$top_) {
		$(".left .store .left_title").css({
			width: "220px"
		});
		$(".left .store .left_title").addClass("fix_show");
		$(".left .store .left_title").children().find("i").css("display", "none");
		$(".model_sorts").addClass("fix_show");
		$(".right").css("position", "fixed");
	} else {
		$(".left .left_title").css({
			width: "198px"
		});
		$(".left .left_title").removeClass("fix_show");
		$(".left .store .left_title").children().find("i").css("display", "block");
		$(".model_sorts").removeClass("fix_show");
		$(".right").css("position", "absolute");
	}
})

/*放大显示照片*/
var bool = true; /*判断是否放大图片*/
var index;
$(".info_img li").click(function() {
	$(".info_img li").each(function() {
		$(this).children().children("i").css("display", "none");
	})

	$(this).children().children("i").css("display", "block");
	if(bool) {
		var $index = $(this).index();
		var $temp_img = $(this).children().children("img").attr("src");
		var temp = "<img src=''/>";
		var $b_img = $(this).parent().siblings(".b_img").append(temp);
		$(this).parent().siblings(".b_img").children("img").attr("src", $temp_img);
		bool = false;
		$(this).parent().siblings(".b_img").stop(true).show(1500);
	} else {
		bool = true;
		$(this).parent().siblings(".b_img").stop(true).hide(1500);
	}
})

/*非顶端位置 跳转*/
$(".model_sorts li").click(function() {
	var $top_ = $(".left_mid_right").offset().top;
	$("html,body").animate({
		scrollTop: $top_
	});
	$(this).css("background", "white");
})
$(".model_sorts li.same").click(function() {
	var $top = $('.products_title').eq(4).offset().top - 40;
	$("html,body").animate({
		scrollTop: $top
	});
	$(this).css("background", "white");
})

/*右侧边栏页面跳转*/
$(".right li").click(function() {
	var $index = $(this).index();
	if($index == 0) {
		console.log($('.model_sorts').offset().top);
		$('html,body').animate({
			scrollTop: $('.model_sorts').offset().top
		}, 800);
	}
})

/*右侧导航 跳转商品详情显示*/
$(".right li").click(function() {
	var $index = $(this).index();
	var $top = $(".products_title").eq($index).offset().top;
	$top -= 40;
	$("html,body").animate({
		scrollTop: $top
	});
})

/*收藏 星星变色*/
$(".star").click(function() {
	$(this).children().css("color", "#EF2F23");
	$(this).css("border", "1px solid #EF2F23");
})

/*店铺关注*/
var flag_heart = true;
$(".shopInfo-search .heart").click(function() {
	if(flag_heart) {
		$(this).children("span").text("已关注");
		flag_heart = false;
	} else {
		$(this).children("span").text("关注店铺");
		flag_heart = true;
	}
})

/*领卷*/
$(".voucher_cards").click(function() {
	$(this).children(".hold").text("已领");
	$(this).children(".hold").css("background", "#999");
	$(this).css({
		color: "#999",
		border: "1px solid #999"
	})
	$(this).children(".red").attr("class", "");
})

/*抛物线动画*/
var eleBtn = document.getElementById('btnCart');
var eleFlyItem = document.getElementById('flyItem');
var eleFlyImg = eleFlyItem.querySelector('img');
var eleCart = document.querySelector('#shopCart');

var isRunning = false;
eleBtn.addEventListener('click', function() {
	eleFlyItem.style.display = "block";
	// 现在按钮距离购物车的距离
	var boundBtn = eleBtn.getBoundingClientRect();
	var boundCart = eleCart.getBoundingClientRect();
	// 中心点的水平垂直距离
	var offsetX = 490;
	var offsetY = boundCart.top + boundCart.height / 2 - (boundBtn.top + boundBtn.height / 2);
	console.log(offsetX);
	// 页面滚动尺寸
	var scrollTop = document.documentElement.scrollTop || document.body.scrollTop || 0;
	var scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft || 0;
	console.log(scrollTop);
	console.log(boundBtn.left + this.clientWidth / 2);
	if(isRunning == false) {
		// 购物车图形出现与初始定位
		eleFlyItem.style.display = 'block';
		/*  eleFlyItem.style.left = (boundBtn.left) + 'px';
		  eleFlyItem.style.top = (boundBtn.top) + 'px';*/
		// 开始动画
		eleFlyItem.style.transform = 'translateX(' + offsetX + 'px)';
		eleFlyImg.style.transform = 'translateY(' + offsetY + 'px)';
		console.log(offsetX);
		// 动画标志量
		isRunning = true;
		setTimeout(function() {
			eleFlyItem.style.display = '';
			eleFlyItem.style.transform = 'translateX(0)';
			eleFlyImg.style.transform = 'translateY(0)';
			isRunning = false;
			//          eleCart.querySelector('span').innerHTML = eleCart.querySelector('span').innerHTML * 1 + 1;
		}, 600);
	}
});

/*商品详情介绍中的收藏店铺*/
var flag_g = true;
$(".go_store a").eq(0).click(function () {
	$(this).attr("href","javascript:;");
	if(flag_g){
		$(this).text("已收藏");
		$(this).css({
			color:"#ef2f23",
			border:"1px solid #ef2f23"
		});
		flag_g = false;
	}else{
		$(this).text("收藏店铺");
		$(this).css({
			color:"#333",
			border:"1px solid #ddd"
		});
		flag_g = true;
	}
	
})