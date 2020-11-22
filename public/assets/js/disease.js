var userDiseaseChoice;

window.onload = function () {
  var userDiseaseChoice = localStorage.getItem("disease");
  $(".diseaseName").text(userDiseaseChoice);
  $(".diseaseDescription").text("now loading...");

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
