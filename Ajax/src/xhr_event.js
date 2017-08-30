(function (win, doc) {
	'use strict'
	var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject();

	xhr.onload = function (event) {
		if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
			console.log(xhr.responseText);
		} else {
			alert("Request was unsuccessful: " + xhr.status);
		}
	}

	xhr.onprogress = function (event) {
		debugger;
		var divStatus = document.getElementById('status');
		if (event.lengthComputable) {
			console.log(event);
			divStatus.innerHTML = 'Recived ' + event.position + 'of' + event.totalSize + 'bytes';
		}
	}

	window.ajax = function (option) {
		xhr.open(option.type, option.url, true);
		xhr.send(null);
	}
})(window, document)