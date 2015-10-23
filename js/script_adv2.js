(function(){
	var link = document.getElementsByTagName("a")[0];

	link.onclick = function() {
		Tutsplus.ajax( 'files/ajax.txt', {
			method: 'GET',
			complete: function(response) {
				alert(response);
			}
		});

		return false;
	};

	var form = document.getElementsByTagName("form")[0];

	form.onsubmit = function() {
		var emailVal = document.getElementById('email').value;
		var url = form.getAttribute("action");

		var body = document.getElementsByTagName("body")[0];
		var d = document.createElement("div");
		body.appendChild(d);

		var div = document.getElementsByTagName('div')[0];

		// as we are requesting a post method we need a "data" option to pass into the method
		Tutsplus.ajax(url, {
			method: 'POST',
			data: {
				email: emailVal
			},
			before: function() {
				div.innerHTML = "<p>Loading...</p>";
			},
			complete: function(response) {	
				div.innerHTML = response;
				Tutsplus.flash(div);
			}
		})

		return false;
	};

})();