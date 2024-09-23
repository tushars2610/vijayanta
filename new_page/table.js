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
//--------------------------------------------------------------------------


fetch(`product.json`)
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
            <td> <a href="../Home_page/index.html">${product.title}</a></td> 
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
