const items = {
    fruits: ['apple', 'banana', 'grapes', 'orange', 'pineapple', 'mango'],
    vegetables: ['carrot', 'broccoli', 'potato', 'spinach'],
    bakery: ['bread', 'muffin', 'croissant'],
    meatSeafood: ['chicken', 'fish', 'shrimp'],
    dairy: ['milk', 'cheese', 'yogurt']
};

const orderSummary = document.getElementById('order-summary').getElementsByTagName('tbody')[0];
const totalPriceElement = document.getElementById('total-price');
const cart = {};

// Update order summary table
function updateOrderSummary() {
    orderSummary.innerHTML = ''; // Clear existing rows
    let total = 0;

    for (let id in cart) {
        const quantity = cart[id];
        const pricePerUnit = parseFloat(document.getElementById(id).dataset.price);
        const price = quantity * pricePerUnit;

        if (quantity > 0) {
            const row = orderSummary.insertRow();
            row.insertCell(0).textContent = id.charAt(0).toUpperCase() + id.slice(1);

            const isWeight = ['apple', 'banana', 'grapes', 'orange', 'pineapple', 'mango', 'carrot', 'broccoli', 'potato', 'spinach', 'chicken', 'fish', 'shrimp', 'cheese', 'yogurt'].includes(id);
            const quantityText = isWeight ? (quantity >= 1000 ? (quantity / 1000) + ' kg' : quantity + ' g') : quantity + ' pieces';
            row.insertCell(1).textContent = quantityText;

            row.insertCell(2).textContent = 'Rs. ' + price.toFixed(2);

            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.addEventListener('click', () => removeItem(id));
            row.insertCell(3).appendChild(removeButton);

            total += price;
        }
    }

    totalPriceElement.textContent = 'Rs. ' + total.toFixed(2);
}

// Add items to the cart
function addToCart() {
    for (let category in items) {
        items[category].forEach(id => {
            const quantity = parseInt(document.getElementById(id).value) || 0;
            if (quantity > 0) {
                cart[id] = (cart[id] || 0) + quantity;
                document.getElementById(id).value = 0; // Clear the input
            }
        });
    }
    updateOrderSummary();
}

// Remove an item from the cart
function removeItem(itemId) {
    delete cart[itemId];
    updateOrderSummary();
}

// Attach event listeners
document.getElementById('add-to-cart').addEventListener('click', addToCart);

document.getElementById('buy-now').addEventListener('click', function() {
    window.location.href = 'payment.html';
});

document.getElementById('add-favourites').addEventListener('click', function() {
    const favouriteOrder = {};

    for (let id in cart) {
        const quantity = cart[id];
        if (quantity > 0) {
            favouriteOrder[id] = quantity;
        }
    }

    localStorage.setItem('favouriteOrder', JSON.stringify(favouriteOrder));
    alert('Order saved to favourites!');
});

document.getElementById('apply-favourites').addEventListener('click', function() {
    const favouriteOrder = JSON.parse(localStorage.getItem('favouriteOrder') || '{}');

    for (let id in favouriteOrder) {
        cart[id] = favouriteOrder[id];
    }

    updateOrderSummary();
});

document.getElementById('save-summary').addEventListener('click', function() {
    const tableHtml = document.getElementById('order-summary').outerHTML;
    localStorage.setItem('orderSummary', tableHtml);
    window.location.href = 'payment.html';
});
