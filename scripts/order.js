document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const order = {
        name: document.getElementById('name').value,
        phone: document.getElementById('phone').value,
        address: document.getElementById('address').value,
        furniture: document.getElementById('furniture').value,
        price: document.getElementById('price').value,
        additionalInfo: document.getElementById('additionalInfo').value,
        deliveryDate: document.getElementById('deliveryDate').value
    };

    let orders = JSON.parse(localStorage.getItem('orders')) || [];
    orders.push(order);
    localStorage.setItem('orders', JSON.stringify(orders));

    alert('Order has been placed successfully!');
    document.getElementById('orderForm').reset();
})