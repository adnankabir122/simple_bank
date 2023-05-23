let loginBtn = document.getElementById("login-btn");

loginBtn.addEventListener("click", function () {

    let emailValue = document.getElementById("email-field").value
    let passValue = document.getElementById("password-field").value

    if (emailValue === "admin@gmail.com" && passValue === "admin") {
        window.location.href = "bank.html"
    } else {
        alert("Email Password Mistake")
    }
})
