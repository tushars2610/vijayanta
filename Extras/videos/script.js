function toggleHamburger() {
    var hamburger = document.getElementById('hamburger');
    var navLinks = document.getElementById('nav-links');
    hamburger.classList.toggle('change');
    if (navLinks.classList.contains('hidden')) {
        navLinks.classList.remove('hidden');
        navLinks.classList.remove('slide-out');
        navLinks.classList.add('slide-in');
    } else {
        navLinks.classList.remove('slide-in');
        navLinks.classList.add('slide-out');
        setTimeout(function() {
            navLinks.classList.add('hidden');
        }, 500); // Match the duration of the slide-out animation
    }
}
// -----------------------LINE---------------
const myDiv = document.getElementById('line');

    // Add an event listener for the scroll event
    window.addEventListener('scroll', function() {
        // Get the number of pixels scrolled vertically
        const scrollPosition = window.scrollY;

        // Set the height of the div dynamically based on scroll position
        myDiv.style.height = (scrollPosition +550 ) +'px';
        if(scrollPosition>1){
            myDiv.style.animation = 'none';
        }
    });
// ---------------------------------------
const divs = document.querySelectorAll('.rotate');
    let lastScrollY = 0; // Track the last scroll position
    let currentDivIndex = 0; // Track the index of the current div to show

    // Add a scroll event listener
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;

        // Check if scrolled down by at least 100px
        if (scrollPosition - lastScrollY >= 50) {
            lastScrollY = scrollPosition; // Update the last scroll position

            // Show the next div if available
            if (currentDivIndex < divs.length) {
                divs[currentDivIndex].classList.add('visible');
                currentDivIndex++; // Move to the next div
            }
        } 
        // Check if scrolled up by at least 100px
        // else if (lastScrollY - scrollPosition >= 250) {
        //     lastScrollY = scrollPosition; // Update the last scroll position

        //     // Hide the previous div if available
        //     if (currentDivIndex > 0) {
        //         currentDivIndex--; // Move to the previous div
        //         divs[currentDivIndex].classList.remove('visible');
        //         divs[currentDivIndex].classList.add('hiding');

        //         // Remove the hiding class after animation completion
        //         setTimeout(() => {
        //             divs[currentDivIndex].classList.remove('hiding');
        //         }, 700); // Match the animation duration
        //     }
        // }
    });
