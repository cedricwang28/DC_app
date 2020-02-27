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

    let polygon1 = new google.maps.Polygon({
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