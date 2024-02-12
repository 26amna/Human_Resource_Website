// submitVacation.js

document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.getElementById("accept-btn");
    submitButton.addEventListener("click", submitVacation);
});



function submitVacation() {
    console.log("Submit button clicked");
    const from = document.getElementById("from").value;
    const to = document.getElementById("to").value;
    const reason = document.getElementById("reason").value;
    const employeeId = parseInt(document.getElementById("employee-id").value, 10);
    console.log("Employee ID:", employeeId);


    const formData = new FormData();
    formData.append("from", from);
    formData.append("to", to);
    formData.append("reason", reason);
    formData.append("employeeId", employeeId);

    fetch('submitVacation/', {
        method: 'POST',
        body: JSON.stringify({ employee_id: employeeId, from: from, to: to, reason: reason }),
        headers: {
            'Content-Type': 'application/json',
        },
    })
    
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error("Error submitting vacation:", error);
    });
}
