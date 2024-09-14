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




  function sendEmail() {
    Email.send({
      Host: "smtp.gmail.com",
      Username: "shrutikkpt80@gmail.com",
      Password: "",
      To: 'shrutikkpt1234@gmail.com',
      From: document.getElementById("emaill").value,
      Subject: "New contact for enquiry",
      Body: "Name: " + document.getElementById("name").value
      + "<br> Email: " + document.getElementById("emaill").value
      + "<br> Phone No: " + document.getElementById("number").value
      + "<br> Message: " + document.getElementById("Message").value,
    })
      .then(function (message) {
        alert("Mail sent successfully")
      });
  }

  document.querySelector('.infinite-images').addEventListener('mouseover', function() {
    document.querySelector('.image-track').style.animationPlayState = 'paused';
  });

  document.querySelector('.infinite-images').addEventListener('mouseout', function() {
    document.querySelector('.image-track').style.animationPlayState = 'running';
  });


//--------------customer slider---------
  // Function to populate the logos
function populateLogos(data) {
  const logosSlide = document.getElementById('logos-slide');

  data.forEach(logo => {
    const img = document.createElement('img');
    img.src = `images/${logo.image}`;
    img.alt = logo.Name;
    logosSlide.appendChild(img);
  });

  // Clone the logos-slide div to create the continuous loop effect
  const copy = logosSlide.cloneNode(true);
  document.querySelector('.logos').appendChild(copy);
}

// Fetch the JSON data and populate logos
fetch('data.json')
  .then(response => response.json())
  .then(data => populateLogos(data))
  .catch(error => console.error('Error fetching the JSON data:', error));


  