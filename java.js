const video = document.getElementById('hero-video');
const muteToggle = document.getElementById('mute-toggle');

// Auto play the video on page load
video.play();

muteToggle.addEventListener('click', () => {
    video.muted = !video.muted;
    muteToggle.textContent = video.muted ? 'Unmute' : 'Mute';
});
// Function to fetch product data from a JSON file
async function fetchProductData() {
    try {
        const response = await fetch('products.json');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching product data:', error);
    }
}

// // Select the hamburger icon and navigation menu
// const hamburger = document.querySelector('.hamburger');
// const nav = document.querySelector('nav');

// // Add event listener to the hamburger icon
// hamburger.addEventListener('click', () => {
//     nav.classList.toggle('is-active');
// });





// Function to create product cards in the carousel with images
// Function to create product cards with descriptions from JSON data
function createProductCards(products) {
    const carousel = document.querySelector('.carousel');

    products.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('product-card');

        // Create elements for image, name, and descriptions
        const img = document.createElement('img');
        img.src = product.photo;
        img.alt = product.name;
        
        const name = document.createElement('h3');
        name.textContent = product.name;
        
        const fullDesc = document.createElement('p');
        fullDesc.classList.add('full-description');
        fullDesc.textContent = product.description;

        // Create overlay for full description
        const overlay = document.createElement('div');
        overlay.classList.add('description-overlay');
        overlay.appendChild(fullDesc);

        // Append elements to product card
        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(overlay);

        carousel.appendChild(card);
    });
}

// Back to Top button functionality
document.getElementById("backToTopBtn").onclick = function() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
};

// Show Back to Top button when scrolling
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("backToTopBtn").style.display = "block";
    } else {
        document.getElementById("backToTopBtn").style.display = "none";
    }
}







// Load product data and create product cards in the carousel
fetchProductData().then(data => {
    createProductCards(data);
});
