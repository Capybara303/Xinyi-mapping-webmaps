mapboxgl.accessToken = "pk.eyJ1IjoieGlueWk5OTkiLCJhIjoiY20xc243OXBiMDgxbDJscHVldHF6dnFpcSJ9.EO37NGlWaFpO-c4FDBBVIg";

const map = new mapboxgl.Map({
	container: "Xinyi",
	style: 'mapbox://styles/xinyi999/cm3hksf9f00d301rv0pr9hdji',
    center: [-122.41565, 37.78101],
    zoom: 12.29,
    pitch: 30,
    bearing: 0,
	minZoom:9

});

map.on('load', function () {
	// MORE CODE WILL GO INSIDE HERE
    map.addSource('restraurantSource', {
        'type':'vector',
        'url': 'mapbox://xinyi999.bpfo4njo'

    });
    
    map.addLayer({
        "id":"restaurantLayer",
        "source": "restraurantSource",
        "source-layer": "Historical_Restaurant_Inspect-08mv8t",
        "type": "circle",
        "paint": {
                'circle-opacity': 0.3,
                'circle-color':
                ['step',
                    ['to-number', ['get', 'inspection_score']],
                    '#aaaaaa',  
                    45, '#440154',  // (45 - 80)
                    80, '#3b528b',  // (80 - 85)
                    85, '#21908d',  // (85 - 90)
                    90, '#5dc963',  // (90 - 95)
                    95, '#fde725'   // (95 - 100)
                    ]
        }

    });

console.log('My name is YOUR-NAME');
map.on('mouseenter', 'restaurantLayer', (e) => {
        var name = e.features[0]['properties']['business_name'];
        var textField = document.getElementById('restText');
        textField.innerHTML = name;
    });     


})