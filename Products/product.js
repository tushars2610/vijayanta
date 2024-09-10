//---------------for displaying title-----------------------------
//----------------------------------------------------------------
function getQueryParam(param) {
    let urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}
let productId = getQueryParam('id');
let productLink = "";

function getProductLinkById(id, products) {
    const product = products.find(item => item.id === id);
    return product ? product.productLink : null;
}

fetch('data.json')
    .then(response => response.json())
    .then(data => {
        const idToSearch = productId;
        productLink = getProductLinkById(idToSearch, data);

        if (productLink) {
            let address = `../database/${productLink}/data.json`;
            return fetch(address);
        } else {
            throw new Error('Product link not found');
        }
    })
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('card-container');
        data.forEach(card => {
            const cardElement = document.createElement('div');
            cardElement.className = 'card';
            cardElement.innerHTML = `
                <a onclick="navigate(${card.id}, '${card.title}', '${card.link}')">
                    <div class="content">
                        <h2>${card.id}</h2>
                        <h3>${card.title}</h3>
                    </div>
                </a>
            `;
            container.appendChild(cardElement);
        });
        VanillaTilt.init(document.querySelectorAll(".card"), {
            max: 25,
            speed: 400,
        });
    })
    .catch(error => console.error('Error:', error));

function navigate(productId, text, link){
    window.location.href = `../Page/page.html?id=${productId}&text=${encodeURIComponent(text)}&link=${encodeURIComponent(link)}`;
}
// -------------------------original-------------

let productId1 = getQueryParam('id');
// let productTitle = getQueryParam('text');
let productLink1 = getQueryParam('link')
// Create a new h1 element
const h1 = document.createElement('h1');

// Set the text content of the h1 element
h1.textContent = `${productLink1}`;

// Find the container div and append the h1 element to it
// document.getElementById('title').appendChild(h1);
//--------------------------------------------------------------------------


fetch(`../database/${productLink1}/data.json`)
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
    document.getElementById("mySidenav").style.width = "260px";
    document.getElementById("open_menu").style.marginLeft = "260px";
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

