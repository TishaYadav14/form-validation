const registrationForm = document.getElementById('registrationForm');
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');
        const confirmPasswordInput = document.getElementById('confirmPassword');
        const errorMessages = document.getElementById('errorMessages');

        const displayError = (message) => {
            errorMessages.textContent = message;
        };

        const validateEmail = (email) => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        };

        const validatePassword = (password) => {
            const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!]).{8,}$/;
            return passwordRegex.test(password);
        };

        registrationForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = nameInput.value.trim();
            const email = emailInput.value.trim();
            const password = passwordInput.value.trim();
            const confirmPassword = confirmPasswordInput.value.trim();

            if (!name || !email || !password || !confirmPassword) {
                displayError('All fields are required.');
                return;
            }
            if (!validateEmail(email)) {
                displayError('Invalid email format.');
                return;
            }
            if (!validatePassword(password)) {
                displayError('Password must be at least 8 characters long and contain small letter, capital letters, numbers and special charecter.');
                return;
            }
            if (password !== confirmPassword) {
                displayError('Passwords do not match.');
                return;
            }
            alert('Registration successful!');
            registrationForm.reset();
        });
        
        registrationForm.addEventListener('input', () => {
            errorMessages.textContent = '';
        });