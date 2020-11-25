$(document).ready(function() {
  // // Getting a reference to the input field where user adds a new protection
  // var $newItemInput = $("input.new-item");
  // // Our new protections will go inside the protectionContainer
  var $protectionContainer = $(".protection-container");
  var $shoppingContainer = $(".shopping-container");

  // // Adding event listeners for deleting, editing, and adding protections
  // $(document).on("click", "button.delete", deleteProtection);
  // $(document).on("click", "button.complete", toggleComplete);
  // $(document).on("click", ".protection-item", editProtection);
  // $(document).on("keyup", ".protection-item", finishEdit);
  // $(document).on("blur", ".protection-item", cancelEdit);
  // $(document).on("submit", "#protection-form", insertProtection);
  // $(document).on("submit", "#author-form", handleAuthorFormSubmit);
  $(document).on("click", ".delete-profile", deleteShoppingItem);

  // Getting protections from database when page loads
  getProtections();
  getShoppingCart();

    // This function grabs protections from the database and updates the view
    function getProtections() {
      $.get("/api/protection", function(data) {
        console.log(data);
        initializeRows(data);
      });
    }

    function getShoppingCart() {
      $.get("/api/profile", function(data) {
        console.log(data);
        initializeCart(data);
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

//   // This function constructs a protection-item row
  function createNewRow(protection) {
    console.log(protection);
    var $newInputRow = $(
      [
        "<li class='list-group-item protection-item'>",
        "<span>",
        // protection.disease_id, 
        protection.Disease.disease,
        ", vaccinated on " + (protection.vaxdate),
        "</span>",
        "<input type='text' class='edit' style='display: none;'>",
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


    // // This function grabs protections from the database and updates the view
    // function getProtections() {
    //   $.get("/api/profile", function(data) {
    //     // protections = data;
    //     console.log(data);
    //     initializeRows(data);
    //     initializeCart(data);
    //   });
    // }


    
  // This function resets the protections displayed with new protections from the database
  function initializeCart(shoppingRows) {
    $shoppingContainer.empty();
    var cartsToAdd = [];
    for (var i = 0; i < shoppingRows.length; i++) {
      cartsToAdd.push(createNewCart(shoppingRows[i]));
    }
    $shoppingContainer.prepend(cartsToAdd);
  }

//   // This function constructs a shoppping-item row
  function createNewCart(shopping) {
    console.log(shopping);
    var $newInputCart = $(
      [
        "<li class='list-group-item shoppping-item'>",
        "<button class='complete btn btn-primary'> vaccinate </button>",
        "<button class='delete-profile btn btn-danger'> delete </button>",
        " ",
        "<span>",
        shopping.Disease.disease,
        "</span>",
        "</li>"
      ].join("")
    );

    $newInputCart.find("button.delete").data("id", shopping.id);
    $newInputCart.find("input.edit").css("display", "none");
    $newInputCart.data("shopping", shopping);
    if (shopping.complete) {
      $newInputCart.find("span").css("text-decoration", "line-through");
    }
    return $newInputCart;
  }
  // // This function inserts a new protection into our database and then updates the view
  // function insertProtection(event) {
  //   event.preventDefault();
  //   var protection = {
  //     text: $newItemInput.val().trim(),
  //     complete: false
  //   };

  //   $.post("/api/profile", protection, getProtection);
  //   $newItemInput.val("");
  // }

    // // Function for handling what happens when the delete button is pressed
    // function handleDeleteButtonPress() {
    //   var listItemData = $(this).parent("li").data("disease");
    //   var id = listItemData.id;
    //   $.ajax({
    //     method: "DELETE",
    //     url: "/api/profile/" + id
    //   })
    //     // .then(getAuthors);
    // }


    function deleteShoppingItem(id) {
      $.ajax({
        method: "DELETE",
        url: "/api/profiles/" + id
      })
        // .then(function() {
        //   getProfiles(profileCategorySelect.val());
        // });
    }


});
