window.addEventListener('DOMContentLoaded', (event) => {

    // the close button
    document.querySelector(".close_icon").addEventListener("click", function () {
        window.location.replace("../index.html");
    });

    // for scrolling fade in of the quiz sections
    window.addEventListener("scroll", scrollAnimate);


    // things that option buttons do
    optionButtons();


    let scrollUp = document.querySelector("#scroll-up");
    let scrollDown = document.querySelector("#scroll-down");
    let windowHeight = window.innerHeight;

    scrollUp.addEventListener("mousedown", function () {
        let windowPosition = window.scrollY;
        window.scroll(0, windowPosition - windowHeight);
    })

    scrollDown.addEventListener("mousedown", function () {

        let windowPosition = window.scrollY;
        window.scroll(0, windowPosition + windowHeight);
    })


});


// for scrolling fade in of the quiz sections
function scrollAnimate() {
    let windowScrollPosition = window.scrollY;
    let toAnimateIn = document.querySelectorAll(".to-animate-in");
    console.log("animating?");

    toAnimateIn.forEach(element => {
        if (windowScrollPosition > (element.parentNode.offsetTop + (this.window.innerHeight / 1.5))) {
            element.classList.add("animated");
        }
    });
}



// flag for how many wrong answers have been given concurrently
let theWrongs = 0;

let tunnels = document.querySelectorAll(".tunnel");

// let drill = document.querySelector("#drill");
// let skeleton = document.querySelector("#skeleton");

// array of all the elements to play with 
// let theElements = [tunnels, drill, skeleton];

// getting the width of the 1st tunnel cuz they all have the same value
let tunnelsWidth = tunnels[0].offsetWidth;
let originalWidth = tunnelsWidth;
let changingWidth = originalWidth;

// getting the margin left and right, converting to number and flooring them. 
let tunnelMarginLeft = Math.floor(parseInt((window.getComputedStyle(tunnels[0])).getPropertyValue("margin-left").slice(0, -2)));
let tunnelMarginRight = Math.floor(parseInt((window.getComputedStyle(tunnels[0])).getPropertyValue("margin-left").slice(0, -2)));
let originalMargin = tunnelMarginLeft;


let changingMargin = originalMargin;



// let drillHeight = drill.offsetHeight;
// let skeletonHeight = skeleton.offsetHeight;

// saving the original heights of all elements to reset on correct answer
// let originalHeights = [tunnelsHeight, drillHeight, skeletonHeight];


// giving the changing heights an initail value of original heights



// things that option buttons do
function optionButtons() {
    let buttons = document.querySelectorAll(".quiz button");

    buttons.forEach(button => {
        button.addEventListener("click", function () {

            // hiding the quiz and showing the information
            let soilId = button.dataset.soil;
            let theQuiz = document.querySelector(`#${soilId} .quiz`);
            theQuiz.classList.add("hide");
            let theInfo = document.querySelector(`#${soilId} .information`);
            theInfo.classList.remove("hide");


            // working with options and showing right or wrong
            let rightOrWrong = button.dataset.rightOrWrong;
            let correctBubble = document.querySelector("#correct-bubble");
            let incorrectBubble = document.querySelector("#incorrect-bubble");
            console.dir(button);



            // correct answer
            if (rightOrWrong == "correct") {
                console.log("correct");

                incorrectBubble.style.display = "none";
                correctBubble.style.display = "inline-block";
                theWrongs = 0;


                tunnels.forEach(tunnel => {
                    tunnel.style.width = `${originalWidth}px`;

                    tunnel.style.marginLeft = `${originalMargin}px`;
                    tunnel.style.marginRight = `${originalMargin}px`;
                })





                /* for (let i = 1; i < 3; i++) {
                    theElements[i].style.height = `${originalHeights[i]}px`;
                } */


                setTimeout(() => {
                    correctBubble.style.display = "none";
                }, 1000);


                // incorrect answer
            } else {
                console.log("incorrect");
                correctBubble.style.display = "none";
                incorrectBubble.style.display = "inline-block";
                theWrongs++;

                /* theElements[0].forEach(tunnel => {
                    tunnel.style.height -= originalHeights[0] / 5;
                }) */



                changingWidth -= Math.floor(changingWidth / 5);
                changingMargin += Math.floor(changingMargin / 3);
                
                // changing less if it's mobile
                if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                    changingWidth -= Math.floor(changingWidth / 100);
                    changingMargin += Math.floor(changingMargin);
                }

                console.log(changingWidth, changingMargin);
                

                tunnels.forEach(tunnel => {
                    tunnel.style.width = `${changingWidth}px`;

                    tunnel.style.marginLeft = `${changingMargin}px`;
                    tunnel.style.marginRight = `${changingMargin}px`;
                })




                /* for (let i = 1; i < 3; i++) {
                    changinglHeights[i] -= Math.floor(changinglHeights[i] / 5);
                    theElements[i].style.height = `${changinglHeights[i]}px`;
                } */




                // checking if they gave 3 wrong answers concurrently
                if (theWrongs == 2) {
                    console.log("DANGER");

                }
                if (theWrongs == 3) {
                    console.log("GAME OVER");
                }

                setTimeout(() => {
                    incorrectBubble.style.display = "none";
                }, 1000);
            }
        });
    });
}


/* 

remove the animation scroll event listener once all the sections have been animated


// animate the drill rotation with this
https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/rotate3d


ask sully, 
    addition of the class happens to all elements at once, as soon as 1st element has the class.
*/