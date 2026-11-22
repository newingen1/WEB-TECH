

var form = document.getElementById("donorForm");


form.addEventListener("submit", function(event) {

    
    event.preventDefault();


    var name = document.getElementById("fullname").value.trim();
    var email = document.getElementById("email").value.trim();
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var phone = document.getElementById("phone").value.trim();
    var address = document.getElementById("address").value.trim();
    var bookTitle = document.getElementById("booktitle").value.trim();
    var category = document.getElementById("category").value;


    var isValid = true;

 
    document.getElementById("nameError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("passwordError").innerHTML = "";
    document.getElementById("confirmError").innerHTML = "";
    document.getElementById("phoneError").innerHTML = "";
    document.getElementById("addressError").innerHTML = "";
    document.getElementById("bookError").innerHTML = "";
    document.getElementById("categoryError").innerHTML = "";
    document.getElementById("conditionError").innerHTML = "";
    document.getElementById("purposeError").innerHTML = "";
    document.getElementById("successMessage").innerHTML = "";


    var namePattern = /^[A-Za-z ]+$/;

    if (name === "") {
        document.getElementById("nameError").innerHTML =
            "Name cannot be empty";
        isValid = false;
    }
    else if (!namePattern.test(name)) {
        document.getElementById("nameError").innerHTML =
            "Name should contain only letters";
        isValid = false;
    }


    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
        document.getElementById("emailError").innerHTML =
            "Email cannot be empty";
        isValid = false;
    }
    else if (!emailPattern.test(email)) {
        document.getElementById("emailError").innerHTML =
            "Enter a valid email address";
        isValid = false;
    }


    var passwordPattern = /^(?=.*[0-9]).{6,}$/;

    if (password === "") {
        document.getElementById("passwordError").innerHTML =
            "Password cannot be empty";
        isValid = false;
    }
    else if (!passwordPattern.test(password)) {
        document.getElementById("passwordError").innerHTML =
            "Password must contain at least 6 characters and one number";
        isValid = false;
    }


    if (confirmPassword === "") {
        document.getElementById("confirmError").innerHTML =
            "Please confirm your password";
        isValid = false;
    }
    else if (password !== confirmPassword) {
        document.getElementById("confirmError").innerHTML =
            "Passwords do not match";
        isValid = false;
    }


    var phonePattern = /^[0-9]{11}$/;

    if (phone === "") {
        document.getElementById("phoneError").innerHTML =
            "Phone number cannot be empty";
        isValid = false;
    }
    else if (!phonePattern.test(phone)) {
        document.getElementById("phoneError").innerHTML =
            "Enter an 11-digit phone number";
        isValid = false;
    }


    if (address === "") {
        document.getElementById("addressError").innerHTML =
            "Address cannot be empty";
        isValid = false;
    }


    if (bookTitle === "") {
        document.getElementById("bookError").innerHTML =
            "Book title cannot be empty";
        isValid = false;
    }


    if (category === "") {
        document.getElementById("categoryError").innerHTML =
            "Please select a book category";
        isValid = false;
    }


    var condition = document.querySelector(
        'input[name="condition"]:checked'
    );

    if (condition === null) {
        document.getElementById("conditionError").innerHTML =
            "Please select book condition";
        isValid = false;
    }


    var purpose = document.querySelector(
        'input[name="purpose"]:checked'
    );

    if (purpose === null) {
        document.getElementById("purposeError").innerHTML =
            "Please select at least one purpose";
        isValid = false;
    }

    if (isValid === true) {
        document.getElementById("successMessage").innerHTML =
            "Registration Successful!";
            
        form.reset();
    }

});
