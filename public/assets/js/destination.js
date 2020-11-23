var userChoiceCountry;

window.onload = function () {
  var userChoiceCountry = localStorage.getItem("country");
  $(".contInfo h2").append(userChoiceCountry);
};
