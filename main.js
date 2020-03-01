$(function () {

    $('.nav').click(function () {
        $(this).css({
            'color': '#406aab'
        }).siblings().css({
            'color': 'black'
        });

        $(`section:eq(${$(this).attr('num')})`).show();
        $(`section:eq(${$(this).attr('num')})`).siblings().hide();
    });

    let count = 0;

    $('.menu').click(function () {
        if (count == 0) {
            $('aside').show();
            $("aside").animate({
                left: "0"
            }, 300);
            count++;
        } else {
            $('aside').hide();
            $("aside").animate({
                left: "-40vw"
            }, 500);
            count--;
        }

    });





});



let map, infoWindow, myPoint;


function initMap() {

    let options = {
        zoom: 16,
        center: {
            lat: 43.863194,
            lng: -78.828056
        },
        mapTypeId: 'hybrid',
        styles: [
            {
                "featureType": "all",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "saturation": 36
                    },
                    {
                        "color": "#333333"
                    },
                    {
                        "lightness": 40
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "color": "#ffffff"
                    },
                    {
                        "lightness": 16
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#fefefe"
                    },
                    {
                        "lightness": 20
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#fefefe"
                    },
                    {
                        "lightness": 17
                    },
                    {
                        "weight": 1.2
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    },
                    {
                        "lightness": 20
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    },
                    {
                        "lightness": 21
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#dedede"
                    },
                    {
                        "lightness": 21
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#ffffff"
                    },
                    {
                        "lightness": 17
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#ffffff"
                    },
                    {
                        "lightness": 29
                    },
                    {
                        "weight": 0.2
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#ffffff"
                    },
                    {
                        "lightness": 18
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#ffffff"
                    },
                    {
                        "lightness": 16
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f2f2f2"
                    },
                    {
                        "lightness": 19
                    }
                ]
            },
            {
                "featureType": "water",
                "stylers": [
                    {
                        "color": "#1994bf"
                    },
                    {
                        "saturation": -40
                    },
                    {
                        "gamma": 0.99
                    },
                    {
                        "lightness": 60
                    }
                ]
            }
        ]
    }
    map = new google.maps.Map(document.getElementById('googleMap'), options);
    infoWindow = new google.maps.InfoWindow;
    // new google.maps.Marker({
    //     position: {
    //         lat: 43.863194,
    //         lng: -78.828056
    //     },
    //     map: map
    // });

    

    let lawn = new google.maps.Polygon({
        path: [
            new google.maps.LatLng(43.863724,-78.834915),
            new google.maps.LatLng(43.863709,-78.834593),
            new google.maps.LatLng(43.863825,-78.834014),
            new google.maps.LatLng(43.863999,-78.833536),
            new google.maps.LatLng(43.865921,-78.830393),
            new google.maps.LatLng(43.866157,-78.830162),
            new google.maps.LatLng(43.864724,-78.827432),
            new google.maps.LatLng(43.864612,-78.827073),
            new google.maps.LatLng(43.864600,-78.826740),
            new google.maps.LatLng(43.864654,-78.826337),
            new google.maps.LatLng(43.865583,-78.824767),
            new google.maps.LatLng(43.864860,-78.824258),
            new google.maps.LatLng(43.864442,-78.825041),
            new google.maps.LatLng(43.863978,-78.825900),
            new google.maps.LatLng(43.863150,-78.826608),
            new google.maps.LatLng(43.861711,-78.828861),
            new google.maps.LatLng(43.860690,-78.830449),
            new google.maps.LatLng(43.860102,-78.830717),
            new google.maps.LatLng(43.859367,-78.831103),
            new google.maps.LatLng(43.858888,-78.830652),
            new google.maps.LatLng(43.858349,-78.830950),
            new google.maps.LatLng(43.858790,-78.832104),
            new google.maps.LatLng(43.861792,-78.834818),
            new google.maps.LatLng(43.863724,-78.834915)
        ],
        strokeColor:"#91c83e",
        fillColor:"#91c83e",
        fillOpacity:1,
        map:map
    });

    let beach = new google.maps.Polygon({
        path: [
            new google.maps.LatLng(43.863856,-78.826481),
            new google.maps.LatLng(43.864686,-78.825428),
            new google.maps.LatLng(43.865503,-78.823678),
            new google.maps.LatLng(43.865169,-78.823389),
            new google.maps.LatLng(43.864625,-78.824683),
            new google.maps.LatLng(43.863692,-78.826082)
        ],
        strokeColor:"#faec98",
        fillColor:"#faec98",
        fillOpacity:1,
        map:map
    });

    let pier = new google.maps.Polygon({
        path: [
            new google.maps.LatLng(43.865483,-78.823681),
            new google.maps.LatLng(43.865586,-78.823419),
            new google.maps.LatLng(43.864161,-78.822156),
            new google.maps.LatLng(43.864136,-78.822244),
            new google.maps.LatLng(43.865183,-78.823203),
            new google.maps.LatLng(43.865131,-78.823344)
        ],
        strokeColor:"#937551",
        fillColor:"#937551",
        fillOpacity:1,
        map:map
    });



    let bigPath1 = new google.maps.Polyline({
        path: [
            new google.maps.LatLng(43.861820,-78.834804),
            new google.maps.LatLng(43.862516,-78.832187),
            new google.maps.LatLng(43.862802,-78.831296),
            new google.maps.LatLng(43.863351,-78.829172),
            new google.maps.LatLng(43.863552,-78.828828),
            new google.maps.LatLng(43.863862,-78.828646),
            new google.maps.LatLng(43.864249,-78.828786),
            new google.maps.LatLng(43.864465,-78.829054),
            new google.maps.LatLng(43.864751,-78.829354),
            new google.maps.LatLng(43.865145,-78.829376),
            new google.maps.LatLng(43.865239,-78.829279),
            new google.maps.LatLng(43.865533,-78.829011),
            
        ],
        strokeColor:"white",
        strokeWeight:6,
        map:map
    });

    let bigPath2 = new google.maps.Polyline({
        path: [
            new google.maps.LatLng(43.862468,-78.832208),
            new google.maps.LatLng(43.860704,-78.831478),
            new google.maps.LatLng(43.858809,-78.832069)
            
        ],
        strokeColor:"white",
        strokeWeight:5,
        map:map
    });

    let smallPath1 = new google.maps.Polyline({
        path: [
            new google.maps.LatLng(43.863718,-78.834896),
            new google.maps.LatLng(43.863424,-78.834751),
            new google.maps.LatLng(43.862940,-78.834541),
            new google.maps.LatLng(43.862697,-78.834359),
            new google.maps.LatLng(43.862581,-78.834166),
            new google.maps.LatLng(43.862534,-78.833919),
            new google.maps.LatLng(43.862542,-78.833613),
            new google.maps.LatLng(43.862666,-78.833056),
            new google.maps.LatLng(43.862658,-78.832975),
            new google.maps.LatLng(43.862565,-78.832640),
            new google.maps.LatLng(43.862563,-78.832511),
            new google.maps.LatLng(43.862586,-78.832353),
            new google.maps.LatLng(43.862772,-78.831712),
            new google.maps.LatLng(43.863136,-78.830368),
            new google.maps.LatLng(43.863491,-78.829019),
            new google.maps.LatLng(43.863787,-78.828799),
            new google.maps.LatLng(43.864077,-78.828815),
            new google.maps.LatLng(43.864224,-78.828933),
            new google.maps.LatLng(43.864441,-78.829245),
            new google.maps.LatLng(43.864654,-78.829439),
            new google.maps.LatLng(43.864766,-78.829492),
            new google.maps.LatLng(43.865137,-78.829508),
            new google.maps.LatLng(43.865276,-78.829401),
            new google.maps.LatLng(43.865582,-78.829342),
            new google.maps.LatLng(43.865683,-78.829262)
            
        ],
        strokeColor:"white",
        strokeWeight:1,
        map:map
    });

    let smallPath2 = new google.maps.Polyline({
        path: [
            new google.maps.LatLng(43.862660,-78.832076),
            new google.maps.LatLng(43.862423,-78.831931),
            new google.maps.LatLng(43.862187,-78.831628),
            new google.maps.LatLng(43.861102,-78.831102),
            new google.maps.LatLng(43.860902,-78.831223),
            new google.maps.LatLng(43.860775,-78.831371),
            new google.maps.LatLng(43.860560,-78.831373),
            new google.maps.LatLng(43.860347,-78.831515),
            new google.maps.LatLng(43.860175,-78.831545),
            new google.maps.LatLng(43.859980,-78.831513),
            new google.maps.LatLng(43.859320,-78.831489),
            new google.maps.LatLng(43.859197,-78.831542),
            new google.maps.LatLng(43.859129,-78.831625),
            new google.maps.LatLng(43.858955,-78.831971)
        ],
        strokeColor:"white",
        strokeWeight:1,
        map:map
    });

    let smallPath3 = new google.maps.Polyline({
        path: [
            new google.maps.LatLng(43.861289,-78.831464),
            new google.maps.LatLng(43.861155,-78.831408),
            new google.maps.LatLng(43.861059,-78.830874),
            new google.maps.LatLng(43.860939,-78.830445),
            new google.maps.LatLng(43.861496,-78.829798),
            new google.maps.LatLng(43.861752,-78.829427),
            new google.maps.LatLng(43.861804,-78.829274),
            new google.maps.LatLng(43.863051,-78.827044),
            new google.maps.LatLng(43.863450,-78.826791),
            new google.maps.LatLng(43.863649,-78.826726),
            new google.maps.LatLng(43.863815,-78.826618),
            new google.maps.LatLng(43.863901,-78.826479),
            new google.maps.LatLng(43.864222,-78.826178),
            new google.maps.LatLng(43.864612,-78.825545),
            new google.maps.LatLng(43.864666,-78.825583),
            new google.maps.LatLng(43.864709,-78.825567),
            
        ],
        strokeColor:"white",
        strokeWeight:1,
        map:map
    });

    let smallPath4 = new google.maps.Polyline({
        path: [
            new google.maps.LatLng(43.864528,-78.828567),
            new google.maps.LatLng(43.864458,-78.828545),
            new google.maps.LatLng(43.864249,-78.828180),
            new google.maps.LatLng(43.864156,-78.828116),
            new google.maps.LatLng(43.863851,-78.828068),
            new google.maps.LatLng(43.863793,-78.827987),
            new google.maps.LatLng(43.863495,-78.827805),
            new google.maps.LatLng(43.863462,-78.827705),
            new google.maps.LatLng(43.863465,-78.827517),
            new google.maps.LatLng(43.863494,-78.827393),
            new google.maps.LatLng(43.863485,-78.827340),
            new google.maps.LatLng(43.863249,-78.826916)
        ],
        strokeColor:"white",
        strokeWeight:1,
        map:map
    });

    let smallPath5 = new google.maps.Polyline({
        path: [
            new google.maps.LatLng(43.863423,-78.828684),
            new google.maps.LatLng(43.863300,-78.828732),
            new google.maps.LatLng(43.863241,-78.828893),
            new google.maps.LatLng(43.862855,-78.828853),
            new google.maps.LatLng(43.862549,-78.828958),
            new google.maps.LatLng(43.862141,-78.828615),
            
        ],
        strokeColor:"white",
        strokeWeight:1,
        map:map
    });


    let shortPath1 = new google.maps.Polyline({
        path: [
            new google.maps.LatLng(43.864604,-78.826882),
            new google.maps.LatLng(43.864415,-78.826914),
            new google.maps.LatLng(43.864121,-78.826882),
            new google.maps.LatLng(43.863966,-78.826811),
            new google.maps.LatLng(43.863907,-78.826758),
            new google.maps.LatLng(43.863858,-78.826555),
            
        ],
        strokeColor:"white",
        strokeWeight:1,
        map:map
    });

    let shortPath2 = new google.maps.Polyline({
        path: [
            new google.maps.LatLng(43.863233,-78.830401),
            new google.maps.LatLng(43.863079,-78.830326),
            
            
        ],
        strokeColor:"white",
        strokeWeight:3,
        map:map
    });

    let shortPath1_Parking3 = new google.maps.Polyline({
        path: [
            new google.maps.LatLng(43.862893,-78.830853),
            new google.maps.LatLng(43.862800,-78.830810),
            
            
        ],
        strokeColor:"white",
        strokeWeight:3,
        map:map
    });

    let shortPath2_Parking3 = new google.maps.Polyline({
        path: [
            new google.maps.LatLng(43.863179,-78.829758),
            new google.maps.LatLng(43.863070,-78.829706),
            
            
        ],
        strokeColor:"white",
        strokeWeight:3,
        map:map
    });

    let shortPath1_Parking4 = new google.maps.Polyline({
        path: [
            new google.maps.LatLng(43.864855,-78.829356),
            new google.maps.LatLng(43.864862,-78.829191),
            
            
        ],
        strokeColor:"white",
        strokeWeight:3,
        map:map
    });

    let shortPath2_Parking4 = new google.maps.Polyline({
        path: [
            new google.maps.LatLng(43.864835,-78.828265),
            new google.maps.LatLng(43.865047,-78.828043),
            
            
        ],
        strokeColor:"white",
        strokeWeight:3,
        map:map
    });




    let guyHouse = new google.maps.Marker({
        position: {
            lat: 43.863951,
            lng: -78.826918
        },
        icon:{url:`img/guyHouse.svg`, 
              scaledSize: new google.maps.Size(30, 30),
              title: 'Guy House'
        },
        map: map
    });

    let henryHouse = new google.maps.Marker({
        position: {
            lat: 43.863951,
            lng: -78.827637
        },
        icon:{url:`img/henryHouse.svg`, 
              scaledSize: new google.maps.Size(30, 30)
        },
        map: map
    });

    let robinsonHouse = new google.maps.Marker({
        position: {
            lat: 43.864535,
            lng: -78.827010
        },
        icon:{url:`img/robinsonHouse.svg`, 
              scaledSize: new google.maps.Size(30, 30)
        },
        map: map
    });

    let restRoom1 = new google.maps.Marker({
        position: {
            lat: 43.864005,
            lng: -78.830663
        },
        icon:{url:`img/restroom-solid.svg`, 
              scaledSize: new google.maps.Size(25, 25)
        },
        map: map
    });

    let restRoom2 = new google.maps.Marker({
        position: {
            lat: 43.863150,
            lng: -78.828936
        },
        icon:{url:`img/restroom-solid.svg`, 
              scaledSize: new google.maps.Size(25, 25)
        },
        map: map
    });

    let restRoom3 = new google.maps.Marker({
        position: {
            lat: 43.864604,
            lng: -78.825900
        },
        icon:{url:`img/restroom-solid.svg`, 
              scaledSize: new google.maps.Size(25, 25)
        },
        map: map
    });


    let parking1 = new google.maps.Polygon({
        path: [
            new google.maps.LatLng(43.863841,-78.830874),
            new google.maps.LatLng(43.863899,-78.830624),
            new google.maps.LatLng(43.863265,-78.830318),
            new google.maps.LatLng(43.863206,-78.830572)
        ],
        strokeColor:"grey",
        strokeWeight:2,
        fillColor:"grey",
        fillOpacity:1,
        map:map
    });

    let parking2 = new google.maps.Polygon({
        path: [
            new google.maps.LatLng(43.862024,-78.831996),
            new google.maps.LatLng(43.862069,-78.831767),
            new google.maps.LatLng(43.861301,-78.831474),
            new google.maps.LatLng(43.861250,-78.831666)
        ],
        strokeColor:"grey",
        strokeWeight:2,
        fillColor:"grey",
        fillOpacity:1,
        map:map
    });

    let parking3 = new google.maps.Polygon({
        path: [
            new google.maps.LatLng(43.862793,-78.830814),
            new google.maps.LatLng(43.863068,-78.829705),
            new google.maps.LatLng(43.862860,-78.829607),
            new google.maps.LatLng(43.862583,-78.830719)
        ],
        strokeColor:"grey",
        strokeWeight:3,
        fillColor:"grey",
        fillOpacity:1,
        map:map
    });

    let parking4 = new google.maps.Polygon({
        path: [
            new google.maps.LatLng(43.865230,-78.829010),
            new google.maps.LatLng(43.865093,-78.829150),
            new google.maps.LatLng(43.864863,-78.829185),
            new google.maps.LatLng(43.864536,-78.828576),
            new google.maps.LatLng(43.864834,-78.828270)
        ],
        strokeColor:"grey",
        strokeWeight:3,
        fillColor:"grey",
        fillOpacity:1,
        map:map
    });

    let parking5 = new google.maps.Polygon({
        path: [
            new google.maps.LatLng(43.864918,-78.825795),
            new google.maps.LatLng(43.864717,-78.825540),
            new google.maps.LatLng(43.865167,-78.824861),
            new google.maps.LatLng(43.865393,-78.825055)
        ],
        strokeColor:"grey",
        strokeWeight:3,
        fillColor:"grey",
        fillOpacity:1,
        map:map
    });







    let boundaryLeft = new google.maps.Polyline({
        path: [
            new google.maps.LatLng(43.863724,-78.834915),
            new google.maps.LatLng(43.861792,-78.834818),
            new google.maps.LatLng(43.858790,-78.832104),
            new google.maps.LatLng(43.858349,-78.830950),
        ],
        strokeColor:"black",
        strokeWeight:3,
        map:map
    });

    let boundaryTopRight = new google.maps.Polyline({
        path: [
            new google.maps.LatLng(43.863724,-78.834915),
            new google.maps.LatLng(43.863709,-78.834593),
            new google.maps.LatLng(43.863825,-78.834014),
            new google.maps.LatLng(43.863999,-78.833536),
            new google.maps.LatLng(43.865921,-78.830393),
            new google.maps.LatLng(43.866170,-78.830144),
            new google.maps.LatLng(43.864724,-78.827432),
            new google.maps.LatLng(43.864612,-78.827073),
            new google.maps.LatLng(43.864600,-78.826740),
            new google.maps.LatLng(43.864654,-78.826337),
            new google.maps.LatLng(43.865583,-78.824767)
        ],
        strokeColor:"black",
        strokeWeight:3,
        map:map
    });








    // let dest = new google.maps.MVCArray();


    // let boundary = new google.maps.Polyline({
    //     path: dest,
    //     strokeColor:"black",
    //     map:map
    // });
   
    // google.maps.event.addListener(map,'click',function(e){
    //     boundary.getPath().push(e.latLng);
    //     console.log(e.latLng.lat(),e.latLng.lng());
        
    // });




    let pos = {};

    if (navigator.geolocation) {

            navigator.geolocation.watchPosition(function(position) {
                pos = {
                  lat: position.coords.latitude,
                  lng: position.coords.longitude
                };
                console.log(position);


                document.querySelector('.showheading').innerHTML = map.getHeading();
                console.log(map.getHeading());
                

                if(myPoint == undefined){
                    myPoint = new google.maps.Marker({
                        position:pos,
                        map:map,
                        icon:`img/person.png`
                    });
                }else{
                    myPoint.setPosition(pos);
                }


                map.setCenter(pos);

                // new google.maps.Marker({
                //     position:{
                //         lat:pos.lat,
                //         lng:pos.lng
                //     },
                //     map:map
                // });


              }, function() {
                handleLocationError(true, infoWindow, map.getCenter());
              },{enableHighAccuracy:true,timeout:60000,maximumAge:0});



      }else {

        handleLocationError(false, infoWindow, map.getCenter());
      }


}



function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
}