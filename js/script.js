// First we will create a anonymous function, so that the code between it will only interact within itself.

(function(){

	var link = document.getElementsByTagName("a")[0];

	link.onclick = function() {

		// 1. creating a XHR Object
		var xhr = new XMLHttpRequest();

		// 2. handling "onreadystatechange" event
		xhr.onreadystatechange = function() {

			if ((xhr.readyState == 4) && xhr.status == 200 || xhr.status == 304) {
				var body = document.getElementsByTagName("body")[0];
				var p = document.createElement("p");
				var pText = document.createTextNode(xhr.responseText);
				p.appendChild(pText);
				body.appendChild(p);
			}
		};

		// 3. open
		xhr.open("GET", "files/ajax.txt", true);

		// 4. send
		xhr.send(null);

		return false;
	};

})();