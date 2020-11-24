// var $diseaseContainer = $(".disease-container");
// getDiseases();

//     // This function grabs diseases from the database and updates the view
//     function getDiseases() {
//       $.get("/api/disease", function(data) {
//         console.log(data);
//         initializeRows(data);
//       });
//     }

//     // This function resets the diseases displayed with new diseases from the database
//   function initializeRows(diseasesRows) {
//     $diseaseContainer.empty();
//     var rowsToAdd = [];
//     for (var i = 0; i < diseasesRows.length; i++) {
//       rowsToAdd.push(createNewRow(diseasesRows[i]));
//     }
//     $diseaseContainer.prepend(rowsToAdd);
//   }

// //   // This function constructs a disease-item row
//   function createNewRow(disease) {
//     console.log(disease);
//     var $newInputRow = $(
//       [
//         "<li class='list-group-item disease-item'>",
//         "<span>",
//         // disease.disease_id, 
//         disease.Disease.disease,
//         "</span>",
//         "<input type='text' class='edit' style='display: none;'>",
//         "</li>"
//       ].join("")
//     );

//     $newInputRow.find("button.delete").data("id", disease.id);
//     $newInputRow.find("input.edit").css("display", "none");
//     $newInputRow.data("disease", disease);
//     if (disease.complete) {
//       $newInputRow.find("span").css("text-decoration", "line-through");
//     }
//     return $newInputRow;
//   }


  // -----------------------------------------------------


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
  for (i = 0; i < diseases.length; i++) {
    var diseaseId = diseases[i][0].replace(/\s/g, "");
    $(".diseaseSearch").append(
      '<a class="dropdown-item" href="/assets/diseases.html" id="' +
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
