if (localStorage.getItem("username")) {
    location = "../html/home.html";
}
// ^ get elements
const emailInputLog = document.getElementById("userEmail");
const passwordInputLog = document.getElementById("userPass");
const loginBtn = document.getElementById("loginBtn");

// ^ variables
let currentUserIndex;
// ^ functions
function clearInput() {
    emailInputLog.value = "";
    passwordInputLog.value = "";
}
function checkPassword() {
    if (checkEmailIsExist()) {
        try {
            if (users[currentUserIndex]?.password === passwordInputLog.value) {
                localStorage.setItem("username", users[currentUserIndex].name);
                return true;
            } else {
                passwordInputLog.nextElementSibling.children[0].style.display =
                    "block";
                passwordInputLog.nextElementSibling.children[1].style.display =
                    "none";
                passwordInputLog.nextElementSibling.style.visibility =
                    "visible";
                return false;
            }
        } catch (error) {
            console.log(error);
            // ? Code to handle the error
            // ! when usage .? operator, we don't need to try and catch here in this code
        }
    } else {
        passwordInputLog.nextElementSibling.children[0].style.display = "none";
        passwordInputLog.nextElementSibling.children[1].style.display = "block";
        passwordInputLog.nextElementSibling.style.visibility = "visible";
    }
}
function checkEmailIsExist() {
    let isExist = false;
    users.forEach((element, index) => {
        if (emailInputLog.value.toLowerCase() === element.email.toLowerCase()) {
            isExist = true;
            currentUserIndex = index;
            emailInputLog.nextElementSibling.style.visibility = "hidden";
        }
    });
    if (!isExist) {
        emailInputLog.nextElementSibling.style.visibility = "visible";
        passwordInputLog.nextElementSibling.style.visibility = "hidden";
    }
    return isExist;
}
function login() {
    if (checkEmailIsExist() && checkPassword()) {
        allInputsIsValid();
        setTimeout(() => {
            location = "../html/home.html";
        }, 2000);
    }
}

loginBtn.addEventListener("click", login);
emailInputLog.addEventListener("focus", function () {
    this.nextElementSibling.style.visibility = "hidden";
});
passwordInputLog.addEventListener("focus", function () {
    this.nextElementSibling.style.visibility = "hidden";
});
emailInputLog.addEventListener("blur", function () {
    if (this.value) {
        checkEmailIsExist();
    }
});
passwordInputLog.addEventListener("blur", function () {
    if (this.value) {
        checkPassword();
    }
});
