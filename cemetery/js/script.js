window.onload = function () {

    window.addEventListener("scroll", scrollAnimate);

    let buttons = document.querySelectorAll(".quiz button");
    buttons.forEach(button => {
        button.addEventListener("click", function () {

            let soilId = button.dataset.soil;

            let theQuiz = document.querySelector(`#${soilId} .quiz`);
            theQuiz.classList.add("hide")

            let theInfo = document.querySelector(`#${soilId} .information`);

            theInfo.classList.remove("hide")
            // theInfo.classList.add("to-animate-in");
        });
    });

    let scrollUp = document.querySelector("#scroll-up");
    let scrollDown = document.querySelector("#scroll-down");
    let windowHeight = window.innerHeight;
    console.log();
    

    scrollUp.addEventListener("mousedown", function () {
        let windowPosition = window.scrollY;
        window.scroll(0, windowPosition - windowHeight);
    })

    scrollDown.addEventListener("mousedown", function () {

        let windowPosition = window.scrollY;
        window.scroll(0, windowPosition + windowHeight);
    })



    // the close button
    document.querySelector(".close_icon").addEventListener("click", function () {

        window.location.replace("../index.html");
    });
};


// animate elements with scroll 
function scrollAnimate() {
    let windowScrollPosition = window.scrollY;
    let toAnimateIn = document.querySelectorAll(".to-animate-in");
    console.log("animating");

    toAnimateIn.forEach(element => {
        if (windowScrollPosition > (element.parentNode.offsetTop + (this.window.innerHeight / 1.5))) {
            element.classList.add("animated");
        }
    });
}






/* 

remove the animation scroll event listener once all the sections have been animated


// animate the drill rotation with this
https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/rotate3d


ask sully, 
    addition of the class happens to all elements at once, as soon as 1st element has the class.
*/