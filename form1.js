// Define the credentials for demonstration
const credentials = {
    'LearnTech': 'LearnTech123',
    'user': 'password'
  };
  
  document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get input values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Check if the credentials match
    if (credentials[username] && credentials[username] === password) {
        // Redirect to another page
        window.location.href = 'home.html';
    } else {
        document.getElementById('message').textContent = 'Invalid username or password.';
        document.getElementById('message').style.color = 'red';
    }
  });
 