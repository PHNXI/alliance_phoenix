document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  
  // Check if username and password match
  if (username === 'phnx2023' && password === 'phnx2023') {
    // Redirect to the page after successful login
    window.location.href = 'log_in.html';
  } else {
    // Display error message
    document.getElementById('error-msg').innerText = 'Invalid username or password. Please try again.';
  }
});
