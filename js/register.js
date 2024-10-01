// ^ get elements
const nameInputSign = document.getElementById("userName");
const emailInputSign = document.getElementById("userEmail");
const passwordInputSign = document.getElementById("userPass");
const signupBtn = document.getElementById("signupBtn");
const enterData = document.getElementById("enterDataMessage");

// ^ variables

// ^ regex
let nameRegex = /^[A-Z][a-zA-Z0-9._\- ]{2,25}$/;
let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let passwordRegex = /^[A-Za-z0-9]{8,}$/;

// ^ functions
function clearInputs() {
    nameInputSign.value = "";
    emailInputSign.value = "";
    passwordInputSign.value = "";
}
function inputIsInvalid(input) {
    input.nextElementSibling.style.visibility = "visible";
    input.classList.add("input-is-invalid");
}
function validateInput(input, regex) {
    if (input.value) {
        if (!regex.test(input.value)) {
            inputIsInvalid(input);
            return false;
        } else {
            return true;
        }
    }
}
function validateAll() {
    if (
        validateInput(nameInputSign, nameRegex) &&
        validateInput(emailInputSign, emailRegex) &&
        validateInput(passwordInputSign, passwordRegex)
    ) {
        return true;
    } else {
        return false;
    }
}
function clearAllValidationMessages(input) {
    input.nextElementSibling.style.visibility = "hidden";
    input.classList.remove("input-is-invalid");
    enterData.style.display = "none";
}

function register() {
    if (validateAll() && !emailIsAlreadyExist(emailInputSign)) {
        const user = {
            name: nameInputSign.value,
            email: emailInputSign.value,
            password: passwordInputSign.value,
        };
        users.push(user);
        localStorage.setItem("users", JSON.stringify(users));
        allInputsIsValid();
        setTimeout(() => {
            window.location = "../index.html";
        }, 2000);
    } else {
        enterData.style.display = "block";
    }
}

// ^ events
signupBtn.addEventListener("click", register);
nameInputSign.addEventListener("blur", function () {
    validateInput(this, nameRegex);
});
emailInputSign.addEventListener("blur", function () {
    if (emailIsAlreadyExist(emailInputSign)) {
        this.nextElementSibling.children[0].style.display = "block";
        this.nextElementSibling.children[1].style.display = "none";
        inputIsInvalid(this);
    } else {
        this.nextElementSibling.children[0].style.display = "none";
        this.nextElementSibling.children[1].style.display = "block";
        validateInput(this, emailRegex);
    }
});
passwordInputSign.addEventListener("blur", function () {
    validateInput(this, passwordRegex);
});
allInputs.forEach((input) => {
    input.addEventListener("focus", function () {
        clearAllValidationMessages(this);
    });
});
emailInputSign.addEventListener("input", function () {
    console.log(emailIsAlreadyExist(emailInputSign));
});
