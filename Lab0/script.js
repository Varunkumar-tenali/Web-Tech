function clearErrors() {
    const inputs = document.querySelectorAll('input');
    const errors = document.querySelectorAll('.error-message');
    
    inputs.forEach(input => input.classList.remove('error'));
    errors.forEach(error => error.style.display = 'none');
}

function validateField(field, errorId, customValidation, customErrorMessage) {
    const value = field.value.trim();
    const errorElement = document.getElementById(errorId);
    
    if (value === '') {
        field.classList.add('error');
        errorElement.textContent = getDefaultErrorMessage(field.id);
        errorElement.style.display = 'block';
        return false;
    }
    
    if (customValidation && !customValidation(value)) {
        field.classList.add('error');
        errorElement.textContent = customErrorMessage || getDefaultErrorMessage(field.id);
        errorElement.style.display = 'block';
        return false;
    }
    
    field.classList.remove('error');
    errorElement.style.display = 'none';
    return true;
}

function getDefaultErrorMessage(fieldId) {
    const messages = {
        'name': 'Please enter your name',
        'regNumber': 'Registration number must be in format: 2 digits + 3 capital letters + 4 digits (e.g., 23BCE9454)',
        'gmail': 'Please enter a valid Gmail address',
        'phone': 'Please enter a valid 10-digit phone number'
    };
    return messages[fieldId] || 'This field is required';
}

function validateName(value) {
    return value.length > 0;
}

function validateRegNumber(value) {
    const regPattern = /^\d{2}[A-Z]{3}\d{4}$/;
    return regPattern.test(value);
}

function validateGmail(value) {
    const gmailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    return gmailPattern.test(value);
}

function validatePhone(value) {
    const phonePattern = /^\d{10}$/;
    return phonePattern.test(value);
}

function resetForm() {
    const form = document.getElementById('regForm');
    form.reset();
    clearErrors();
    document.getElementById('successMessage').style.display = 'none';
}

function handleSubmit(e) {
    e.preventDefault();
    clearErrors();
    
    const name = document.getElementById('name');
    const regNumber = document.getElementById('regNumber');
    const gmail = document.getElementById('gmail');
    const phone = document.getElementById('phone');
    
    let isValid = true;
    
    if (!validateField(name, 'nameError', validateName)) {
        isValid = false;
    }
    
    if (!validateField(regNumber, 'regNumberError', validateRegNumber, 
        'Registration number must be in format: 2 digits + 3 capital letters + 4 digits (e.g., 23BCE9454)')) {
        isValid = false;
    }
    
    if (!validateField(gmail, 'gmailError', validateGmail, 
        'Please enter a valid Gmail address')) {
        isValid = false;
    }
    
    if (!validateField(phone, 'phoneError', validatePhone, 
        'Phone number must be exactly 10 digits')) {
        isValid = false;
    }
    
    if (isValid) {
        document.getElementById('successMessage').style.display = 'block';
        
        console.log('Registration Data:', {
            name: name.value,
            regNumber: regNumber.value,
            gmail: gmail.value,
            phone: phone.value
        });
        
        setTimeout(() => {
            resetForm();
            document.getElementById('successMessage').style.display = 'none';
        }, 2000);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('regForm');
    const resetBtn = document.getElementById('resetBtn');
    
    if (form) {
        form.addEventListener('submit', handleSubmit);
        
        if (resetBtn) {
            resetBtn.addEventListener('click', resetForm);
        }
        
        const nameInput = document.getElementById('name');
        const regNumberInput = document.getElementById('regNumber');
        const gmailInput = document.getElementById('gmail');
        const phoneInput = document.getElementById('phone');
        
        if (nameInput) {
            nameInput.addEventListener('blur', function() {
                validateField(this, 'nameError', validateName);
            });
        }
        
        if (regNumberInput) {
            regNumberInput.addEventListener('blur', function() {
                validateField(this, 'regNumberError', validateRegNumber, 
                    'Registration number must be in format: 2 digits + 3 capital letters + 4 digits (e.g., 23BCE9454)');
            });
        }
        
        if (gmailInput) {
            gmailInput.addEventListener('blur', function() {
                validateField(this, 'gmailError', validateGmail, 
                    'Please enter a valid Gmail address');
            });
        }
        
        if (phoneInput) {
            phoneInput.addEventListener('blur', function() {
                validateField(this, 'phoneError', validatePhone, 
                    'Phone number must be exactly 10 digits');
            });
        }
    }
});
