document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const contact = {
        name: document.getElementById('contactName').value,
        email: document.getElementById('contactEmail').value,
        phone: document.getElementById('contactPhone').value,
        subject: document.getElementById('contactSubject').value,
        message: document.getElementById('contactMessage').value
    };

    let contacts = JSON.parse(localStorage.getItem('contacts')) || [];
    contacts.push(contact);
    localStorage.setItem('contacts', JSON.stringify(contacts));

    alert('Contact form submitted successfully!');
    document.getElementById('contactForm').reset();
});