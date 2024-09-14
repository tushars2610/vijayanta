function getQueryParam(param) {
    let urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

let productId = getQueryParam('id');
let productTitle = getQueryParam('text');
let productLink = getQueryParam('link')
// Create a new h1 element

document.addEventListener("DOMContentLoaded", function() {
    // Get the iframe element
    let iframe = document.getElementById("myIframe");

    // Store the source in a JavaScript variable
    let iframeSrc = `../database/${productLink}/1/text.html`;

    // Set the iframe's src attribute dynamically
    iframe.src = iframeSrc;
});