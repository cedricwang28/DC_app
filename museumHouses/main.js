
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
    setTimeout(function() { audio.play(); }, 6600);
}

/* --------------------- section 2 --------------------- */
let section2 = document.querySelector("#section2");
let section2H1 = document.querySelector("#section2H1");
let section2HenryImage = document.querySelector("#section2HenryImage");
let section2Btn = document.querySelector("#section2Btn");
// let pushBtn2 = document.querySelector("#pushBtn2");
let section2h4 = document.querySelector("#section2h4");
let timeline = document.querySelector(".timeline");

/* --------------------- section 3 --------------------- */
let section3 = document.querySelector("#section3");
let section3Btn = document.querySelector("#section3Btn");
let section3H1 = document.querySelector("#section3H1");


/* --------------------- sectionexecution --------------------- */
// default value is false so this section timelines will not play at the beginning
let executeSection2 = false;
let executeSection3 = false;

window.onload = function(){
    section1SpeechFun();
    homePage();
    window.addEventListener('scroll', animate);

    /* ------------------- addEventListeners ------------------- */
    if (home.click) {
        if (executeSection2 != true) {
            home.addEventListener("click", section4Animation);
        }
    }
    

    if (executeSection2 != true) {
        pushBtn1.addEventListener("click", section2Animation);
    }
    home.addEventListener("click", section4Animation);
    pushBtn1.addEventListener("click", section2Animation);
    navHenry.addEventListener("click", section2Animation);
    // pushBtn2.addEventListener("click", section3Animation);
    navGuy.addEventListener("click", section3Animation);
    section3Btn.addEventListener("click", section4Animation);
    navRobinson.addEventListener("click", section4Animation);
}

// function for timeline2
function homePage() {
    gsap.from(section1, {duration: 1,opacity:0, ease:"back", delay:1})
    gsap.to(headerH1, {duration: 1, yPercent: 200, ease:"power1", delay:2})
    gsap.to(headerH1, {duration: 0.5, opacity:1, ease:"power1", delay:3})
    gsap.to(headerH1, {duration: 0.5, yPercent: -240, ease:"power1", delay:4})
    gsap.to(navigationBar,1, {opacity:1, ease:"back", delay:4})
    gsap.to(closeIcon,1, {opacity:1, ease:"back", delay:4})
    gsap.to(section1HenryHouseImg, {duration: 0.5, opacity:1, ease:"power1", delay:5})
    gsap.to(section1H2,8, {text:"Welcome to the three homes that make up the Oshawa Museum represent an early settler community as all three are on their original foundations.",ease:"power1" ,delay:7})
    gsap.to(section1Btn,1, {opacity:1, ease:"power1", delay:16});

}

// function for timeline2
function section2Animation() {
    executeSection2 = true;

    gsap.to(window,1, {scrollTo:{y:section2, ease: "power4"}});
    gsap.to(section2H1, {duration: 1, yPercent: -200, ease:"power1", delay:1})
    gsap.to(section2H1, {duration: 0.5, opacity:1, ease:"power1", delay:2})
    gsap.to(section2H1, {duration: 0.5, yPercent: 0, ease:"power1", delay:2})
    gsap.to(section2HenryImage, {duration: 0.5, opacity:1, ease:"power1", delay:3})
    gsap.to(section2h4,1, {opacity: 1, ease:"power1", delay:3.5})
    gsap.to(timeline,1, {opacity: 1, ease:"power1", delay:4})
    $(".reveal").each(function(i){
        gsap.fromTo(this, 0.25,{
            opacity: 0,
            y: 0,
            scale: 0
        }, {
            delay: 4.5 + i * 0.25,
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

    gsap.to(window,1, {scrollTo:{y:section3, ease: "power4", autoKill: true}});
    gsap.to(section3H1,1, {stagger: 0.2, text:"This is section 3. You have come this far for nothing. GO HOME NOW.", ease:"power1",delay:2})
    gsap.to(section3Btn, {duration: 1, opacity:1, delay:3})
}

// function for timeline4
function section4Animation() {
    gsap.to(window, {duration:1, scrollTo:{y:body, ease: "power4", autoKill: true}});
}

/* ------------------- onscroll animation ------------------- */
function animate() {

    if (document.documentElement.scrollTop >= 400) {
        if (executeSection2 != true) {
            section2Animation();
            audio.pause();
        }
    }

    if (document.documentElement.scrollTop >= 1000) {
        if (executeSection3 != true) {
            section3Animation();
            audio.pause();
        }
    }
}


// close button for the main map
document.querySelector(".close_icon").addEventListener("click",function(){
        
    window.location.replace("../index.html");
});
