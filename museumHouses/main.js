
/* --------------------- variable declaration --------------------- */
let body = document.querySelector("body");

// close button
let closeIcon = document.querySelector(".close_icon");

// navigation bar
let navigationBar = document.querySelector("#navigationBar");
let home = document.querySelector("#home");
let navHenry = document.querySelector("#navHenry");
let navGuy = document.querySelector("#navGuy");
let navRobinson = document.querySelector("#navRobinson");
let homeButton = document.querySelector("#homeButton");
homeButton.addEventListener("mouseover",function () {
    gsap.to(homeButton, 0.5,{fill:"#FFFFFF", ease:"power1"});
});
homeButton.addEventListener("click",function () {
    gsap.to(homeButton, 0.5,{fill:"#FFFFFF", ease:"power1"});
});
homeButton.addEventListener("mouseout",function () {
    gsap.to(homeButton, 0.5,{fill:"#000000", ease:"power1"});
});

/* --------------------- section 1 --------------------- */
let headerH1 = document.querySelector("#headerH1");
let section1 = document.querySelector("#section1");
let section1HenryHouseImg = document.querySelector("#section1HenryHouseImg");
let section1Btn = document.querySelector("#section1Btn");
let section1H2 = document.querySelector("#section1H2");
let pushBtn1 = document.querySelector("#pushBtn1");
let audio = new Audio('./audio/section1Speech.mp3');
// section1 audio function
function section1SpeechFun() {
    setTimeout(function() { audio.play(); }, 3800);
}

/* --------------------- section 2 --------------------- */
let section2 = document.querySelector("#section2");
let section2H1 = document.querySelector("#section2H1");
let section2HenryImage = document.querySelector("#section2HenryImage");
let section2Btn = document.querySelector("#section2Btn");
// let pushBtn2 = document.querySelector("#pushBtn2");
let section2h4 = document.querySelector("#section2h4");
let timeline = document.querySelectorAll(".timeline");

/* --------------------- section 3 --------------------- */
let section3 = document.querySelector("#section3");
let section3Head = document.querySelector("#section3Head");
let section3Btn = document.querySelector("#section3Btn");
let section3H1 = document.querySelector("#section3H1");

/* --------------------- section 4 --------------------- */
let section4 = document.querySelector("#section4");
let section4Head = document.querySelector("#section4Head");
let section4H1 = document.querySelector("#section4H1");
let section4h4 = document.querySelector("#section4h4");

/* --------------------- sectionexecution --------------------- */
// default value is false so this section timelines will not play at the beginning
let executeSection2 = false;
let executeSection3 = false;
let executeSection4 = false;

window.onload = function(){
    section1SpeechFun();
    homePage();
    window.addEventListener('scroll', animate);

    /* ------------------- addEventListeners ------------------- */
    if (home.click) {
        if (executeSection2 != true) {
            home.addEventListener("click", function () {
                gsap.to(window,1, {scrollTo:{y:section1, ease: "power4"}});
            });
        }
    }
    
    if (executeSection2 != true) {
        pushBtn1.addEventListener("click", section2Animation);
    }

    home.addEventListener("click", function () {
        gsap.to(window,1, {scrollTo:{y:section1, ease: "power4"}});
    });
    pushBtn1.addEventListener("click", section2Animation);
    navHenry.addEventListener("click", section2Animation);
    // pushBtn2.addEventListener("click", section3Animation);
    navGuy.addEventListener("click", section3Animation);
    navRobinson.addEventListener("click", section4Animation);
}

// function for timeline2
function homePage() {
    gsap.from(section1, {duration: 1,opacity:0, ease:"back", delay:1})
    gsap.to(headerH1, {duration: 0.5, yPercent: 200, ease:"power1", delay:1})
    gsap.to(headerH1, {duration: 0.5, opacity:1, ease:"power1", delay:1.5})
    gsap.to(headerH1, {duration: 0.5, yPercent: -180, ease:"power1", delay:2})
    gsap.to(navigationBar,1, {opacity:1, ease:"back", delay:2})
    gsap.to(closeIcon,1, {opacity:1, ease:"back", delay:2})
    gsap.to(section1HenryHouseImg, {duration: 0.5, opacity:1, ease:"power1", delay:3})
    gsap.to(section1H2,8, {text:"Welcome to the three homes that make up the Oshawa Museum represent an early settler community as all three are on their original foundations.",ease:"power1" ,delay:4})
    gsap.to(section1Btn,1, {opacity:1, ease:"power1", delay:10});

}

// function for timeline2
function section2Animation() {
    executeSection2 = true;

    gsap.to(window,1, {scrollTo:{y:section2, ease: "power4"}});
    gsap.to(timeline,0.5, {opacity: 1, ease:"power1", delay:1})
    $(".reveal").each(function(i){
        gsap.fromTo(this, 0.25,{
            opacity: 0,
            y: 0,
            scale: 0
        }, {
            delay: 1 + i * 0.25,
            opacity: 1,
            y: -10,
            scale: 1,
            ease: SteppedEase.config(12)
        });
    });
}

// function for timeline3
function section3Animation() {
    executeSection3 = true;

    gsap.to(window,1, {scrollTo:{y:section3, ease: "power4"}});
    gsap.to(timeline,0.5, {opacity: 1, ease:"power1", delay:1})

    $(".revealGuy").each(function(i){
        gsap.fromTo(this, 0.25,{
            opacity: 0,
            y: 0,
            scale: 0
        }, {
            delay: 1 + i * 0.25,
            opacity: 1,
            y: -10,
            scale: 1,
            ease: SteppedEase.config(12)
        });
    });
}

// function for timeline4
function section4Animation() {
    executeSection4 = true;

    gsap.to(window, {duration:1, scrollTo:{y:section4, ease: "power4"}});
    gsap.to(timeline,0.5, {opacity: 1, ease:"power1", delay:1})

    $(".revealRobinson").each(function(i){
        gsap.fromTo(this, 0.25,{
            opacity: 0,
            y: 0,
            scale: 0
        }, {
            delay: 1 + i * 0.25,
            opacity: 1,
            y: -10,
            scale: 1,
            ease: SteppedEase.config(12)
        });
    });
}

/* ------------------- onscroll animation ------------------- */
function animate() {

    if (document.documentElement.scrollTop >= 400) {
        if (executeSection2 == false) {
            section2Animation();
            audio.pause();
        }
    }

    if (document.documentElement.scrollTop >= 1000) {
        if (executeSection3 == false) {
            section3Animation();
            audio.pause();
        }
    }
}


// close button for the main map
document.querySelector(".close_icon").addEventListener("click",function(){
        
    window.location.replace("../index.html");
});
