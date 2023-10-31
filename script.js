var searchInput = document.getElementById("search");
var resultsList = document.getElementById("results-list");

let fruits = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search() {
    let userInput = searchInput.value.toLowerCase();

    resultsList.innerHTML = "";

    let results = fruits.filter(function(fruit) {
        return fruit.toLowerCase().includes(userInput);
    });

    results.forEach(function(result) {
        let li = document.createElement("li");
        li.textContent = result;
        li.addEventListener("click", function() {
            useSuggestion(result);
            resultsList.innerHTML = "";
        });
        resultsList.appendChild(li);

        li.addEventListener("mouseover", function() {
            li.style.backgroundColor = "#c0c0c0";
        });
        li.addEventListener("mouseout", function() {
            li.style.backgroundColor = "";
        });
    });

    if (results.length > 0) {
        document.getElementById("results").style.display = "block";
    } else {
        document.getElementById("results").style.display = "none";
    }
}

function useSuggestion(suggestion) {
    searchInput.value = suggestion;
}

searchInput.addEventListener("input", search);