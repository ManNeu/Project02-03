var $recomendationAllContainer = $(".recomendation-all-container");
var $recomendationMostContainer = $(".recomendation-most-container");
var $recomendationSomeContainer = $(".recomendation-some-container");
var userChoiceCountry;

window.onload = function () {
  var userChoiceCountry = localStorage.getItem("country");
  $(".contInfo h2").append(userChoiceCountry);
};

// RECOMMENDATIONS FOR ALL
function getRecomendationsAll() {
  var userChoiceCountry = localStorage.getItem("country");
  $.get(`/api/recomendationAll/${userChoiceCountry}`, function (data) {
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

 if (rowsAllToAdd.length === 0){
  $recomendationAllContainer.append("<p class='whenNoVax'>No recommendations, but make sure your routine vaccinations are up to date</p>")
  } else {
    $recomendationAllContainer.prepend(rowsAllToAdd)
  }
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
      "</br>",
      "<button class='complete btn btn-primary addToCart' id =" + recomendationAll.Disease.id + "> Add to Cart </button>",
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

// RECOMMENDATIONS FOR MOST
function getRecomendationsMost() {
  var userChoiceCountry = localStorage.getItem("country");
  $.get(`/api/recomendationMost/${userChoiceCountry}`, function (data) {
    console.log(data);
    initializeRowsMost(data);
  });
}

function initializeRowsMost(recomendationsMostRows) {
  $recomendationMostContainer.empty();
  var rowsMostToAdd = [];
  for (var i = 0; i < recomendationsMostRows.length; i++) {
    rowsMostToAdd.push(createMostRow(recomendationsMostRows[i]));
  }
  if (rowsMostToAdd.length === 0){
    $recomendationMostContainer.append("<p class='whenNoVax'>No recommendations, but make sure your routine vaccinations are up to date</p>")
  } else {
  $recomendationMostContainer.prepend(rowsMostToAdd);
  }
}

//   // This function constructs a protection-item row
function createMostRow(recomendationMost) {
  console.log(recomendationMost);
  var $newInputRow = $(
    [
      "<li class='list-group-item protection-item'>",
      "<span>",
      // protection.disease_id, 
      recomendationMost.Disease.disease,
      "</br>",
      "<button class='complete btn btn-primary addToCart' id =" + recomendationMost.Disease.id + "> Add to Cart </button>",
      "</span>",
      "<input type='text' class='edit' style='display: none;'>",
      "</li>"
    ].join("")
  );

  $newInputRow.find("button.delete").data("id", recomendationMost.id);
  $newInputRow.find("input.edit").css("display", "none");
  $newInputRow.data("protection", recomendationMost);
  if (recomendationMost.complete) {
    $newInputRow.find("span").css("text-decoration", "line-through");
  }
  return $newInputRow;
}

// RECOMMENDATIONS FOR SOME
function getRecomendationsSome() {
  var userChoiceCountry = localStorage.getItem("country");
  $.get(`/api/recomendationSome/${userChoiceCountry}`, function (data) {
    console.log(data);
    initializeRowsSome(data);
    
  });
}
function initializeRowsSome(recomendationsSomeRows) {
  $recomendationSomeContainer.empty();
  var rowsSomeToAdd = [];
  for (var i = 0; i < recomendationsSomeRows.length; i++) {
    rowsSomeToAdd.push(createSomeRow(recomendationsSomeRows[i]));
  }
  if (rowsSomeToAdd.length === 0 ){
    $recomendationSomeContainer.append("<p class='whenNoVax'>No recommendations, but consult your doctor if you have any concerns</p>")
  } else {
  $recomendationSomeContainer.prepend(rowsSomeToAdd);
  }
}
//   // This function constructs a protection-item row
function createSomeRow(recomendationSome) {
  console.log(recomendationSome);
  var $newInputRow = $(
    [
      "<li class='list-group-item protection-item'>",
      "<span>",
      // protection.disease_id, 
      recomendationSome.Disease.disease,
      "</br>",
      "<button class='complete btn btn-primary addToCart' id =" + recomendationSome.Disease.id + "> Add to Cart </button>",
      "</span>",
      "<input type='text' class='edit' style='display: none;'>",
      "</li>"
    ].join("")
  );
  $newInputRow.find("button.delete").data("id", recomendationSome.id);
  $newInputRow.find("input.edit").css("display", "none");
  $newInputRow.data("protection", recomendationSome);
 
  if (recomendationSome.complete) {
    $newInputRow.find("span").css("text-decoration", "line-through");
  }  
  return $newInputRow;
}



getRecomendationsAll();
getRecomendationsMost();
getRecomendationsSome();

$(document).on("click", ".addToCart", function (event){
  var person_id = parseInt(JSON.parse(localStorage.getItem("user")).id);
   var disease_id = $(event.target).attr("id");
 
   console.log(person_id, disease_id)
 
   var newDisease = {
     person_id: person_id,
     disease_id:disease_id,
     protected: 0,
   };
 
   console.log(newDisease);
 
   $.post("/api/profile", newDisease);
 
   $(this).replaceWith('<span class="added">Successfully Added!</span>')
  //  event.target.innerHTML = '<span class="added">Successfully Added!</span>';
 })