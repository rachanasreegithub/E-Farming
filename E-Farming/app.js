document.getElementById('create-account-form').addEventListener('submit', function(e) {
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm-password');

    if (username.value.trim() === '') {
        setError(username, 'Username cannot be blank');
        e.preventDefault();
    } else {
        setSuccess(username);
    }

    if (email.value.trim() === '') {
        setError(email, 'Email cannot be blank');
        e.preventDefault();
    } else if (!isEmail(email.value.trim())) {
        setError(email, 'Not a valid email');
        e.preventDefault();
    } else {
        setSuccess(email);
    }

    if (password.value.trim() === '') {
        setError(password, 'Password cannot be blank');
        e.preventDefault();
    } else {
        setSuccess(password);
    }

    if (confirmPassword.value.trim() === '') {
        setError(confirmPassword, 'Confirm Password cannot be blank');
        e.preventDefault();
    } else if (password.value.trim() !== confirmPassword.value.trim()) {
        setError(confirmPassword, 'Passwords do not match');
        e.preventDefault();
    } else {
        setSuccess(confirmPassword);
    }
});

function setError(input, message) {
    const inputGroup = input.parentElement;
    const errorMessage = inputGroup.querySelector('p');
    errorMessage.innerText = message;
    inputGroup.className = 'input-group error';
}

function setSuccess(input) {
    const inputGroup = input.parentElement;
    inputGroup.className = 'input-group success';
}

function isEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
