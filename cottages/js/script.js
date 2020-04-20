/*
    TODO
    -get permission for front and back camera's on mobile
    -replace placeholder assets with better versions of cottages

    HEADS UP:
    -when testing on mobile through desktop dev tools the camera is view is positioned as if it were fullscreened;

    Final Notes: 
    -this app is not good, my recommendation is to cut the app entirely from the project
*/

document.addEventListener('DOMContentLoaded', (e) => {
    //touch variables
    let initTouchX, moveTouchX;

    //canvas
    let canvas = document.querySelector('#theCanvas');
    
    //lock variable for tap to close
    let lock = true;
   
    //declare running cottage count position
    let currentCottage = 0;
    let totalCottages = 3;
    //function to scroll cottages
    function scrollCottage(direction){
        direction == 'left' ? 
            gsap.fromTo(`#cot${currentCottage}`, {
                duration: 1,
                left: 0,
            },{
                left: -400,
                onComplete: currentCottage++,
            })

            :

            gsap.fromTo(`#cot${currentCottage}`, {
                duration: 1,
                left: 0,
            },{
                left: window.innerWidth + 400,
                onComplete: currentCottage--,
            });

        gsap.to(`#cot${currentCottage}`, {
            duration: 1,
            left: 0,
        });
    };

    document.addEventListener('touchstart', (e) => {
        initTouchX = e.touches[0].pageX;
    });

    document.addEventListener('touchmove', (e) => {
        moveTouchX = e.touches[0].pageX;
    });

    document.addEventListener('touchend', (e) => {
        if(initTouchX - moveTouchX < 0 && currentCottage > 1 && !lock){
            scrollCottage('right');
        }else if(initTouchX - moveTouchX > 0 && currentCottage < totalCottages && !lock){
            scrollCottage('left');
        }
    });

    document.querySelector('#instructions').addEventListener('click', (e) => {
        document.querySelector('#instructions').style.display = 'none';
        lock = false;
    });
});