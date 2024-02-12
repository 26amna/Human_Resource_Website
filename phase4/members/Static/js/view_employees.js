function search_employee() {
    // Get the input value
    var searchInput = document.getElementById("search-input").value.toLowerCase();
  
    // Get all the rows in the table
    var rows = document.querySelectorAll("tbody tr");
  
    // Loop through each row and hide/show based on the search input
    rows.forEach(function (row) {
      // Get the name from the current row
      var name = row.querySelector("td:first-child").textContent.toLowerCase();
  
      // Check if the name contains the search input
      if (name.includes(searchInput)) {
        row.style.display = ""; // Show the row
      } else {
        row.style.display = "none"; // Hide the row
      }
    });
  }
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
  