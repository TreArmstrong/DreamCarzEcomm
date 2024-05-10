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


fetch('performance.json')
    .then(response => response.json())
    .then(data => {
        const productGrid = document.querySelector('.product-grid');

        data.forEach(product => {
            const card = document.createElement('div');
            card.classList.add('product-card');

            const img = document.createElement('img');
            img.src = product.photo;
            img.alt = product.name;

            const name = document.createElement('h3');
            name.textContent = product.name;

            const price = document.createElement('p');
            price.innerHTML = `<span>Price:</span> $${product.price}`;

            const description = document.createElement('p');
            description.textContent = product.description;

            const contactButton = document.createElement('a');
            contactButton.href = 'contact.html';
            contactButton.textContent = 'Contact Us';
            contactButton.classList.add('contact-btn');

            card.appendChild(img);
            card.appendChild(name);
            card.appendChild(price);
            card.appendChild(description);
            card.appendChild(contactButton);

            productGrid.appendChild(card);
        });
    });