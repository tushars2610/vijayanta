function toggleMobileNav() {
    var mobileNav = document.getElementById("mobileNav");
    var hamburger = document.querySelector(".hamburger");
    if (mobileNav.style.display === "flex") {
      mobileNav.style.display = "none";
      hamburger.classList.remove("active");
    } else {
      mobileNav.style.display = "flex";
      hamburger.classList.add("active");
    }
  }

  
document.addEventListener('DOMContentLoaded', () => {
    const texts = document.getElementById('historyDescription');
    const buttons = document.getElementById('btn-1');
    const img1 = document.getElementById('img-1');

    buttons.addEventListener('click', () => {
        if (texts.classList.contains('expanded')) {
            texts.classList.remove('expanded');
            buttons.textContent = 'Read More';
            // img1.style.display='block';

        } else {
            texts.classList.add('expanded');
            buttons.textContent = 'Read Less';
            
        }
    });
});

document.addEventListener("click", function(event) {
    if (!event.target.closest(".service-card")) {
      document.querySelectorAll(".service-content").forEach(function(element) {
        element.style.display = "none";
      });
    }
  });


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
