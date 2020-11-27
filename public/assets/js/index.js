var diseaseId;
var userChoiceCountry;
var userChoiceDisease;

function getDiseaseId(){
  $.get("/api/disease", function (data) {
    var userDiseaseChoice = localStorage.getItem("disease");
      for (i = 0; i < data.length; i++){
          if (data[i].disease === userDiseaseChoice) {
            var diseaseId = data[i].id
            localStorage.setItem("diseaseId", diseaseId);
          }
      }
})
}

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
        getDiseaseId();
        var userChoiceDisease = $(this).text();
        localStorage.setItem("disease", userChoiceDisease);
      });
    }
  });
}

$(".diseaseSearchBtn").click(function () {
  getDiseases();
});


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
