var config = {
    style: 'mapbox://styles/jessicasinger/clox6di0700pk01qsho0w6c31', //TomahHighlands_Storytelling
    accessToken: 'pk.eyJ1IjoiamVzc2ljYXNpbmdlciIsImEiOiJjbGlqNDBzanAwNDBoM2NwZTYwdHBvY3A3In0.K5tOO7mq2uXeRrccjnBveg',
    showMarkers: false,
    markerColor: '#B5DBD2',
    showPopup: true,
    popupColor: '#B5DBD2',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'dark',
    use3dTerrain: true, //set true for enabling 3D maps.
    auto: false,
    //title: 'Dynamic Baselining',
    //  subtitle: 'Carbon Project',
    //byline: 'By a Digital Storyteller',
    //footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Delineate the Project Region and Respective “Wood Basket” ',
             image: 'projectregionlegend1.png',
            description: 'A 150-mile driving distance buffer around the project area is calculated and used to delineate a reference region of comparable properties. This region is used to identify comparable properties with similar landowners and similar characteristics such as acreage, forest types, and harvesting activities to the project. The 150-mile driving distance buffer indicates the area around a project that is the same “wood basket” where comparable landowners are harvesting and delivering wood to the same forest product market as the project area',
            location: {
                center: [-92.9991361, 46.2526692],
                zoom: 6.2,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'bayfieldboundary',
                    opacity: 0.8,
                    duration: 1000
                },
                {
                    layer: 'referenceproperties',
                    opacity: 0,
                    //  duration: 1000
                },
                {
                    layer: 'bayfieldbiomassloss20192020',
                    opacity: 0,
                    duration: 1000,
                }
            ],
            onChapterExit: [
                {
                    layer: 'bayfieldboundary',
                    opacity: 0.8,
                    duration: 1000
                },
                {
                    layer: 'referenceproperties',
                    opacity: 0,
                    duration: 1000
                },
                {
                    layer: 'bayfieldbiomassloss20192020',
                    opacity: 0,
                    duration: 1000,
                }

            ],
        },

        {
            id: 'second-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Identify and Map Forest Types within the Project Region',
            image: 'forestypeslegend2.png',
            description: 'Mapping forest types within the reference region is a crucial step for identifying a baseline as it allows us to detect areas with similar forest types as the project. These forest types are determined using a combination of Anew’s carbon plot data, high-resolution satellite imagery and machine learning models.',
           //  secondimage: 'foresttypeslegend.png',
            location: {
                center: [-92.9991361, 46.2526692],
                zoom: 6.2,
                pitch: 0,
                bearing: 0,
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
            onChapterEnter: [
                {
                    layer: 'referenceproperties',
                    opacity: 0,
                    // duration: 1000
                },
                {
                    layer: 'bayfieldbiomassloss20192020',
                    opacity: 0,
                    // duration: 1000,
                },
                {
                    layer: 'nlcd-polygons-evergreen',
                    opacity: 1,
                    // duration: 1000,
                },
                {
                    layer: 'nlcd-polygons-mixed',
                    opacity: 0.6,
                    // duration: 1000,
                },
                {
                    layer: 'nlcd-polygons3',
                    opacity: 0.6,
                    // duration: 1000,
                },
                
            ],
            onChapterExit: [
                // {
                //     layer: 'referenceproperties',
                //     opacity: 0,
                //     //    duration: 1000
                // },
                {
                    layer: 'bayfieldbiomassloss20192020',
                    opacity: 0,
                    //   duration: 1000,
                },
                {
                    layer: 'nlcd-polygons-evergreen',
                    opacity: 0,
                    // duration: 1000,
                },
                {
                    layer: 'nlcd-polygons-mixed',
                    opacity: 0,
                    // duration: 1000,
                },
                {
                    layer: 'nlcd-polygons3',
                    opacity: 0,
                    // duration: 1000,
                },
            ],

            // ],
            // // Add a second text box
            // secondTextBox: {
            //     title: 'Additional Information',
            //     image: 'Baldeagle',
            //     content: 'This is the second text box. You can add more details or information here.'
            // }
        },


        {
            id: 'third-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Identify Reference Properties: Deciduous Forest Type',
            image: 'referproplegend1.png',
            //secondimage: 'legend2.png',
            description: 'Once forest types are identified, harvest intensities on each forest type within the reference region are evaluated by identifying the harvesting activities over the previous 5-year period on the comparable properties.',
            location: {
                center: [-91.7123652, 46.2240231],
                zoom: 10.2,
                pitch: 30,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'referenceproperties',
                    opacity: 1,
                 //   duration: 1000
                },
                {
                    layer: 'deciduous',
                    opacity: 0.4,
                 //   duration: 1000
                }
            ],
            
            onChapterExit: [
                // {
                //     layer: 'referenceproperties',
                //     opacity: 0,
                //  //   duration: 1000
                // }

            ],

        },


        {
            id: 'fourth-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Identify and Calculate Regional Harvest Activities / Intensity of Last 5 years',
            // image: 'legend_4.png',
            secondimage: 'forestlosslegend.png',
            description: 'Once forest types are identified, harvest intensities on each forest type within the reference region are evaluated by identifying the harvesting activities over the previous 5-year period on the comparable properties.',
            location: {
                center: [-92.9991361, 46.2526692],//-91.4991361, 46.2526692
                zoom: 6.2,
                pitch: 0,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'bayfieldbiomassloss20192020',
                    opacity: 1,
                    duration: 1000,
                    //  action: 'popup'
                    // Use popup directly within onChapterEnter
                    // popup: {
                    //     content: '<h3>Critical Habitat Popup</h3><p>This is additional information about the critical habitat.</p>'
                },
                {
                    layer: 'referenceproperties',
                    opacity: 1,
                   // duration: 1000
                }

            ],

            onChapterExit: [
                {
                    layer: 'bayfieldbiomassloss20192020',
                    opacity: 0,
                    duration: 1000,
                },
                // {
                //     layer: 'referenceproperties',
                //     opacity: 1,
                //     duration: 1000
                // }
            ],
        },
        {
            id: 'fifth-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Identify Comparable Harvests',
            image: 'harvestexamples2.png',
            // secondimage: 'legend2.png',
            description: 'Comparable properties are used in the continuous evaluation and refinement of the baseline harvesting activities.  Comparable properties are chosen from a pool of nearby landowners with similar forest type(s), ecological condition(s), and/or species/product mixture.  Comparable landowners are identified within the same “Wood Basket” as the project area, thereby resulting in a baselines that are based off of the observed harvesting activities of comparable landowners in the same timber market.',
            location: {
                center: [-91.9935760, 46.3600100],//-91.4991361, 46.2526692
                zoom: 9.8,
                pitch: 70,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'referenceproperties',
                    opacity: 1,
                 //   duration: 1000
                },
                // {
                //     layer: 'harvestexamples',
                //     opacity: 1,
                //  //   duration: 1000
                // }
            ],
            onChapterExit: [
                {
                    layer: 'referenceproperties',
                    opacity: 1,
                    duration: 1000
                }

            ],
        },

        // {
        //     id: 'fourth-chapter',
        //     alignment: 'fully',
        //     hidden: false,
        //     title: 'Third Title',
        //     image: '',
        //     description: '',
        //     location: {
        //         center: [-58.54195, -34.71600],
        //         zoom: 4,
        //         pitch: 0,
        //         bearing: 0
        //     },
        //     mapAnimation: 'flyTo',
        //     rotateAnimation: false,
        //     callback: '',
        //     onChapterEnter: [],
        //     onChapterExit: []
        // }
    ]
};
