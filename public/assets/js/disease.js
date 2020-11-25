var userDiseaseChoice;

window.onload = function () {
  var userDiseaseChoice = localStorage.getItem("disease");
  $(".diseaseName").text(userDiseaseChoice);
  $(".diseaseDescription").text("now loading...");

  if (userDiseaseChoice === "Covid-19") {
    var userDiseaseChoice = "Coronavirus_disease_2019";
  }

  if (userDiseaseChoice === "Measels") {
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

  if (userDiseaseChoice === "Pertussis") {
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

  console.log(userDiseaseChoice);

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

function getDiseaseId(userDiseaseChoice, diseaseId) {
  $.post("api/getDiseaseId", {
    disease: userDiseaseChoice,
    diseaseId: diseaseId,
  })
    .then((data) => {
      console.log("console logging data:" + data);
      localStorage.setItem("disease", JSON.stringify(data));
    })
    .catch((err) => {
      console.log(err);
    });
}

function addToCart() {
  var userIdNumber = JSON.parse(localStorage.getItem("user")).id;
  var diseaseIdNumber = JSON.parse(localStorage.getItem("disease")).id;
  console.log(userIdNumber);
  console.log(diseaseIdNumber);
  $.post("/api/list", {
    person_id: userIdNumber,
    disease_id: diseaseIdNumber,
    protected: 0,
  });
}

$(".addToCart").on("click", function () {
  getDiseaseId();
  addToCart();
});
