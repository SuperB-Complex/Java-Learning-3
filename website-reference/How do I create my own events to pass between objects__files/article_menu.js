
$(document).ready(function()
{
	initArticleMenu(document.getElementById("toolBoxShareMenu"));
});	//end onready



var searchChildsByTagName = function(element, childTagName, level, maxLevel) {
	maxLevel = maxLevel || 0;
	level = level || 0;
	
	var childs = new Array();
	for(var i=0;i<element.childNodes.length;i++) {
		if (element.childNodes[i].tagName == childTagName) {
			childs.push(element.childNodes[i]);
		}
		if (element.childNodes[i].childNodes.length > 0 && (maxLevel == 0 || level < maxLevel)) {
			childs = childs.concat(searchChildsByTagName(element.childNodes[i],childTagName,level+1,maxLevel));
		}
	}
	return childs;
}

var searchChilds = function(element, childClassName, level, maxLevel) {
	maxLevel = maxLevel || 0;
	level = level || 0;
	
	var childs = new Array();
	for(var i=0;i<element.childNodes.length;i++) {
		if (hasClass(element.childNodes[i],childClassName)) {
			childs.push(element.childNodes[i]);
		}
		if (element.childNodes[i].childNodes.length > 0 && (maxLevel == 0 || level < maxLevel)) {
			childs = childs.concat(searchChilds(element.childNodes[i],childClassName,level+1,maxLevel));
		}
	}
	return childs;
}
var hasClass = function(element, className) {
	var array = (element.className || element).toString().split(/\s+/);
	
	var j=-1;
	for (var i=0;i<array.length;i++) {
		if (array[i] === className) {
			j=i;
		}
	}
	return (j > -1);
}

var initArticleMenu = function(element) {
	if (element == undefined) return false;
	
	var m = new function() {
		var self = this;
		var bOver = false;
		var aTrigger = undefined;
		var subMenu = undefined;
		var ele = element;
		var hideTimeout = 0;
		
		var onMouseOver = function() {
			bOver = true;
			cancelHide();
			doShow();
		};
		
		var onMouseOut = function() {
			bOver = false;
			initHide();
		};
		
		var onSubMenuMouseOver = function() {
			bOver = true;
			cancelHide();
			doShow();
		};
		
		var onSubMenuMouseOut = function() {
			bOver = false;
			initHide();
		};
		
		var doShow = function() {
			ele.style.backgroundPosition = "0 0";
			if (subMenu) subMenu.style.display = "block";
		};
		
		var doHide = function() {
			cancelHide();
			if (!bOver) {
				ele.style.backgroundPosition = "0 -1000px";
				if (subMenu) subMenu.style.display = "none";
			}
		};
		var initHide = function() {
			cancelHide();
			hideTimeout = window.setTimeout(doHide,300);
		};
		var cancelHide = function() {
			if (hideTimeout > 0) window.clearTimeout(hideTimeout);
			hideTimeout = 0;
		};
		
		aTrigger = searchChildsByTagName(ele, "A", 0, 1);
		if (aTrigger.length > 0) {
			aTrigger = aTrigger[0];
			
			aTrigger.onmouseover = onMouseOver;
			aTrigger.onmouseout = onMouseOut;
		}
		
		subMenu = searchChilds(ele,"shareSubMenu");
		if (subMenu.length > 0) {
			subMenu = subMenu[0];
			subMenu.onmouseover = onSubMenuMouseOver;
			subMenu.onmouseout = onSubMenuMouseOut;
		} else {
			subMenu = undefined;
		}
	}
	
	return m;
}
