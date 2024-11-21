function handleLogin(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

 
    if (username === 'blow' && password === 'password') {
        window.location.href = 'dashboard.html';
    } else {
        alert('Invalid credentials. Please try again.');
    }
}



function togglePasswordVisibility() {
    const passwordField = document.getElementById('password');
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
    } else {
        passwordField.type = 'password';
    }
}

function toggleDarkMode() {
    const body = document.body;
    const toggleButton = document.querySelector('.toggle-dark-mode');
    

    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        toggleButton.innerText = 'Toggle Light Mode On';
    } else {
        toggleButton.innerText = 'Toggle Dark Mode On';
    }
}
