$(document).ready(() => {
    const signUpForm = $("form.signup");
    const nameInput = $("input#name-input");
    const emailInput = $("input#email-input");
    const passwordInput = $("input#password-input");

    signUpForm.on("submit", event => {
        event.preventDefault();
        const userData = {
            name: nameInput.val().trim(),
            email: emailInput.val().trim(),
            password: passwordInput.val().trim()
        };

        if (!userData.name || !userData.email || !userData.password) {
            return;
        }
        userSignUp(userData.name, userData.email, userData.password);
        nameInput.val("");
        emailInput.val("");
        passwordInput.val("");
    });

    function userSignUp(name, email, password) {
        $.post("/api/signup", {
            name: name,
            email: email,
            password: password
        }).then(() => {
            window.location.replace("")
        }).catch(loginErr);
    }

    function loginErr(err) {
        $("#alert .msg").text(err.responseJSON);
        $("#alert").fadeIn(500);
    }
});