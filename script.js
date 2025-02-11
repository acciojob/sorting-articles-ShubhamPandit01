// List of bands
const bands = [
    'The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 
    'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 
    'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'
];

// Function to remove "a", "an", and "the" from the start of a band name
function removeArticle(bandName) {
    // Convert to lowercase to make comparison case-insensitive
    const articles = ['a', 'an', 'the'];
    const words = bandName.split(' ');

    // If the first word is an article, remove it
    if (articles.includes(words[0].toLowerCase())) {
        words.shift();  // Remove the first word
    }

    // Return the name without the article at the beginning
    return words.join(' ');
}

// Sort the bands while ignoring 'a', 'an', and 'the'
const sortedBands = bands.sort((a, b) => {
    const bandA = removeArticle(a);
    const bandB = removeArticle(b);
    return bandA.localeCompare(bandB);  // Compare alphabetically
});

// Function to display the sorted bands in the <ul> with id 'band'
function displaySortedBands() {
    const bandList = document.getElementById('band');
    
    // Clear any existing content in the list
    bandList.innerHTML = '';

    // Add each band to the list
    sortedBands.forEach(band => {
        const li = document.createElement('li');
        li.textContent = band;
        bandList.appendChild(li);
    });
}

// Call the function to display the sorted bands
displaySortedBands();
