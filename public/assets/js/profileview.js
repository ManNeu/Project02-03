$(document).ready(function() {
  // // Getting a reference to the input field where user adds a new protection
  // var $newItemInput = $("input.new-item");
  // // Our new protections will go inside the protectionContainer
  var $protectionContainer = $(".protection-container");
  // // Adding event listeners for deleting, editing, and adding protections
  // $(document).on("click", "button.delete", deleteProtection);
  // $(document).on("click", "button.complete", toggleComplete);
  // $(document).on("click", ".protection-item", editProtection);
  // $(document).on("keyup", ".protection-item", finishEdit);
  // $(document).on("blur", ".protection-item", cancelEdit);
  // $(document).on("submit", "#protection-form", insertProtection);

  // Getting protections from database when page loads
  getProtections();

    // This function grabs protections from the database and updates the view
    function getProtections() {
      $.get("/api/profile", function(data) {
        // protections = data;
        console.log(data);
        initializeRows(data);
      });
    }

  // This function resets the protections displayed with new protections from the database
  function initializeRows(protectionsRows) {
    $protectionContainer.empty();
    var rowsToAdd = [];
    for (var i = 0; i < protectionsRows.length; i++) {
      rowsToAdd.push(createNewRow(protectionsRows[i]));
    }
    $protectionContainer.prepend(rowsToAdd);
  }

//   var str = '<ul>'
// data.forEach(function(slide) {
//   str += '<li>'+ slide + '</li>';
// }); 
// str += '</ul>';

//   // This function constructs a protection-item row
  function createNewRow(protection) {
    console.log(protection  );
    var $newInputRow = $(
      [
        "<li class='list-group-item protection-item'>",
        "<span>",
        protection.disease_id,
        "</span>",
        "<input type='text' class='edit' style='display: none;'>",
        // "<button class='delete btn btn-danger'>x</button>",
        // "<button class='complete btn btn-primary'>✓</button>",
        "</li>"
      ].join("")
    );

    $newInputRow.find("button.delete").data("id", protection.id);
    $newInputRow.find("input.edit").css("display", "none");
    $newInputRow.data("protection", protection);
    if (protection.complete) {
      $newInputRow.find("span").css("text-decoration", "line-through");
    }
    return $newInputRow;
  }

  // This function inserts a new protection into our database and then updates the view
  function insertProtection(event) {
    event.preventDefault();
    var protection = {
      text: $newItemInput.val().trim(),
      complete: false
    };

    $.post("/api/profile", protection, getProtection);
    $newItemInput.val("");
  }
});
