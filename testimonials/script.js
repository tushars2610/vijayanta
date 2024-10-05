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