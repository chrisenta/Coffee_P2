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
		shots: null,
		sugar: null,
		payment: null,
	}

	coffee.size = $('input:radio[name=size]:checked').val();
	coffee.caffeine = $('input:radio[name=caffeine]:checked').val();
	coffee.shots = $('input:radio[name=shots]:checked').val();
	coffee.sugar = $('input:radio[name=sugar]:checked').val();
	coffee.payment = $('input:radio[name=cc]:checked').val();

	console.log(coffee);
	data.child("coffees").push(coffee);

	});

	$("making").click(function(){
		var making = {
			current: true
		}

		console.log(making);

	});

// var date = new Date();
// var components = [
//     date.getYear(),
//     date.getMonth(),
//     date.getDate(),
//     date.getHours(),
//     date.getMinutes(),
//     date.getSeconds(),
//     date.getMilliseconds()
// ];

// var OrderNo = components.join("");