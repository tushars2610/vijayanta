$(document).ready(function () {
    // Add smooth scrolling to all links
    $("a").on("click", function (event) {
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $("html, body").animate(
          {
            scrollTop: $(hash).offset().top,
          },
          800,
          function () {
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          }
        );
      } // End if
    });
  });



document.addEventListener("DOMContentLoaded", function() {
  let texts = ["Text 1", "Text 2", "Text 3", "Text 4", "Text 5"];
  let index = 0;

  function changeText() {
      document.getElementById("home_tour").innerText = texts[index];
      index = (index + 1) % texts.length;
  }

  setInterval(changeText, 1000);
});