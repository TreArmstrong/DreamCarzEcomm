const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = new FormData(contactForm);
    const jsonData = {};

    formData.forEach((value, key) => {
        jsonData[key] = value;
    });

    fetch('contacted.json', {
        method: 'POST', //  the fetch request is using  HTTP POST method to send data to the server.
        headers: {
            'Content-Type': 'application/json' // Basically saying will be sent to a json file
        },
        body: JSON.stringify(jsonData) // So it can send the data as a object json string 
    })
        .then(response => {
            if (response.ok) // To see if sent was a success
             {
                alert('Form submitted successfully!');
                contactForm.reset();
            } else {
                alert('Error submitting the form. Please try again.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        });
});
