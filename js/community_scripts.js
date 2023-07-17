window.addEventListener('DOMContentLoaded', (event) => {
    var slider = document.getElementById("slider");
    var leftControl = document.getElementById("leftControl");
    var rightControl = document.getElementById("rightControl");
    var scrollAmount = 0;

    leftControl.onclick = function() {
        scrollAmount -= slider.offsetWidth / 5;  // Scroll 20% of the visible width
        if (scrollAmount < 0) { // Prevent scrolling beyond the first item
            scrollAmount = 0;
        }
        slider.scrollTo({
            top: 0,
            left: scrollAmount,
            behavior: 'smooth'
        });
    };

    rightControl.onclick = function() {
        scrollAmount += slider.offsetWidth / 5;  // Scroll 20% of the visible width
        slider.scrollTo({
            top: 0,
            left: scrollAmount,
            behavior: 'smooth'
        });
    };
});
