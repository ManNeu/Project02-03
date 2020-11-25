$(document).ready(() => {
  const signUpForm = $("form.signup");
  const fnameInput = $("input#fname-input");
  const emailInput = $("input#email-input");
  const passwordInput = $("input#password-input");

  signUpForm.on("submit", (event) => {
    event.preventDefault();
    const userData = {
      fname: fnameInput.val().trim(),
      email: emailInput.val().trim(),
      password: passwordInput.val().trim(),
    };

    if (!userData.fname || !userData.email || !userData.password) {
      return;
    }
    userSignUp(userData.fname, userData.email, userData.password);
    fnameInput.val("");
    emailInput.val("");
    passwordInput.val("");
  });

  function userSignUp(fname, email, password) {
    $.post("/api/signup", {
      fname: fname,
      email: email,
      password: password,
    })
      .then((data) => {
        console.log(data);
        window.location.replace("/index")
      })
      .catch(loginErr);
  }

  function loginErr(err) {
    $("#alert .msg").text("Error: Please enter a valid input", err.responseJSON);
    $("#alert").fadeIn(500);
  }
});
