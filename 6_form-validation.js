const validateForm = (event) => {
    event.preventDefault();

    // validate name
    const name = document.querySelector("#name");
    const nameError = document.querySelector(".name-div > .error")
    if (name.value === "") {
        nameError.style.display = "block"
        nameError.innerHTML = "Name is Required";
        return;
    }
    else if (name.value.length < 3) {
        nameError.style.display = "block"
        nameError.innerHTML = "Name must be greater than 2 characters"
        return
    }
    else {
        nameError.style.display = "none"
        name.style.border = "1.2px solid green"
    }

    // validate mobile
    const mobile = document.querySelector("#mobile");
    const mobileError = document.querySelector(".mobile-div > .error")
    if (mobile.value === "") {
        mobileError.style.display = "block"
        mobileError.innerHTML = "Mobile is Required";
        return;
    }
    else if (mobile.value.length !== 10) {
        mobileError.style.display = "block"
        mobileError.innerHTML = "Mobile must be 10 digits"
        return
    }
    else {
        mobileError.style.display = "none"
        mobile.style.border = "1.2px solid green"
    }


    // validate email
    const email = document.querySelector("#email");
    const emailError = document.querySelector(".email-div > .error")
    const regex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/
    const result = regex.test(email.value)
    if (email.value === "") {
        emailError.style.display = "block"
        emailError.innerHTML = "Email is Required";
        return;
    }
    else if (!result) {
        emailError.style.display = "block"
        emailError.innerHTML = "Email is Invalid"
        return
    }
    else {
        emailError.style.display = "none"
        email.style.border = "1.2px solid green"
    }

    //validate Feedback
    const feedback = document.querySelector("#feedback");
    const feedbackError = document.querySelector(".feedback-div > .error")
    if (feedback.value === "") {
        feedbackError.style.display = "block"
        feedbackError.innerHTML = "Feedback is Required";
        return;
    }
    else if (feedback.value.length < 10) {
        feedbackError.style.display = "block"
        feedbackError.innerHTML = "Feedback must be greater than 10 characters"
        return
    }
    else {
        feedbackError.style.display = "none"
        feedback.style.border = "1.2px solid green"
    }
    
    
    const errors = document.querySelectorAll("p.error")
    console.log(errors)
    errors.forEach((error) => {
        error.innerText = "";
        error.style.display = "none";
    })
}