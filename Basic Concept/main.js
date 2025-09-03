// Wait for the DOM to be fully loaded before executing JS
document.addEventListener('DOMContentLoaded', function() {
    // Get references to the elements
    const user = {
        naran: 'ezequiel',
        tinan: 20,
    }

    const para = document.getElementById('user');
    const button = document.getElementById('buttons');

    button.addEventListener('click', () => {;
        para.textContent = user;
    })
});