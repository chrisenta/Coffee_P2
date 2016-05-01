	var data = new Firebase("https://te-papa-cafe.firebaseio.com/");


	data.on("value", function(snapshot) {
		var context = snapshot.val();
  		console.log(context);

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
		collection: null,
		status: "Making",
		}

	coffee.size = $('input:radio[name=size]:checked').val();
	coffee.caffeine = $('input:radio[name=caffeine]:checked').val();
	coffee.shots = $('input:radio[name=shots]:checked').val();
	coffee.sugar = $('input:radio[name=sugar]:checked').val();
	coffee.payment = $('input:radio[name=cc]:checked').val();
	coffee.collection = $('input:radio[name=collection]:checked').val();
	coffee.status = "Making";

	console.log(coffee);
	data.child("coffees").push(coffee);
	});

$( "button" ).click(function() {
  var text = $( this ).text();
  $( "#result-box" ).val( text );
});



//Geolocation & Google Maps

$( document ).on( "pageinit", "#map-page", function() {
    var defaultLatLng = new google.maps.LatLng(3-41.295502, 174.775796); 
    if ( navigator.geolocation ) {
        function success(pos) {
            // Location found, show map with these coordinates
            drawMap(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
        }
        function fail(error) {
            drawMap(defaultLatLng);  // Failed to find location, show default map
        }
        // Find the users current position.  Cache the location for 5 minutes, timeout after 6 seconds
        navigator.geolocation.getCurrentPosition(success, fail, {maximumAge: 500000, enableHighAccuracy:true, timeout: 6000});
    } else {
        drawMap(defaultLatLng);  // No geolocation support, show default map
    }
    function drawMap(latlng) {
        var myOptions = {
            zoom: 10,
            center: latlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("map-canvas"), myOptions);
        // Add an overlay to the map of current lat/lng
        var marker = new google.maps.Marker({
            position: latlng,
            map: map,
            title: "Greetings!"
        });
    }
});