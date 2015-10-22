var Tutsplus = {};

Tutsplus.createXHR = function(url, options) {
	var xhr = false;

	if (window.XMLHttpRequest) {
		xhr = new XMLHttpRequest();
	}

	if (xhr) {
		options = options || {};
		options.method = options.method || 'GET';

		xhr.onreadystatechange = function() {
			if ((xhr.readyState == 4) && xhr.status == 200 || xhr.status == 304) {
				var contentType = xhr.getResponseHeader('Content-Type'); // for handling different responses json/xml/html/txt

				if (options.complete) {
					if (contentType == "application/json") {
						options.complete.call(xhr, JSON.parse(xhr.responseText));
					} else if (contentType == "text/xml" || "application/xml") {
						options.complete.call(xhr, xhr.responseXML);
					} else {
						options.complete.call(xhr, xhr.responseText);
					}
				}
			}
		};

		xhr.open(options.method, url, true);
		return xhr;
	} else {
		return false;
	}
};

Tutsplus.ajax = function(url, options) {
	var xhr= Tutsplus.createXHR(url, options);

	if (xhr) {
		xhr.send(null);
	}
};