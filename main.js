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




function initMap(){
    let options = {
        zoom:18,
        center:{lat:43.958172,lng: -78.903278}
    }
    let map = new google.maps.Map(document.getElementById('googleMap'),options);

    let marker = new google.maps.Marker({
        position:{
            lat:43.958172,lng: -78.903278
        },
        map:map
    });




    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
          var pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };

          let marker2 = new google.maps.Marker({
            position:{
                lat:pos.lat,lng: pos.lng
            },
            map:map
        });

        });
      }
    

}



