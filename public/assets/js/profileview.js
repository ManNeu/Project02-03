$(document).ready(function () {
  var $protectionContainer = $(".protection-container");
  var $shoppingContainer = $(".shopping-container");
  // var postCategorySelect = $("#category");

  $(document).on("click", ".delete-profile", deleteShoppingItem);
  $(document).on("click", ".vax-profile", vaxShoppingItem);

  // Getting protections from database when page loads
  getProtections();
  getShoppingCart();

  // This function grabs protections from the database and updates the view
  function getProtections() {
    $.get("/api/protection", function (data) {
      console.log(data);
      initializeRows(data);
    });
  }

  function getShoppingCart() {
    $.get("/api/profile", function (data) {
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
        ", vaccinated on " + protection.vaxdate,
        "</span>",
        "<input type='text' class='edit' style='display: none;'>",
        "</li>",
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
    console.log(shopping.Disease.id);
    console.log(shopping.id);
    var $newInputCart = $(
      [
        "<li class='list-group-item shoppping-item'>",
        // "<button class='vaccinate-profile btn btn-primary id='" + parseInt(shopping.id) + "'> vaccinate </button>",
        "<button class='delete-profile btn btn-danger' id='" +
          parseInt(shopping.id) +
          "'> Delete </button>",
        "<button class='vax-profile btn btn-danger' id='" +
          parseInt(shopping.id) +
          "'> Vaccinate </button>",
        " ",
        "<span>",
        shopping.Disease.disease,
        // shopping.Disease.id,
        "</span>",
        "</li>",
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

  // VACCINATE - UPDATE
  // This function figures out which disease we want to vaccinate and then calls vaxItem
  function vaxShoppingItem(event) {
    var currentItem = $(event.currentTarget).prop("id");
    console.log(currentItem);
    console.log("one");
    vaxItem(currentItem);
  }

  function vaxItem(currentItem) {
    console.log(currentItem);
    console.log("two");
    $.ajax({
      method: "PUT",
      url: "/api/profiles/" + currentItem,
    }).then(function () {
      location.reload();
      console.log("four");
      // initializeCart(postCategorySelect.val());
    });
  }

  // DELETE
  // This function figures out which post we want to delete and then calls deleteItem
  function deleteShoppingItem(event) {
    var currentItem = $(event.currentTarget).prop("id");
    console.log(currentItem);
    deleteItem(currentItem);
  }

  function deleteItem(currentItem) {
    $.ajax({
      method: "DELETE",
      url: "/api/profiles/" + currentItem,
    }).then(function () {
      location.reload();
      // initializeCart(postCategorySelect.val());
    });
  }

  // // UPDATE  - DRAFT CODE - NOT YET READY

  // If we're updating a post run updatePost to update a post
  // Otherwise run submitPost to create a whole new post

  // // This function figures out which post we want to Update and then calls updateItem
  // function updateShoppingItem(event) {
  //   var currentItem = $(event.currentTarget)
  //     .prop("id");
  //     console.log(currentItem);
  //     updateItem(currentItem);
  // }

  // function updateItem(currentItem) {
  //   $.ajax({
  //     method: "UPDATE",
  //     data: newSleepState
  //     url: "/api/profiles/" + currentItem
  //   })
  //     .then(function() {
  //       location.reload();
  //       // initializeCart(postCategorySelect.val());
  //     });
  // }
  //
  //
  // // Send the PUT request.
  // $.ajax("/api/cats/" + id, {
  //   type: "PUT",
  //   data: newSleepState
  // }).then(
  //   function() {
  //     console.log("changed sleep to", newSleep);
  //     // Reload the page to get the updated list
  //     location.reload();
  //   }
  // );
});
