function moveMultiple(obj,attrObj,callBack) {
	//清除计时器
	clearInterval(obj.timer);
	
	obj.timer = setInterval(function () {
		//定义变量，记录每个样式是否达到目标值
		var bStop = true;
		
		for(var attr in attrObj) {
			//取每次计时器刷新后的样式值
			if(attr == "opacity") {
				var current = Math.round(getStyle(obj,attr) * 100);
			}else {
				var current = parseInt(getStyle(obj,attr));
			}
			
			//取速度 ----attrObj[attr] 即为target
			var speed = (attrObj[attr] - current) / 10;
			speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
	
			//改样式
			if(attr == "opacity") {
				obj.style.opacity = (current + speed) / 100;
				obj.style.filter = "alpha(opacity=" + (current + speed) + ")";
			}else {
				obj.style[attr] = current + speed + "px";
			}
			
			
			if(current !== attrObj[attr]) {
				bStop = false;
			}
		}
		
		//判断是否停止计时器
		if(bStop) {
			clearInterval(obj.timer);
			obj.timer = 0;
			if(callBack){
				callBack();
			}
		}
	},60);
}
