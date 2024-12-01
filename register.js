// Get today's date in the format YYYY-MM-DD
var today = new Date();
var day = String(today.getDate()).padStart(2, '0');
var month = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
var year = today.getFullYear();
today = year + '-' + month + '-' + day;

// Set the value of the date input to today's date
document.getElementById('registrationDate').value = today;
