//---------------for displaying title-----------------------------
//----------------------------------------------------------------
function getQueryParam(param) {
    let urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

let productId = getQueryParam('id');
let productTitle = getQueryParam('text');
let productLink = getQueryParam('link')
// Create a new h1 element
const h1 = document.createElement('h1');

// Set the text content of the h1 element
h1.textContent = `${productTitle}`;

// Find the container div and append the h1 element to it
document.getElementById('title').appendChild(h1);

document.addEventListener("DOMContentLoaded", function() {
    // Get the iframe element
    let iframe = document.getElementById("myIframe");

    // Store the source in a JavaScript variable
    let iframeSrc = `../database/${productLink}/1/text.html`;

    // Set the iframe's src attribute dynamically
    iframe.src = iframeSrc;
});
//--------------------------------------------------------------------------


fetch(`../database/${productLink}/data.json`)
.then(function(response){
    return response.json();
})
.then(function(products){
    let placeholder = document.querySelector("#table");
    let out = "";
    for(let product of products){
        out += `
        <tr> 
            <td> ${product.id}</td> 
            <td> <a href="../Home_page/index.html">${product.title}</a> </td> 
        </tr>
        `;
    }

placeholder.innerHTML = out;

})

function openNav() {
    document.getElementById("mySidenav").style.width = "310px";
    document.getElementById("open_menu").style.marginLeft = "310px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("open_menu").style.marginLeft = "0px";
  }
  
  document.getElementById('fileInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('displayText').textContent = e.target.result;
        };
        reader.readAsText(file);
    }
});

function download(){
    window.location.href = `../database/${productLink}/${productId}/pdf.pdf`
}

// --------------iframe--------------
// // Ensure the script runs after the DOM is loaded
// document.addEventListener("DOMContentLoaded", function() {
//     // Select the div where the iframe will be inserted
//     let centerContent = document.getElementById("centerContent");

//     // Create the iframe element
//     let iframe = document.createElement("iframe");

//     // Set the attributes for the iframe
//     iframe.src = "../database/Test_&_Measuring_instruments/1/text.html";
//     iframe.frameBorder = "0";
//     iframe.style.height = "100%";
//     iframe.style.width = "100%";

//     // Append the iframe to the centerContent div
//     centerContent.appendChild(iframe);
// });

// Ensure the script runs after the DOM is loaded
// document.addEventListener("DOMContentLoaded", function() {
//     // Get the iframe element
//     let iframe = document.getElementById("myIframe");

//     // Store the source in a JavaScript variable
//     let iframeSrc = "../database/General_test_and_measuring/1/text.html";

//     // Set the iframe's src attribute dynamically
//     iframe.src = iframeSrc;
// });

document.addEventListener("DOMContentLoaded", function() {
    // Get the iframe element
    let iframe = document.getElementById("myIframe");

    // Store the source in a JavaScript variable
    let iframeSrc = "../database/General_test_and_measuring/1/text.html";

    // Set the iframe's src attribute dynamically
    iframe.src = iframeSrc;
});
