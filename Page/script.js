fetch('general_test.json')
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
            <td> <a href="../slide_bar/index.html">${product.title}</a> </td> 
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
  