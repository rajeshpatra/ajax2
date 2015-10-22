(function(){

	var link = document.getElementsByTagName("a")[0];

	link.onclick = function(){

		var xhr = new XMLHttpRequest();

		xhr.onreadystatechange = function(){
			if((xhr.readyState ==4) && xhr.status == 200 || xhr.status == 304){
				var body = document.getElementsByTagName("body")[0];
				
				var json = JSON.parse(xhr.responseText);

				var heading = json.heading;
				var h2 = document.createElement("h2");
				var h2Text = document.createTextNode(heading);
				h2.appendChild(h2Text);

				var list = document.createElement("ul");

				var items = json.items;

				for (key in items) {
					var item = items[key];
					var li = document.createElement("li");
					var liText = document.createTextNode(item);
					li.appendChild(liText);
					list.appendChild(li);

				}

				body.appendChild(h2);
				body.appendChild(list);

				body.removeChild(link);
			}
		};

		return false;


	};

})();