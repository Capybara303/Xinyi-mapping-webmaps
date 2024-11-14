mapboxgl.accessToken = "pk.eyJ1IjoieGlueWk5OTkiLCJhIjoiY20xc243OXBiMDgxbDJscHVldHF6dnFpcSJ9.EO37NGlWaFpO-c4FDBBVIg",

const map = new mapboxgl.Map({
	container: "Xinyi",
	style: 'mapbox://styles/xinyi999/cm3hksf9f00d301rv0pr9hdji',
    center: [-122.41565, 37.78101],
    zoom: 12.29,
    pitch: 30,
    bearing: 0,
	minZoom:9

})