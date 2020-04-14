// registering the scroll plugin
gsap.registerPlugin(ScrollToPlugin);

window.onload = function () {

	// close button for the main map
	document.querySelector(".close_icon").addEventListener("click",function(){
			
		window.location.replace("../index.html");
	});

	let container = document.querySelector("main");
	let instructions = document.querySelectorAll(".instructions");
	let swipeButton = document.querySelectorAll(".swipe_up");

	// calculating the window width
	let w = window.innerWidth;
	// dividing the width in half
	let midPoint = w / 2;

	// hiding the instructions
	TweenMax.to(".instructions", 0.75, {
		delay: 2,
		opacity: 0,
		onComplete: function () {
				instructions[2].style.display = "none";
		}
	})

	// setting click on the window
	instructions.forEach(inst => {
		if (inst.getAttribute("id") == "instLeft" || inst.getAttribute("id") == "instRight") {
			// console.log(inst);
			
			inst.onclick = function (e) {
				console.log(e.x);
				// checking if tapped on the right of the screen
				if (e.x > midPoint) {
					// if tapped on the right, go to next screen
					console.log("next");
					gsap.to("main", {
						duration: 0.5,
						scrollTo: {
							x: "+=" + w
						},
						ease: "power2",
						onComplete: () => {
							console.log("next complete");
						}
					});
				} else {
					// if tapped on the left, go to prev screen
					console.log("prev");
					gsap.to("main", {
						duration: 0.5,
						scrollTo: {
							x: "-=" + w
						},
						ease: "power2",
						onComplete: () => {
							console.log("prev complete");
						}
					});
					// container.scrollLeft = -w;
				}
			}
		}
	});

	let swipeState = 0;
	swipeButton.forEach(function (swipe) {
		swipe.parentElement.addEventListener("click", function () {
			if (swipeState === 0) {
				gsap.to(swipe.parentElement, {
					duration: 0.75,
					top: "20vh",
					backgroundColor: "#fff",
					height: "80vh",
					boxShadow: "0 -5px 20px rgba(56, 56, 56, 0.3)",
					ease: "expo.out",
					onComplete: function () {
						swipeState = 1;
						// swipe.innerText = "Close"
					}
				})
				gsap.to(swipe, {
					duration: 1,
					opacity: 1
				})
			} else {
				gsap.to(swipe.parentElement, {
					duration: 0.75,
					top: "80vh",
					backgroundColor: "rgba(255, 255, 255, 0.3)",
					height: "20vh",
					boxShadow: "0 0px 0px rgba(56, 56, 56, 0.3)",
					ease: "expo.out",
					onComplete: function () {
						swipeState = 0;
						// swipe.innerText = "Open"
					}
				})
				gsap.to(swipe, {
					duration: 0.25,
					opacity: 0
				})
			}
		});
	})
}