var config = {
    style: 'mapbox://styles/xinyi999/cm2xi51sw00i001pa9zl4a4k1',
    accessToken: 'pk.eyJ1IjoieGlueWk5OTkiLCJhIjoiY20xc243OXBiMDgxbDJscHVldHF6dnFpcSJ9.EO37NGlWaFpO-c4FDBBVIg',
    showMarkers: true,
    markerColor: '#3FB1CE',
    projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    title: 'Public and Afordable Hosing Flood Risk',
    subtitle: 'Where and who will be affected by the intensfying climate change?',
    byline: 'By Xinyi Ling',
    para1:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquet tincidunt nisi, a eleifend lectus semper imperdiet. In placerat diam dictum velit lacinia, sed ultricies lacus interdum. Nulla ac tincidunt mauris. In at nibh non dolor lacinia ornare. Mauris ultricies vel neque eu suscipit. Aenean at libero a velit dignissim tempus at sodales mi. Nullam sed pellentesque lorem. Sed ornare, dolor non fringilla ullamcorper, ante massa efficitur ante, eu efficitur orci velit sed nulla. Nulla non nibh eu arcu sodales lobortis. Duis consectetur ligula dolor, at dictum turpis iaculis a. Curabitur dapibus eu dui id efficitur. Sed posuere eget leo a varius.",
    para2:"Curabitur bibendum placerat nisl, ac aliquam nisl mollis id. Sed dapibus fringilla arcu. Nullam quis arcu dictum sem commodo finibus. Donec sollicitudin efficitur lorem congue fringilla. Vestibulum egestas elit in ipsum suscipit, a congue velit mattis. Curabitur efficitur, tellus ac posuere egestas, justo ligula pellentesque nibh, eu pharetra lectus sapien ac est. Fusce aliquet vehicula ligula eget congue. Ut finibus purus mauris, non facilisis enim vehicula sit amet.",
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
            id: 'interlude',
            alignment: 'center',
            hidden: false,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultricies tempor purus, eget tempus sem bibendum vel. Maecenas at justo non felis accumsan condimentum vitae et leo. Sed sodales nec risus maximus congue. Ut quis tincidunt leo. Pellentesque sapien nisl, congue tempus mauris in, pulvinar mattis turpis. Nullam sit amet justo egestas, laoreet mauris ut, pulvinar ipsum. Pellentesque vehicula imperdiet iaculis. Nam in tellus metus. Donec a est non orci efficitur ornare id mattis eros. Aliquam vel facilisis ligula. Nullam tincidunt, sapien vitae bibendum consequat, nibh eros eleifend ligula, et aliquam enim justo eget felis. Sed nec vehicula metus. Pellentesque rutrum dui quis egestas hendrerit. Nullam auctor et tortor sit amet congue.',
            video: 'images/902-1_902-2364-PD2_preview.mp4',
            location: {
            center: [-73.97615, 40.71901],
            zoom: 14.84,
            pitch: 48,
            bearing: 142.44,
            },
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
