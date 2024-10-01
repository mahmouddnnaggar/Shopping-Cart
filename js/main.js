// ^ get html element
const logo = document.getElementById("logo");
const allInputs = document.forms[0]?.querySelectorAll("input");
const form = document.getElementById("formWrapper");

// ^ variables
let users = JSON.parse(localStorage.getItem("users")) || [];

// ^ functions
function allInputsIsValid() {
    allInputs.forEach((input) => {
        input.classList.add("input-is-valid");
    });
    form.classList.add("valid");
}
function emailIsAlreadyExist(input) {
    let isExist = false;
    if (users.length >= 1) {
        users.forEach((user) => {
            if (user.email === input.value) {
                isExist = true;
                return true;
            } else {
                return false;
            }
        });
        return isExist;
    } else {
        return false;
    }
}

// ^ event listener
logo.addEventListener("click", () => {
    if (localStorage.getItem("username")) {
        window.location = "../html/home.html";
    }
});
