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
    document.getElementById("mySidenav").style.width = "400px";
    document.getElementById("open_menu").style.marginLeft = "400px";
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

