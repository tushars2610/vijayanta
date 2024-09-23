function toggleHamburger() {
    var hamburger = document.getElementById('hamburger');
    var navLinks = document.getElementById('nav-links');
    hamburger.classList.toggle('change');
    if (navLinks.classList.contains('hidden')) {
        navLinks.classList.remove('hidden');
        navLinks.classList.remove('slide-out');
        navLinks.classList.add('slide-in');
    } else {
        navLinks.classList.remove('slide-in');
        navLinks.classList.add('slide-out');
        setTimeout(function() {
            navLinks.classList.add('hidden');
        }, 500); // Match the duration of the slide-out animation
    }
}

// Get references to the buttons and main image
const mainImage = document.getElementById('main-image');
const imageButtons = document.querySelectorAll('.image-selector button');

// Add click event listeners to each button
imageButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Get the image src from the clicked button's child img element
        const newImageSrc = button.querySelector('img').src;
        
        // Update the src of the main image
        mainImage.src = newImageSrc;
    });
});


//-----------------------------search button-----------------------
const searchDialog = document.getElementById("search-dialog")

function show(){
    searchDialog.showModal()
}
function closeDialog(){
    searchDialog.close()
}
//--------------------------query dialog------------------
const queryDialog = document.getElementById("query-dialog")

function showQuery(){
  queryDialog.showModal()
}
function closeQuery(){
  queryDialog.close()
}
//-------------------------------------------------------------
let jsonData = [];

async function loadJsonData() {
    const files = ['data.json', 'data1.json']
    const fetchPromises = files.map(file => fetch(file).then(response => response.json()));
    const dataArrays = await Promise.all(fetchPromises);
    jsonData = dataArrays.flat();
}

loadJsonData();

function getSuggestions() {
    const input = document.getElementById('search-bar').value.toLowerCase();
    const suggestionsDiv = document.getElementById('suggestions');
    suggestionsDiv.innerHTML = '';

    if (input.length > 0) {
        const suggestions = jsonData.filter(item => 
            item.productName.toLowerCase().includes(input)
        );

        if (suggestions.length > 0) {
            suggestionsDiv.style.display = 'block';
            suggestions.forEach(suggestion => {
                const div = document.createElement('div');
                div.textContent = suggestion.productName;
                div.onclick = () => {
                    window.location.href = `${suggestion.productLink}`
                    document.getElementById('search-bar').value = suggestion.productName;
                    search();
                    
                    suggestionsDiv.style.display = 'none'; // Hide suggestions after selecting
                    
                };
                suggestionsDiv.appendChild(div);
            });
        } else {
            suggestionsDiv.style.display = 'none';
        }
    } else {
        suggestionsDiv.style.display = 'none';
    }
}

function search() {
    const query = document.getElementById('search-bar').value.toLowerCase();
    const results = jsonData.filter(item =>
        item.productName.toLowerCase().includes(query)
    );

    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = JSON.stringify(results, null, 2);
}


function download(){
    window.location.href = `pdf.pdf`
}
