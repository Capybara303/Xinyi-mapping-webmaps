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
            id: 'slug-style',
            alignment: 'left',
            hidden: false,
            title: 'Broadway Theaters in NYC',
            description: "Broadway, often referred to as the heart of American theater, has a rich history that dates back to the mid-18th century. Located in New York City's Theater District, it became a hub for performing arts in the early 20th century. Today, Broadway boasts 41 professional theaters, each with a seating capacity of 500 or more. These theaters are primarily concentrated around Times Square, stretching along Broadway and adjacent streets. Known for its vibrant productions ranging from classic plays to modern musicals, the district attracts millions of visitors each year, cementing its status as a global cultural landmark.",
            location: {
                center: [-73.99873, 40.76607],
                zoom: 13.53,
                pitch: 0.00,
                bearing: 28.80
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
            id: 'case1',
            alignment: 'right',
            hidden: false,
            title: 'West Side Story (1957 premiere, 1980/2009/2020 revival) Winter Garden Theater',
            description: '·Progress: The musical explores themes of racism, identity, and assimilation, emphasizing tensions between the Puerto Rican Sharks and the white Jets. <br> <br> ·Limitations: Critics have highlighted the stereotypical portrayal of Puerto Ricans, particularly the depiction of Puerto Rican men as gang members and women as either "fiery" or "virginal." Both the 1957 Broadway production and the 1961 film adaptation featured predominantly white actors in Puerto Rican roles, with practices like "brownface." <br> <br> The 2009 Broadway revival incorporated Spanish lyrics translated by Lin-Manuel Miranda, adding authenticity. Casting decisions also included more actors of Latino descent.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/4/46/I_Feel_Pretty_from_West_Side_Story_1957.JPG',
            location: {
                center: [-73.98362, 40.76141],
                zoom: 19.03,
                pitch: 41.03,
                bearing: 121.60
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },


        {
            id: 'case2',
            alignment: 'left',
            hidden: false,
            title: 'Wicked (2003 premiere) Gershwin Theater',
            description: '·Progress: Highlights themes of acceptance and tolerance through the friendship of two female leads, often celebrated as a milestone for gender equality on stage. <br> <br> ·Limitations: The musical tones down the political and gender-norm-challenging aspects of the original novel to fit mainstream narratives. For instance, Elphaba’s androgyny is replaced with a focus on physical attractiveness, and the female leads’ stories revolve around competing for a man, diluting their independent character arcs.<br><br> Efforts to incorporate diverse experiences have often resulted in "pseudo-diversity", where diversity is superficial and market-driven rather than transformative.',
            image: 'https://cleverock.com/wp-content/uploads/2021/12/Allison-Bailey-Talia-Suskauer-in-the-North-American-Tour-of-WICKED-D.-Photo-by-Joan-Marcus-scaled.jpg',
            location: {
                center: [-73.98495, 40.76237],
                zoom: 19.19,
                pitch: 20.53,
                bearing: -152.00
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },


        {
            id: 'case3',
            alignment: 'right',
            hidden: false,
            title: 'In the Heights (2008 premiere) Richard Rodgers Theatre',
            description: '·Progress: Celebrates the Hispanic community in Washington Heights, blending Latin music, hip-hop, and contemporary musical theater. It offers an honest and stereotype-free depiction of the Latino experience, becoming one of the longest-running Latino-created musicals.<br><br>·Limitations: Despite its triumph, the initial doubts about its marketability reflect an industry still hesitant to embrace minority-centered stories.',
            image: 'https://willyoumissme.com/wp-content/uploads/2009/12/heights116001.jpg',
            location: {
                center: [-73.98691, 40.75912],
                zoom: 19.14,
                pitch: 20.53,
                bearing: -152.00
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },


        {
            id: 'case4',
            alignment: 'left',
            hidden: false,
            title: 'Hamilton (2015 premiere) Richard Rodgers Theatre',
            description: '·Progress: Revolutionizes Broadway by casting people of color as America’s Founding Fathers, putting minorities at the center of a historical narrative. Its innovative use of hip-hop and rap expands the scope of Broadway storytelling.<br><br>·Limitations: While widely celebrated, Hamilton is an outlier rather than the norm, highlighting the ongoing structural barriers to minority-driven productions on Broadway.',
            image: 'https://www.usatoday.com/gcdn/-mm-/ba67ef18d53ccf1ea23d37bc405998b4ee3ee380/c=961-1281-4595-3334/local/-/media/2016/03/28/USATODAY/USATODAY/635947804098414743-XXX-IMG-HAMILTON-CREDIT-JOAN-1-1-QNCK5FRG-78029476.JPG?width=1320&height=746&fit=crop&format=pjpg&auto=webp',
            location: {
                center: [-73.98648, 40.75895],
                zoom: 19.14,
                pitch: 20.53,
                bearing: -152.00
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: 'case5',
            alignment: 'right',
            hidden: false,
            title: 'Suffs (2024 premiere) Music Box Theatre',
            description: "'Suffs' is a Broadway musical created by Shaina Taub that chronicles the fight for women's suffrage, focusing on the diverse figures within the movement. <br> <br> ·Progress: With an entirely female and non-binary cast, including Nikki M. James and Grace McLean, the production highlights marginalized voices and their contributions to feminist history. The creative team is predominantly female, with significant contributions from figures like Leigh Silverman (director) and choreographer Mayte Natalio. The musical features characters like Alice Paul and Ida B. Wells, spotlighting the complex racial dynamics within the suffrage movement.",
            image: 'https://th-thumbnailer.cdn-si-edu.com/kr3J1HkcAebBHhYfYzvqyAwE-bU=/1000x750/filters:no_upscale():focal(1000x748:1001x749)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer_public/a5/02/a502c0c1-461d-4e8f-bd9e-5a98cfec44cc/1-jenn-colella-as-carrie-chapman-catt-and-suffs-company.jpg',
            location: {
                center: [-73.98690, 40.75876],
                zoom: 18.85,
                pitch: 36.00,
                bearing: 28.00
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },



    ]
};
