function updateSearchAction() {
    var form = document.getElementById('searchForm');
    var employeeId = document.getElementById('employeeId').value;
  
    // Update the form action with the provided ID
    form.action = '{% url "getEmployeeWithId" %}' + '?id=' + employeeId;
  }
  