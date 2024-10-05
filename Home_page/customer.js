
// Fetch the JSON data
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        // Get the container element
        const customerImagesContainer = document.getElementById('customer-images');

        // Clear the existing images
        customerImagesContainer.innerHTML = '';

        // Loop through the JSON data and create new img elements
        data.forEach(customer => {
            const imagePath = `../testimonials/images/${customer.image}`;
            const imgElement = document.createElement('img');
            imgElement.src = imagePath;
            imgElement.alt = '';
            imgElement.classList.add('mr-2');
            customerImagesContainer.appendChild(imgElement);
        });
    });

    // Fetch the JSON data
fetch('data.json')
.then(response => response.json())
.then(data => {
    // Get the container element
    const customerImagesContainer = document.getElementById('customer-images2');

    // Clear the existing images
    customerImagesContainer.innerHTML = '';

    // Loop through the JSON data and create new img elements
    data.forEach(customer => {
        const imagePath = `../testimonials/images/${customer.image}`;
        const imgElement = document.createElement('img');
        imgElement.src = imagePath;
        imgElement.alt = '';
        imgElement.classList.add('mr-2');
        customerImagesContainer.appendChild(imgElement);
    });
});







    // ---------------------type-of-product-------------
// Get the links-container1 element
const linksContainer1 = document.getElementById('links-container1');

// Fetch data from the JSON file
fetch('product.json')
  .then(response => response.json())
  .then(data => {
    // Create HTML elements
    let productHTML = '';
    data.forEach(product => {
      productHTML += `
        <a href="${product.productLink}">${product.productName}</a><br>
      `;
    });
    // Append the HTML to the links-container1 element
    linksContainer1.innerHTML = productHTML;
  })
  .catch(error => console.error('Error:', error));




  // Get the links-container1 element
const linksContainer2 = document.getElementById('links-container2');

// Fetch data from the JSON file
fetch('product.json')
  .then(response => response.json())
  .then(data => {
    // Create HTML elements
    let productHTML = '';
    data.forEach(product => {
      productHTML += `
        <a href="${product.productLink}">${product.productName}</a><br>
      `;
    });
    // Append the HTML to the links-container1 element
    linksContainer2.innerHTML = productHTML;
  })
  .catch(error => console.error('Error:', error));


  // Get the links-container1 element
const linksContainer3 = document.getElementById('links-container3');

// Fetch data from the JSON file
fetch('product.json')
  .then(response => response.json())
  .then(data => {
    // Create HTML elements
    let productHTML = '';
    data.forEach(product => {
      productHTML += `
        <a href="${product.productLink}">${product.productName}</a><br>
      `;
    });
    // Append the HTML to the links-container1 element
    linksContainer3.innerHTML = productHTML;
  })
  .catch(error => console.error('Error:', error));