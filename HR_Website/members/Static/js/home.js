document.addEventListener("DOMContentLoaded", function() {
    // Get all anchor elements inside the navigation
    var navLinks = document.querySelectorAll("nav a");

    // Attach a click event listener to each navigation link
    navLinks.forEach(function(link) {
        link.addEventListener("click", function(event) {
            // Prevent the default behavior of the link (e.g., navigating to a new page)
            event.preventDefault();

            // Get the href attribute of the clicked link
            var href = link.getAttribute("href");

            // Perform different actions based on the chosen link
            if (href === "home.html") {
                // If the link is "Home", redirect to the home page
                window.location.href = "home.html";
            } else if (href === "#contact-us") {
                // If the link is "#contact-us", show a message with the contact number
                alert("Call this number: 01117518970");
            } else if (href === "#") {
                // If the link is "#help", show a message to connect with the IT team
                alert("Connect with IT team");
            } else if (href !== "login_page.html") {
                // If the link is "Human Resources", display a message and redirect to home
                alert("Not available");
                window.location.href = "home.html";
            } else {
                // For other choices, you can add additional logic or redirect as needed
                window.location.href = href;
            }
        });
    });
});


function showMessage(selectedProject) {
    if (selectedProject !== 'Human Resources Website') {
        alert('This project is not available right now we are so sorry ');
    }
}
