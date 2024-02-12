document.addEventListener('DOMContentLoaded', function () {

    const backButton = document.querySelector('.back');
    const logoutButton = document.querySelector('.lgOut');

    backButton.addEventListener('click', function () {
        // Redirect back to the home page
        window.location.href = 'welcome_page.html'; // Replace with your actual home page
    });

    logoutButton.addEventListener('click', function () {
        // Show a warning message and ask for confirmation
        const confirmLogout = confirm('Are you sure you want to log out?');
        if (confirmLogout) {
            // If the user confirms, redirect to the home page
            window.location.href = 'home.html'; // Replace with your actual home page
        }
    });
});