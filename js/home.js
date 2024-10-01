// ^ get elements
const accountName = document.getElementById("accountName");
const logoutSpan = document.getElementById("logout");

// ^ variables

// ^ logic
accountName.innerHTML = localStorage.getItem("username") || "username";

// ^ functions
function logout() {
    setTimeout(() => {
        window.location = "../index.html";
    }, 1000);
    localStorage.removeItem("username");
}

// ^ event
logoutSpan.addEventListener("click", logout);
