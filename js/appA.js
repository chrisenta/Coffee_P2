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
  var coords = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
  var defaultPos = new google.maps.LatLng(-41.295502, 174.775796);
var mapcanvas = document.createElement('div');
  mapcanvas.id = 'mapcontainer';
  mapcanvas.style.height = '400px';
  mapcanvas.style.width = '600px';


if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(success);
function success(position) {
	drawMap(coords);
}

function fail(error) {
	drawMap(defaultPos);
}

navigator.geolocation.getCurrentPosition(success, fail, {maximumAge: 500000, enableHighAccuracy:true, timeout: 6000});
} else {
        drawMap(defaultLatLng);  // No geolocation support, show default map
    }
  
  document.querySelector('article').appendChild(mapcanvas);


function drawMap(LatLng) {
  var options = {
    zoom: 15,
    center: coords,
    mapTypeControl: false,
    navigationControlOptions: {
    	style: google.maps.NavigationControlStyle.SMALL
    },
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById("mapcontainer"), options);

  var marker = new google.maps.Marker({
      position: coords,
      map: map,
      title:"You are here!"
  });
  }
}


