(function(win, doc){
	'use strict'
	var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject();

	// 返回后的处理
	var handler = function (option) {
		xhr.onreadystatechange = function(){
				if (xhr.readyState == '4' && xhr.status=='200') {
					debugger;
					var res = xhr.response;
					if ('object'!= typeof xhr.response) {
						res = JSON.parse(xhr.response);
					}
					option.cb && option.cb(res);
				}
			}
	} 
	
	var ajax = function (option) {
		var url = option.url || '';
		var method = option.type || 'GET';
		xhr.open(method, url, true);
		xhr.send();
		handler(option);
	}
	win.ajax = ajax;
})(window, document);