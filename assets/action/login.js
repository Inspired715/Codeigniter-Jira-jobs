"use strict";

$(document).ready(function () {
    $("#login_form").submit(function(event){
        event.preventDefault();
          $.ajax({
              url: BASE_URL + "auth",
              method: "POST",
              data: $('#login_form').serialize(),
              success: function (response) {
                location.href = BASE_URL + "users";
              }
          });
      });  
});