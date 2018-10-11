/*点击确定后按价格筛选商品*/
var li = $(".goods_box ul").children();
var a = new Array();
$(".goods_box ul").children().each(function() {
	a.push($(this));
});
	console.log(a);
	a[0].children().children().children(".price").text().substring(1);
$(".togo").click(function() {
	var arr = new Array();
	$(".goods_box ul").children().each(function() {
		arr.push($(this).children().children().children(".price").text().substring(1));
	});
	var $min = $(".min").val();
	var $max = $(".max").val();
	if($max == "") {
		$max = 99999;
	} else if($min == "") {
		$min = 0;
	}
	if($min > $max) {
		var temp = $min;
		$min = $max;
		$max = temp;
	}
//	$(".goods_box .price").each(function(index, e) {
//		arr[index] = parseInt($(e).text().substring(1));
//	});
	for(var i = 0; i < arr.length; i++) {
		if(arr[i] < $min || arr[i] > $max) {
			arr.splice(i, 1);
		}
	}
	console.log(arr);

	$(".goods_box ul").children().remove();
	var len = a.length;
	for(i = 0; i < arr.length; i++) {
		for(j = 0; j < len; j++) {
			if(arr[i] == a[j].children().children().children(".price").text().substring(1)) {
				console.log(a[j].children().children().children(".price").text().substring(1));
				a[j].appendTo(".goods_box ul");
				break;
			}
		}
	}

	/*如果商品展示为空 显示"无符合"*/
	/*$(".alert_box").css("display", "block");*/
})

/*价格升序*/
$(".up").click(function() {
	var arr = new Array();
	$(".goods_box .price").each(function(index, e) {
		arr[index] = parseInt($(e).text().substring(1));
	});
	for(i = 1; i < arr.length; i++) {
		for(j = 0; j < arr.length - i; j++) {
			var temp = 0;
			if(arr[j] > arr[j + 1]) {
				temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
			}
		}
	}
	var len = $(".goods_box .price").length;
	for(i = 0; i < arr.length; i++) {
		for(j = 0; j < len; j++) {
			if(arr[i] == $(".goods_box .price").eq(j).text().substring(1)) {
				$(".goods_box .price").eq(j).parents("li").remove().appendTo(".goods_box ul");
				break;
			}
		}
	}
})

/*价格降序*/
$(".down").click(function() {
	var arr = new Array();
	$(".goods_box .price").each(function(index, e) {
		arr[index] = parseInt($(e).text().substring(1));
	});
	for(i = 1; i < arr.length; i++) {
		for(j = 0; j < arr.length - i; j++) {
			var temp = 0;
			if(arr[j] < arr[j + 1]) {
				temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
			}
		}
	}
	var len = $(".goods_box li").length;
	for(i = 0; i < arr.length; i++) {
		for(j = 0; j < len; j++) {
			if(arr[i] == $(".goods_box .price").eq(j).text().substring(1)) {
				$(".goods_box li").eq(j).remove().appendTo(".goods_box ul");
				break;
			}
		}
	}
})