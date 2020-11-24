$(document).ready(() => {
  const loginForm = $("form.login");
  const nameInput = $("input#name-input");
  const emailInput = $("input#email-input");
  const passwordInput = $("input#password-input");

  loginForm.on("submit", (event) => {
    event.preventDefault();
    const userData = {
      name: nameInput.val().trim(),
      email: emailInput.val().trim(),
      password: passwordInput.val().trim(),
    };

    if (!userData.name || !userData.email || !userData.password) {
      return;
    }

    userLogin(userData.name, userData.email, userData.password);
    nameInput.val("");
    emailInput.val("");
    passwordInput.val("");
  });

  function userLogin(name, email, password) {
    $.post("/api/login", {
      name: name,
      email: email,
      password: password,
    })
      .then((data) => {
        console.log("console logging data:" + data);
        window.location.replace("/index");
        localStorage.setItem("user", JSON.stringify(data));
      })
      .catch((err) => {
        console.log(err);
      });
  }
});
