window.onload = (function(){

	var link = document.getElementsByTagName("a")[0];

	link.onclick = function(){

		var xhr = new XMLHttpRequest();

		xhr.onreadystatechange = function(){

			if((xhr.readyState == 4) && xhr.status == 200 || xhr.status == 304) {
				var body = document.getElementsByTagName("body")[0];
				var d = document.createElement("div");
				body.appendChild(d);

				var div = document.getElementsByTagName("div")[0];
				div.innerHTML = xhr.responseText;

				body.removeChild(link);

			}
		};

		xhr.open("GET", "files/ajax.html", true);

		xhr.send(null);

		return false;
	};

})();