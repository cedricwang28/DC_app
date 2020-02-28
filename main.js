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
        mapTypeId: 'roadmap',
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

    let lawnLeft = new google.maps.Polygon({
        path: [
            new google.maps.LatLng(43.861786,-78.834675),
            new google.maps.LatLng(43.862444,-78.832281),
            new google.maps.LatLng(43.860692,-78.831542),
            new google.maps.LatLng(43.858917,-78.832094)
        ],
        strokeColor:"#91c83e",
        fillColor:"#91c83e",
        fillOpacity:1,
        map:map
    });

    let lawnTop = new google.maps.Polygon({
        path: [
            new google.maps.LatLng(43.863724,-78.834915),
            new google.maps.LatLng(43.863709,-78.834593),
            new google.maps.LatLng(43.863825,-78.834014),
            new google.maps.LatLng(43.863999,-78.833536),
            new google.maps.LatLng(43.865921,-78.830393),
            new google.maps.LatLng(43.866157,-78.830162),
            new google.maps.LatLng(43.865550,-78.829011),
            new google.maps.LatLng(43.865251,-78.829325),
            new google.maps.LatLng(43.865032,-78.829420),
            new google.maps.LatLng(43.864807,-78.829420),
            new google.maps.LatLng(43.864558,-78.829278),
            new google.maps.LatLng(43.864245,-78.828854),
            new google.maps.LatLng(43.863842,-78.828703),
            new google.maps.LatLng(43.863591,-78.828829),
            new google.maps.LatLng(43.863457,-78.828998),
            new google.maps.LatLng(43.863382,-78.829175),
            new google.maps.LatLng(43.862840,-78.831296),
            new google.maps.LatLng(43.862458,-78.832544),
            new google.maps.LatLng(43.861891,-78.834774)
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
            new google.maps.LatLng(43.863742,-78.826153)
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

    let boundaryLeft = new google.maps.Polyline({
        path: [
            new google.maps.LatLng(43.863801,-78.834948),
            new google.maps.LatLng(43.861792,-78.834818),
            new google.maps.LatLng(43.858790,-78.832104),
            new google.maps.LatLng(43.858349,-78.830950),
        ],
        strokeColor:"black",
        strokeWeight:2,
        map:map
    });

    let boundaryTopRight = new google.maps.Polyline({
        path: [
            new google.maps.LatLng(43.863801,-78.834948),
            new google.maps.LatLng(43.863793,-78.834572),
            new google.maps.LatLng(43.864048,-78.833639),
            new google.maps.LatLng(43.865928,-78.830560),
            new google.maps.LatLng(43.866229,-78.830259),
            new google.maps.LatLng(43.866170,-78.830144),
            new google.maps.LatLng(43.864724,-78.827432),
            new google.maps.LatLng(43.864612,-78.827073),
            new google.maps.LatLng(43.864600,-78.826740),
            new google.maps.LatLng(43.864654,-78.826337),
            new google.maps.LatLng(43.865583,-78.824767),
            new google.maps.LatLng(43.865807,-78.823592)
        ],
        strokeColor:"black",
        strokeWeight:2,
        map:map
    });

    let dest = new google.maps.MVCArray();


    let boundary = new google.maps.Polyline({
        path: dest,
        strokeColor:"black",
        map:map
    });
   
    google.maps.event.addListener(map,'click',function(e){
        boundary.getPath().push(e.latLng);
        console.log(e.latLng.lat(),e.latLng.lng());
        
    });




    // let pos = {};

    // if (navigator.geolocation) {

    //         navigator.geolocation.watchPosition(function(position) {
    //             pos = {
    //               lat: position.coords.latitude,
    //               lng: position.coords.longitude
    //             };
    //             console.log(position);


    //             document.querySelector('.showheading').innerHTML = position.coords.heading;

    //             if(myPoint == undefined){
    //                 myPoint = new google.maps.Marker({
    //                     position:pos,
    //                     map:map,
    //                     icon:`img/person.png`
    //                 });
    //             }else{
    //                 myPoint.setPosition(pos);
    //             }


    //             map.setCenter(pos);

    //             // new google.maps.Marker({
    //             //     position:{
    //             //         lat:pos.lat,
    //             //         lng:pos.lng
    //             //     },
    //             //     map:map
    //             // });


    //           }, function() {
    //             handleLocationError(true, infoWindow, map.getCenter());
    //           },{enableHighAccuracy:true,timeout:60000,maximumAge:0});



    //   }else {

    //     handleLocationError(false, infoWindow, map.getCenter());
    //   }


}



function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
}