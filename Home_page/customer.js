// Function to populate the logos
function populateLogos(data) {
    const logosSlide = document.getElementById('logos-slide');
  
    data.forEach(logo => {
      const img = document.createElement('img');
      img.src = `../testimonials/images/${logo.image}`;
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
  