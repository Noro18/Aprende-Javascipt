// Wait for the DOM to be fully loaded before executing JS
document.addEventListener('DOMContentLoaded', function() {
    // Get references to the elements
    const paragraph = document.getElementById("demo");
    const button = document.getElementById("changeTextBtn");

    // Add click event listener to the button
    button.addEventListener('click', function() {
        // Change the text and styling
        paragraph.textContent = "The text has been changed! 🎉";
        paragraph.style.color = "green";
        paragraph.style.fontWeight = "bold";
    });
});