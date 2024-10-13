document.getElementById('Form').addEventListener('submit', function (event) {
    event.preventDefault();

    const errorElements=document.querySelectorAll('.error');
    errorElements.forEach(error=>error.textContent='');

    let valid = true;
    // Validate First Name
    const fname=document.getElementById('fname').value.trim();
    if (fname==='') {
        document.getElementById('fnameError').textContent = 'First name is required.';
        valid = false;
    }

    // Validate Last Name
    const lname = document.getElementById('lname').value.trim();
    if (lname === '') {
        document.getElementById('lnameError').textContent = 'Last name is required.';
        valid = false;
    }

    // Validate Date of Birth
    const dob = document.getElementById('dob').value;
    if (dob === '') {
        document.getElementById('dobError').textContent = 'Date of Birth is required.';
        valid = false;
    }

    // Validate Address
    const address = document.getElementById('address').value.trim();
    if (address === '') {
        document.getElementById('addressError').textContent = 'Address is required.';
        valid = false;
    }

    // Validate Gender
    const gender = document.getElementById('gender').value;
    if (gender === '') {
        document.getElementById('genderError').textContent = 'Gender is required.';
        valid = false;
    }

    // Validate Phone Number
    const phone = document.getElementById('phone').value.trim();
    const phonePattern = /^\d{10}$/; // Change this pattern as per your requirement
    if (phone === '' || !phonePattern.test(phone)) {
        document.getElementById('phoneError').textContent = 'A valid phone number is required (10 digits).';
        valid = false;
    }

    // Validate Email
    const email = document.getElementById('email').value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '' || !emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'A valid email address is required.';
        valid = false;
    }

    // Validate Grade
    const grade = document.getElementById('grade').value;
    if (grade === '') {
        document.getElementById('gradeError').textContent = 'Grade is required.';
        valid = false;
    }

    // Validate Subjects
    const subjectRadioButtons = document.getElementsByName('subject');
    const subjectChecked = Array.from(subjectRadioButtons).some(radio => radio.checked);
    if (!subjectChecked) {
        document.getElementById('subjectError').textContent='At least one subject must be selected.';
        valid=false;
    }

    if (valid) {
        alert('Form submitted successfully!');
        this.submit();
    }
});