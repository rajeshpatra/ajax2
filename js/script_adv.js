(function(){

	var link =  document.getElementsByTagName("a")[0];

	link.onclick = function() {


		// we will create method names ajax(arg1, arg2); and arg1 will be our file directory for execution
		// and arg2 will be an object of options having method and a complete call back response function.
		// the response = JSON.parse(xhr.responseText)
		// we don't want create ajax function as global function so we will namespace it by placing it in a js object.
		// this new object will be global but each method inside it will be unique to that object.	
		// lets create a Tutsplus object and call method ajax on it like Tutsplus.ajax();

		Tutsplus.ajax('files/ajax.json', {
			method: 'GET',
			complete: function(response) {
				var body = document.getElementsByTagName("body")[0];

				var json = response;

				var heading = json.heading;
				var h2 = document.createElement("h2");
				var h2Text = document.createTextNode(heading);
				h2.appendChild(h2Text);

				var list = document.createElement("ul");

				var items = json.items;
				for (key in items){
					item = items[key];
					var li = document.createElement("li");
					var liText = document.createTextNode(item);
					li.appendChild(liText);
					list.appendChild(li);
				}

				body.appendChild(h2);
				body.appendChild(list);

				body.removeChild(link);
			}
		});

		return false;
	};

})();