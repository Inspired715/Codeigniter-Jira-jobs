"use strict";

$(document).ready(function () {
    $("#login_form").submit(function(event){
        event.preventDefault();
          $.ajax({
              url: BASE_URL + "auth",
              method: "POST",
              data: $('#login_form').serialize(),
              success: function (response) {
                if(response == 200){
                  location.href = BASE_URL + 'users';
                }
                else
                  toastr.error("Invalid user", "Bottom Left", {
                    positionClass: "toast-bottom-left",
                    timeOut: 5e3,
                    closeButton: !0,
                    debug: !1,
                    newestOnTop: !0,
                    progressBar: !0,
                    preventDuplicates: !0,
                    onclick: null,
                    showDuration: "300",
                    hideDuration: "1000",
                    extendedTimeOut: "1000",
                    showEasing: "swing",
                    hideEasing: "linear",
                    showMethod: "fadeIn",
                    hideMethod: "fadeOut",
                    tapToDismiss: !1
                })
              }
          });
      });  
});