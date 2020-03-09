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


};


// animate elements with scroll 
function scrollAnimate() {
    let windowScrollPosition = window.scrollY;
    let toAnimateIn = document.querySelectorAll(".to-animate-in");
    console.log("animating");
    

    toAnimateIn.forEach(element => {
        
        if (windowScrollPosition > (element.parentNode.offsetTop + (this.window.innerHeight / 1.5))) {  /* - this.window.innerHeight  */
            console.log(element);
            console.log(element.parentNode.offsetTop);
            element.classList.add("animated");
        }
    });
}






/* 
ask sully, 
    addition of the class happens to all elements at once, as soon as 1st element has the class.

    (skeleton) left not working with position sticky
*/