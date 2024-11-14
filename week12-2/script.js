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
        "id":"restraurantLayer",
        "source": "restraurantSource",
        "source-layer": "Historical_Restaurant_Inspect-08mv8t",
        "type": "circle",
        "paint": {
        "circle-color": "#008F8C"
        }

    });



})