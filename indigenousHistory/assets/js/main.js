// Component to change to a sequential color on click.
// AFRAME.registerComponent('cursor-listener', {
//     init: function () {
//         var lastIndex = -1;
//         var COLORS = ['red', 'green', 'blue'];
//         this.el.addEventListener('click', function (evt) {
//             lastIndex = (lastIndex + 1) % COLORS.length;
//             this.setAttribute('material', 'color', COLORS[lastIndex]);
//             console.log('I was clicked at: ', evt.detail.intersection.point);
//         });
//     }
// });


console.log("lakeview hello");

let camera1Tag = document.querySelector("h1");
camera1Tag.addEventListener("click", () => {
    console.log("clicked camera 1 tag");
    camera.setAttribute('camera', 'active', true);
})
let camera2Tag = document.querySelector("h2");
camera2Tag.addEventListener("click", () => {
    console.log("clicked camera 2 tag");
    camera2.setAttribute('camera', 'active', true);
})
let camera3Tag = document.querySelector("h3");
camera3Tag.addEventListener("click", () => {
    console.log("clicked camera 3 tag");
    camera3.setAttribute('camera', 'active', true);
})
let camera4Tag = document.querySelector("h4");
camera4Tag.addEventListener("click", () => {
    console.log("clicked camera 4 tag");
    camera4.setAttribute('camera', 'active', true);
})