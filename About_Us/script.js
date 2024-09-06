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