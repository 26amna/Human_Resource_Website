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
function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var salary = document.getElementById("salary").value;
    var ID = document.getElementById("id").value;

    var nameRegex = /^[A-Za-z\s]+$/;
    if (!nameRegex.test(name)) {
        alert("Name must include only characters.");
        return false;
    }
    var emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    if (!emailRegex.test(email)) {
        alert("Email must follow the standard email format.");
        return false;
    }

    var phoneRegex = /^\d+$/;
    if (!phoneRegex.test(phone)) {
        alert("Phone must contain only numbers.");
        return false;
    }
    var IDRegex = /^\d+$/;
    if (!phoneRegex.test(ID)) {
        alert("ID must contain only numbers.");
        return false;
    }
    var validSalary = !isNaN(parseFloat(salary)) && isFinite(salary);
    if (!validSalary) {
        alert("Salary must be a valid number.");
        return false;
    }

    return true;
}