	var data = new Firebase("https://te-papa-cafe.firebaseio.com/");

	data.on("value", function(snapshot) {
		var context = snapshot.val();

		var source = $("#home-template").html();
		var template = Handlebars.compile(source);
		var html = template(context);

		 console.log(html);
		 $("#yield").html(html);
	});





	$("#submit").click(function(){
		var coffee = {

		size: null,
		caffeine: null,
		shots: null
	}

	coffee.size = $('input:radio[name=size]:checked').val();
	coffee.caffeine = $('input:radio[name=caffeine]:checked').val();
	coffee.shots = $('input:radio[name=shots]:checked').val();

	console.log(coffee);
	data.child("coffees").push(coffee);

	});
