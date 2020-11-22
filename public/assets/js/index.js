$(".countrySearch a").click(function () {
  $(".result").empty();

  var userChoice = $(this).attr("id");
  console.log(userChoice);

  for (i = 0; i < countries.length; i++) {
    if (countries[i].includes(userChoice)) {
      $(".result").append("<p>" + countries[i][0] + "</p>");
    }
  }
});

$(".diseaseSearchBtn").click(function () {
  for (i = 0; i < diseases.length; i++) {
    var diseaseId = diseases[i][0].replace(/\s/g, "");
    $(".diseaseSearch").append(
      '<a class="dropdown-item" href="./diseases.html"' +
        " id=" +
        diseaseId +
        '">' +
        diseases[i][0] +
        "</a>"
    );
  }

  $(".diseaseSearch a").on("click", function () {
    var userChoiceDisease = $(this).text();
    localStorage.setItem("disease", userChoiceDisease);
  });
});
