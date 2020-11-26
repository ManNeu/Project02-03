var $recomendationAllContainer = $(".recomendation-all-container");


var userChoiceCountry;

window.onload = function () {
  var userChoiceCountry = localStorage.getItem("country");
  $(".contInfo h2").append(userChoiceCountry);
};


getRecomendationsAll();
// getRecomendationsMost();
// getRecomendationsSome();

function getRecomendationsAll() {
  var userChoiceCountry = localStorage.getItem("country");
  $.get(`/api/recomendation/${userChoiceCountry}`, function(data) {
    console.log(data);
    initializeRowsAll(data);
  });
}

function initializeRowsAll(recomendationsAllRows) {
  $recomendationAllContainer.empty();
  var rowsAllToAdd = [];
  for (var i = 0; i < recomendationsAllRows.length; i++) {
    rowsAllToAdd.push(createAllRow(recomendationsAllRows[i]));
  }
  $recomendationAllContainer.prepend(rowsAllToAdd);
}

//   // This function constructs a protection-item row
function createAllRow(recomendationAll) {
  console.log(recomendationAll);
  var $newInputRow = $(
    [
      "<li class='list-group-item protection-item'>",
      "<span>",
      // protection.disease_id, 
      recomendationAll.Disease.disease,
      " ",
      "<button class='complete btn btn-primary'> vaccinate </button>",
      "</span>",
      "<input type='text' class='edit' style='display: none;'>",
      "</li>"
    ].join("")
  );

  $newInputRow.find("button.delete").data("id", recomendationAll.id);
  $newInputRow.find("input.edit").css("display", "none");
  $newInputRow.data("protection", recomendationAll);
  if (recomendationAll.complete) {
    $newInputRow.find("span").css("text-decoration", "line-through");
  }
  return $newInputRow;
}
