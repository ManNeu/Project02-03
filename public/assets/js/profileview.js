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

  // Our initial protections array
  // var protections = [];

  // Getting protections from database when page loads
  getProtections();

    // This function grabs protections from the database and updates the view
    function getProtections() {
      $.get("/api/profile", function(data) {
        // protections = data;
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



  // This function deletes a protection when the user clicks the delete button
  // function deleteProtection(event) {
  //   event.stopPropagation();
  //   var id = $(this).data("id");
  //   $.ajax({
  //     method: "DELETE",
  //     url: "/api/protections/" + id
  //   }).then(getProtections);
  // }

//   // This function handles showing the input box for a user to edit a protection
//   function editProtection() {
//     var currentProtection = $(this).data("protection");
//     $(this).children().hide();
//     $(this).children("input.edit").val(currentProtection.text);
//     $(this).children("input.edit").show();
//     $(this).children("input.edit").focus();
//   }

//   // Toggles complete status
//   function toggleComplete(event) {
//     event.stopPropagation();
//     var protection = $(this).parent().data("protection");
//     protection.complete = !protection.complete;
//     updateProtection(protection);
//   }

//   // This function starts updating a protection in the database if a user hits the "Enter Key"
//   // While in edit mode
//   function finishEdit(event) {
//     var updatedProtection = $(this).data("protection");
//     if (event.which === 13) {
//       updatedProtection.text = $(this).children("input").val().trim();
//       $(this).blur();
//       updateProtection(updatedProtection);
//     }
//   }

//   // This function updates a protection in our database
//   function updateProtection(protection) {
//     $.ajax({
//       method: "PUT",
//       url: "/api/protections",
//       data: protection
//     }).then(getProtection);
//   }

//   // This function is called whenever a protection item is in edit mode and loses focus
//   // This cancels any edits being made
//   function cancelEdit() {
//     var currentProtection = $(this).data("protection");
//     if (currentProtection) {
//       $(this).children().hide();
//       $(this).children("input.edit").val(currentProtection.text);
//       $(this).children("span").show();
//       $(this).children("button").show();
//     }
//   }

//   // This function constructs a protection-item row
//   function createNewRow(protection) {
//     var $newInputRow = $(
//       [
//         "<li class='list-group-item protection-item'>",
//         "<span>",
//         protection.text,
//         "</span>",
//         "<input type='text' class='edit' style='display: none;'>",
//         "<button class='delete btn btn-danger'>x</button>",
//         "<button class='complete btn btn-primary'>✓</button>",
//         "</li>"
//       ].join("")
//     );

//     $newInputRow.find("button.delete").data("id", protection.id);
//     $newInputRow.find("input.edit").css("display", "none");
//     $newInputRow.data("protection", protection);
//     if (protection.complete) {
//       $newInputRow.find("span").css("text-decoration", "line-through");
//     }
//     return $newInputRow;
//   }

//   // This function inserts a new protection into our database and then updates the view
//   function insertProtection(event) {
//     event.preventDefault();
//     var protection = {
//       text: $newItemInput.val().trim(),
//       complete: false
//     };

//     $.post("/api/protections", protection, getProtection);
//     $newItemInput.val("");
//   }
});
