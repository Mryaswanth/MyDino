var passwordInput = document.getElementById("password");
var signInButton = document.getElementById("signInButton");
signInButton.addEventListener("click", function() {
    var enteredPassword = passwordInput.value;
    if (checkPassword(enteredPassword)) {
        window.location.href = 'form.html';
    } else {
        alert("Incorrect password. Please try again.");
    }
});

function checkPassword(password) {
    var correctPassword = "123";
    return password === correctPassword;
}
