(function (win, doc) {
'use strict'

var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject();

	var handler = function (option) {
	// 	xhr.onreadystatechange = function (res) {
	// 	if (xhr.readyState == '4' && xhr.status == '200') {
	// 		option.cb && option.cb(xhr.response);
	// 	}
	// }
	
	 xhr.onload = function(){
	 	if (xhr.readyState == '4' && xhr.status == '200') {
			option.cb && option.cb(xhr.response);
		}
	 }

	 xhr.timeout = 1000;
	 xhr.ontimeout = function () {
	 	alert('request did not returns in a second');
	 }
	}

	
	
var ajax = function (option) {
	var method = option.type || 'GET';
	var url = option.url || '';
	handler(option);
	var fd = new FormData();
		for (var d in option.data) {
			fd.append(d, option.data[d]);
		}
	xhr.open(method, url, true);
	xhr.overrideMimeType('text/xml');
	xhr.send(fd);
}
win.ajax = ajax;

})(window, document);