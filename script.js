function initMap() {
	// Create the Google Maps Object
	// Custom MAP_ID, change in index.html
	map = new google.maps.Map(document.getElementById('map'), {
		center: {
			lat: 45.508888,
			lng: -73.561668,
		},
		//specify zoom here 
		zoom: 11,
		// tilt: 40.5,	
		mapId: 'MAP_ID',
		mapTypeControl: false,
		fullscreenControl: false,
		streetViewControl: false,
	});


	// Adding custom map markers! 
	// Name
	// Latitude, Longitude
	// Image URL
	// scaledSize width, height
	const markers = [
		[
			"Little message.",
			45.519090,
			-73.580629,
			'yellow_glow.png',
			38,
			31,
		],
		[
			"We are here",
			45.4971123,
			-73.5809226,
			'yellow_glow.png',
			38,
			31,
		],

		45.4971123,-73.5809226
	];

	//https://developers.google.com/maps/documentation/javascript/markers#add
	for (let i = 0; i < markers.length; i++) {
		const currMarker = markers[i];

		const marker = new google.maps.Marker({
			position: { lat: currMarker[1], lng: currMarker[2] },
			map,
			title: currMarker[0],
			icon: {
				url: currMarker[3],
				scaledSize: new google.maps.Size(currMarker[4], currMarker[5]),
			},
			animation: google.maps.Animation.DROP,
		});

		const infowindow = new google.maps.InfoWindow({
			content: currMarker[0],
		});

		marker.addListener('click', () => {
			infowindow.open(map, marker);
		});
	}

}

