document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    const backButton = document.querySelector('.back');
    const logoutButton = document.querySelector('.lgOut');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Validate the form inputs
        if (validateForm()) {
            // If the form is valid, redirect to the view employees page
            window.location.href = 'View Employees.html'; // Replace with your actual view employees page
        }
    });

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

    function validateForm() {
        let isValid = true;

        // Validate ID
        const idInput = document.getElementById('id');
        const idValue = idInput.value.trim();
        if (!/^\d+$/.test(idValue)) {
            isValid = false;
            alert('Please enter a valid ID containing only numbers.');
        }

        // Validate Name
        const fnameInput = document.getElementById('fname');
        if (!/^[a-zA-Z\s]+$/.test(fnameInput.value.trim())) {
            isValid = false;
            alert('Please enter a valid first name containing alphabetical characters and spaces.');
        }
        const lnameInput = document.getElementById('lname');
        if (!/^[a-zA-Z\s]+$/.test(lnameInput.value.trim())) {
            isValid = false;
            alert('Please enter a valid last name containing alphabetical characters and spaces.');
        }


        // Validate Phone Number
        const phoneInput = document.getElementById('phone');
        const phoneValue = phoneInput.value.trim();
        if (!/^\d{11}$/.test(phoneValue)) {
            isValid = false;
            alert('Please enter a valid 11-digit phone number.');
        }

        // Validate Email
        const emailInput = document.getElementById('email');
        const emailValue = emailInput.value.trim();
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
            isValid = false;
            alert('Please enter a valid email address.');
        }
        return isValid;
    }
});