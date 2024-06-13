document.getElementById('submitButton').addEventListener('click', function() {
    const form = document.getElementById('detailsForm');
    const inputs = form.querySelectorAll('input');
    let allValid = true;

    inputs.forEach(input => {
        if (!input.value) {
            input.classList.add('invalid');
            allValid = false;
        } else {
            input.classList.remove('invalid');
        }
    });

    if (allValid) {
        alert('Successful!');
    } else {
        alert('Please fill out all fields.');
    }
});
