(function(win, doc){
	'use strict'
	var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject();

	// 返回后的处理
	var handler = function (option) {
		xhr.onreadystatechange = function(){
				if (xhr.readyState == '4' && xhr.status=='200') {
					var res = xhr.response;
					if ('object'!= typeof xhr.response) {
						res = JSON.parse(xhr.response);
					}
					option.cb && option.cb(res);
				}
			}
	} 

	// 拼接get的请求参数
	var addParam = function (option) {
		for (var key in option.data){
			option.url +=  option.url.indexOf('?') > -1 ? '&' : '?'
			option.url += encodeURIComponent(key) + '=' + encodeURIComponent(option.data[key])
		}
		return option;
	}
	
	var ajax = function (option) {
		handler(option);
		addParam(option);
		var url = option.url || '';
		var method = option.type || 'GET';	
		xhr.open(method, url, true);
		xhr.setRequestHeader('Accept', 'text/xml');
		// xhr.setRequestHeader('MyHeader', 'testHead');
		xhr.send();
	}
	win.ajax = ajax;
})(window, document);
