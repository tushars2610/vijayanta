const searchDialog = document.getElementById("search-dialog")

function show(){
    searchDialog.showModal()
}
function closeDialog(){
    searchDialog.close()
}

//-------------------------------------------------------------
let jsonData = [];

async function loadJsonData() {
    const files = ['../database/General_test_and_measuring/data.json'];
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
                    window.location.href = `../Products/product.html?id=${suggestion.id}`
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

