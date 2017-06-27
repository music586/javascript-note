(function (win, doc) {
'use strict'

var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject();

	var handler = function () {
		xhr.onreadystatechange = function (res) {
		if (xhr.readyState == '4' && xhr.state == '200') {
			option.cb && option.cb(res.response);
		}
	}
	}
	
var ajax = function (option) {
	var method = option.type || 'GET';
	var url = option.url || '';
	handler(option);
	xhr.open(method, url, true);
	xhr.send();
}
win.ajax = ajax;

})(window, document);