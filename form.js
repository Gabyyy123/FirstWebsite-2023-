document.getElementById('').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if(name && email && password) {
        alert(`Welcome, ${name}! Your account has been created.`);
    } else {
        alert('Please fill out all the fields.');
    }
});     


