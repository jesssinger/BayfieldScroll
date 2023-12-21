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
            title: 'Delineate Project Region',
             image: 'projectregionlegend.png',
            description: 'A 150-mile driving distance buffer is created around the project boundary.',
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
            title: 'Map Forest Types within the Region',
            image: 'forestypeslegend.png',
            description: '                                                  ',
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
                }
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
                }
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
            image: 'referproplegend.png',
            //secondimage: 'legend2.png',
            description: 'Reference property selection is based on identifying forest ownerships with a comparable number of hectares of a given forest type as found in the project area',
            location: {
                center: [-91.7123652, 46.2240231],
                zoom: 10,
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
                {
                    layer: 'referenceproperties',
                    opacity: 0,
                 //   duration: 1000
                }

            ],

        },


        {
            id: 'fourth-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Model Percent Forest Loss Over 5 Years',
            // image: 'legend_4.png',
            secondimage: 'forestlosslegend.png',
            description: 'Identify harvest activities and intensities throughout the project region over the previous 5 years',
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
                {
                    layer: 'referenceproperties',
                    opacity: 1,
                    duration: 1000
                }
            ],
        },
        {
            id: 'fifth-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Identify Comparable Harvests',
            image: 'harvestexamples2.png',
            // secondimage: 'legend2.png',
            description: 'Identify example comparable harvests, based on cumulative treated hectares, on 2 reference properties for each harvest prescription in the baseline projection',
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
