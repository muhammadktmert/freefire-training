document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Stop form from submitting

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const errorMsg = document.getElementById('errorMsg');

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === '' || password === '') {
        errorMsg.textContent = '❌ Email and Password are required.';
    } else if (!emailPattern.test(email)) {
        errorMsg.textContent = '❌ Please enter a valid email address.';
    } else if (password.length < 6) {
        errorMsg.textContent = '❌ Password must be at least 6 characters.';
    } else {
        errorMsg.style.color = 'lightgreen';
        errorMsg.textContent = '✅ Login Successful (Simulation)';
    }
});
