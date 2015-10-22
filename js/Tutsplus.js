// create a global Tutsplus object

var Tutsplus = {};

// creatin Tutsplus.createXHR function

Tutsplus.createXHR = function(url, options) {
	// this method will either return xhr object or false(if it couldn't create one)
	var xhr = false;

	// creating xhr object and assigning it to xhr variable

	// checking if the broswer supports XMLHttpRequest or not

	if (window.XMLHttpRequest) {
		xhr = new XMLHttpRequest();
	}

	// checking xhr object created or not, if created then passing onreadystatechange and opening the request

	if (xhr) {
		options = options || {}; // it will pass the options or if no options then the empty object.
		options.method = options.method || 'GET';

		xhr.onreadystatechange = function() {
			if((xhr.readyState == 4) && xhr.status == 200 || xhr.status ==302) {

				// Here we will work with the servers data to show
				// checking if the user has set or not the complete call back  response function

				if (options.complete) {
					 // xhr as argument because user can access the readyState, responseText, status
					 // using this.readyState or this.status etc.
					 // now we will use call method: this allows you to invoke your method and change what the this
					 // key word points to and optionally we can set the arguments to pass
					options.complete.call(xhr, JSON.parse(xhr.responseText));
				}
			}

			xhr.open(options.method, url, true);
			return xhr; // so that the below ajax method can use it after returning
		};
	} else {
		return false;
	}
};

// giving ajax method to Tutsplus object

Tutsplus.ajax = function(url, options) {

	// now creating xhr object, onreadystatechange and open in an another method
	// so we can know wheather the xhr object is created first or not

	var xhr = Tutsplus.createXHR(url, options);

	// checking a xhr object is created successfully or not as the browser may or may not support ajax.

	if (xhr) {

		// if xhr object detected then we can send the request to server

		xhr.send(null);

	}


};