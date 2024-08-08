document.getElementById('payment-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Validate form fields
    var fullName = document.getElementById('fullName').value;
    var email = document.getElementById('email').value;
    var address = document.getElementById('address').value;
    var city = document.getElementById('city').value;
    var zipCode = document.getElementById('zipCode').value;
    var cardNumber = document.getElementById('cardNumber').value;
    var expiryDate = document.getElementById('expiryDate').value;
    var cvv = document.getElementById('cvv').value;
    
    if (!fullName || !email || !address || !city || !zipCode || !cardNumber || !expiryDate || !cvv) {
        alert('Please fill in all fields.');
        return;
    }
    
    // Simple card number validation (Luhn algorithm can be added for more accuracy)
    if (!/^\d{16}$/.test(cardNumber)) {
        alert('Please enter a valid 16-digit card number.');
        return;
    }
    
    // Simple expiry date validation
    if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiryDate)) {
        alert('Please enter a valid expiry date (MM/YY).');
        return;
    }
    
    // Simple CVV validation
    if (!/^\d{3,4}$/.test(cvv)) {
        alert('Please enter a valid CVV.');
        return;
    }
    
    alert('Payment successful! Thank you for your purchase.');
});


window.addEventListener('load', function() {
    const summaryHtml = localStorage.getItem('orderSummary');
    if (summaryHtml) {
        document.getElementById('summary-container').innerHTML = summaryHtml;
    } else {
        document.getElementById('summary-container').innerHTML = '<p>No order summary found.</p>';
    }
});
