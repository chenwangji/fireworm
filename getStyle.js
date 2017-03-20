function getStyle(obj,attr) {
	var styleObj = obj.currentStyle || getComputedStyle(obj,null);
	return styleObj[attr];
}
