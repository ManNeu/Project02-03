$.get("api/user_data").then((data) => {
  console.log("user", data);
  localStorage.setItem("user", JSON.stringify(data));
  // Using the user name to display on the pages
  const userName = data.fname
  $(".welcome").text("Welcome " + userName);
  $(".username").text(userName);
});

