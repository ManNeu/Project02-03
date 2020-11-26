var userDiseaseChoice;
var diseaseId;

window.onload = function () {
  var userDiseaseChoice = localStorage.getItem("disease");
  $(".diseaseName").text(userDiseaseChoice);
  $(".diseaseDescription").text("now loading...");

  if (userDiseaseChoice === "Covid-19") {
    var userDiseaseChoice = "Coronavirus_disease_2019";
  }

  if (userDiseaseChoice === "Measels" || userDiseaseChoice === "Measels ") {
    var userDiseaseChoice = "Measles";
  }

  if (userDiseaseChoice === "Typhoid") {
    var userDiseaseChoice = "Typhoid_fever";
  }

  if (userDiseaseChoice === "Yellow Fever") {
    var userDiseaseChoice = "Yellow_fever";
  }

  if (userDiseaseChoice === "Japanese Encephalitis") {
    var userDiseaseChoice = "Japanese_encephalitis";
  }

  if (userDiseaseChoice === "Tetinus") {
    var userDiseaseChoice = "tetanus";
  }

  if (userDiseaseChoice === "Pertussis" || userDiseaseChoice === 'Pertussis ') {
    var userDiseaseChoice = "Whooping_cough";
  }

  if (userDiseaseChoice === "Chickenpox (Varicella)") {
    var userDiseaseChoice = "Chickenpox";
  }

  if (userDiseaseChoice === "HPV (Human Papillomavirus)") {
    var userDiseaseChoice = "Human_papillomavirus_infection";
  }

  if (userDiseaseChoice === "Shingles (Herpes Zoster)") {
    var userDiseaseChoice = "Shingles";
  }

  $.ajax({
    url: "https://en.wikipedia.org/w/api.php",
    data: {
      format: "json",
      action: "parse",
      page: userDiseaseChoice,
      prop: "text",
      section: 0,
    },
    dataType: "jsonp",
    headers: {
      "Api-User-Agent":
        "MyCoolTool/1.1 (http://example.com/MyCoolTool/; MyCoolTool@example.com) BasedOnSuperLib/1.4",
    },
    success: function (data) {
      console.log(data);

      var markup = data.parse.text["*"];
      var i = $("<div></div>").html(markup);
      $(".diseaseDescription").html(i);
    },
  });
};


$(".addToCart").on("click", function () {
  // function addToCart() {
    var userIdNumber = JSON.parse(localStorage.getItem("user")).id;
    console.log(userIdNumber);

    console.log(diseaseId)
    // $.post("/api/list", {
    //   person_id: userIdNumber,
    //   disease_id: diseaseId,
    //   protected: 0,
    // }),
  // addToCart();
  //}
});
