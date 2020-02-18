$(function(){

    $('.nav').click(function(){
        $(this).css({'color':'#406aab'}).siblings().css({'color':'black'});
       
        $(`section:eq(${$(this).attr('num')})`).show();
        $(`section:eq(${$(this).attr('num')})`).siblings().hide();
    });

    let count = 0;

    $('.menu').click(function(){
        if(count == 0){
            $('aside').show();
            $( "aside" ).animate({
                left: "0"
              }, 300);
            count++;
        }else{
            $('aside').hide();
            $( "aside" ).animate({
                left: "-40vw"
              }, 500);
            count--;
        }
        
    });





});


let map, infoWindow, myPoint;


function initMap(){

    let options = {
        zoom:18,
        center:{lat:43.958172,lng: -78.903278}
    }
    map = new google.maps.Map(document.getElementById('googleMap'),options);
    infoWindow = new google.maps.InfoWindow;



    let pos = {};

    if (navigator.geolocation) {
            
            navigator.geolocation.watchPosition(function(position) {
                pos = {
                  lat: position.coords.latitude,
                  lng: position.coords.longitude
                };
                console.log(pos,position);

                if(myPoint == undefined){
                    myPoint = new google.maps.Marker({
                        position:pos,
                        map:map
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

