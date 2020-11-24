$.get("api/user_data").then((data) => {
  console.log("user", data);
  localStorage.setItem("user", JSON.stringify(data));
});
