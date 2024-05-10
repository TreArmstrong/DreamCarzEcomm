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

// // Fetch products from JSON file and dynamically create product cards
// // Fetch products from JSON file and dynamically create product cards
// fetch('products.json')
//     .then(response => response.json())
//     .then(data => {
//         const productGrid = document.querySelector('.product-grid');

//         data.forEach(product => {
//             const card = document.createElement('div');
//             card.classList.add('product-card');

//             const img = document.createElement('img');
//             img.src = product.photo;
//             img.alt = product.name;

//             const name = document.createElement('h3');
//             name.textContent = product.name;

//             const price = document.createElement('p');
//             price.innerHTML = `<span>Price:</span> $${product.price}`;

//             const description = document.createElement('p');
//             description.textContent = product.description;

//             const contactButton = document.createElement('a');
//             contactButton.href = 'contact.html';
//             contactButton.textContent = 'Contact Us';
//             contactButton.classList.add('contact-btn');

//             card.appendChild(img);
//             card.appendChild(name);
//             card.appendChild(price);
//             card.appendChild(description);
//             card.appendChild(contactButton);

//             productGrid.appendChild(card);
//         });
//     });


// Fetch products from JSON file and dynamically create product cards with filter functionality
fetch('products.json')
    .then(response => response.json())
    .then(data => {
        const productGrid = document.querySelector('.product-grid');
        let originalProducts = data; // Store the original products data
        let filteredProducts = []; // Array to hold filtered products

        // Function to render product cards with details
        function renderProductCard(product) {
            const card = document.createElement('div');
            card.classList.add('product-card');

            const img = document.createElement('img');
            img.src = product.photo;
            img.alt = product.name;
            card.appendChild(img);

            const name = document.createElement('h3');
            name.textContent = product.name;
            card.appendChild(name);

            const price = document.createElement('p');
            price.innerHTML = `<span>Price:</span> $${product.price}`;
            card.appendChild(price);

            const description = document.createElement('p');
            description.textContent = product.description;
            card.appendChild(description);

            const contactButton = document.createElement('a');
            contactButton.href = 'contact.html';
            contactButton.textContent = 'Contact Us';
            contactButton.classList.add('contact-btn');
            card.appendChild(contactButton);

            productGrid.appendChild(card);
        }

        // Function to display products based on filters
        function displayProducts() {
            const priceRangeFilter = document.getElementById('price-range').value;
            const modelFilter = document.getElementById('model-filter').value;

            filteredProducts = originalProducts.filter(product => {
                const [minPrice, maxPrice] = priceRangeFilter.split('-').map(Number);
                const isPriceInRange = Number(product.price.replace(/,/g, '')) >= minPrice && Number(product.price.replace(/,/g, '')) <= maxPrice; 
                // Line above checks price after comma is removed to make sure it fits filter
                const isModelMatch = modelFilter === 'All' || product.model === modelFilter;

                return isPriceInRange && isModelMatch;
            });

            renderFilteredProducts();
        }

        // Function to render filtered products
        function renderFilteredProducts() {
            productGrid.innerHTML = ''; // Clear existing products

            filteredProducts.forEach(product => {
                renderProductCard(product);
            });
        }

        // Event listeners for filter changes
        document.getElementById('price-range').addEventListener('change', displayProducts);
        document.getElementById('model-filter').addEventListener('change', displayProducts);

        // Shows display of all products
        data.forEach(product => {
            renderProductCard(product);
        });
    });
