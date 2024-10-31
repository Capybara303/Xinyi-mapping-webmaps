var config = {
    style: 'mapbox://styles/xinyi999/cm2xi51sw00i001pa9zl4a4k1',
    accessToken: 'pk.eyJ1IjoieGlueWk5OTkiLCJhIjoiY20xc243OXBiMDgxbDJscHVldHF6dnFpcSJ9.EO37NGlWaFpO-c4FDBBVIg',
    showMarkers: true,
    markerColor: '#3FB1CE',
    projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    title: 'Public and Afordable Hosing Flood Risk',
    subtitle: 'Where and who will be affected by the intensfying climate change?',
    byline: 'By Xinyi Ling',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: '',
            description: 'In the fall of 2012, New York City was hit with hurricane that left tens of thousands of public housing residents New York City Housing Authority public housing developments were affected. 24,000 government-subsidized apartments and 40,000 rent-stabilized apartments were also affected. With rising sea levels from climate change and the of more flooding, which areas and <i>who</i> will likely be most affected? How is affordable housing construction responding to this?',
            location: {
                center: [-73.98684, 40.72527],
                zoom: 11.91,
                pitch: 38.00,
                bearing: 13.60
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Red Hook Houses',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/RH_Houses_East_Lorraine_eve_jeh.jpg/440px-RH_Houses_East_Lorraine_eve_jeh.jpg',
            description: 'The Red Hook Houses are two connected public housing complexes located in Red Hook, Brooklyn, New York City. Managed by the New York City Housing Authority (NYCHA), they comprise the largest housing development in Brooklyn.',
            location: {
                center: [-74.00466, 40.67483],
                zoom: 17.04,
                pitch: 59.00,
                bearing: 21.60
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

    ]
};
