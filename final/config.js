var config = {
    style: 'mapbox://styles/xinyi999/cm2xi51sw00i001pa9zl4a4k1',
    accessToken: 'pk.eyJ1IjoieGlueWk5OTkiLCJhIjoiY20xc243OXBiMDgxbDJscHVldHF6dnFpcSJ9.EO37NGlWaFpO-c4FDBBVIg',
    showMarkers: false,
    markerColor: '#3FB1CE',
    projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    title: 'A Stage of Many Colors',
    subtitle: "Broadway's Evolution in Cultural Diversity: Examining Racial and Gender Equality",
    byline: 'By Xinyi Ling',
    para1:"Broadway is a symbol of American cultural identity and a hub of performing arts, attracting millions of audiences worldwide. As the epicenter of musical theater, the Broadway theater district in New York has played a significant role in shaping cultural narratives through its productions.",
    para2:"However, historically, Broadway has often been critiqued for a lack of diversity and representation, favoring white, male-centric narratives. Recent shifts in the industry's approach toward inclusivity, particularly concerning racial and gender equality, have sparked crucial conversations about how Broadway represents marginalized groups both on and off stage. Productions like Hamilton, with its groundbreaking use of a diverse cast, and Suffs, which features an all-female cast, have highlighted the progress and ongoing challenges in achieving genuine diversity.",
    footer: 'Source: [1]The Representation of Minorities in American Musical Theater since the 1950s | Digitalni repozitorij Sveučilišta u Zagrebu. (n.d.). Retrieved October 8, 2024, from https://repozitorij.unizg.hr/islandora/object/ffzg:2542 <br> [2]Gentry, K. (2017). Changing Scenes: The Rise and Success of Diversity on Broadway. <br> [3]How Suffs on Broadway Built Its Team of Powerful Women | Playbill. (n.d.). Retrieved November 19, 2024, from https://playbill.com/article/how-suffs-on-broadway-built-its-team-of-powerful-women <br> [4]Broadway Demographics Report Reveals Increased Audience Diversity, Overall Attendance Trending Up. (n.d.). United States Institute for Theatre Technology. Retrieved November 19, 2024, from https://www.usitt.org/news/broadway-demographics-report-reveals-increased-audience-diversity-overall-attendance-trending <br> [5]Broadway Diversity. (n.d.). Retrieved November 19, 2024, from https://towsondatastories.weebly.com/broadway-diversity.html',
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
