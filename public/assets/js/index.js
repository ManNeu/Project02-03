function getDiseases() {
  $.get("/api/disease", function (data) {
    for (i = 0; i < data.length; i++) {
      var diseaseId = data[i].disease.replace(/\s/g, "");
      $(".diseaseSearch").append(
        '<a class="dropdown-item" href="/assets/diseases.html" id="' +
          diseaseId +
          '">' +
          data[i].disease +
          "</a>"
      );
      $(".diseaseSearch a").on("click", function () {
        var userChoiceDisease = $(this).text();
        localStorage.setItem("disease", userChoiceDisease);
      });
    }
  });
}

$(".countrySearch a").click(function () {
  $(".result").empty();

  var userChoice = $(this).attr("id");
  console.log(userChoice);

  for (i = 0; i < countries.length; i++) {
    if (countries[i].includes(userChoice)) {
      $(".result").append(
        '<p><a href="/assets/destination.html">' + countries[i][0] + "</a></p>"
      );
    }
  }

  $(".result p a").click(function () {
    var userChoiceCountry = $(this).text();
    localStorage.setItem("country", userChoiceCountry);
  });
});

$(".diseaseSearchBtn").click(function () {
  getDiseases();
});
