  // Initialize collapse button
var eze = "me";
      
      var response = [];
      
      $(".button-collapse").sideNav();
    
      $("#send").click(function () {
          //assign variables to  email and password values
          var email = $("#email").val();
          var password = $("#password").val()

          if ((email.length || password.length) == 0) {
              alert("Fields cannot be empty");
          } else {
              
              var data = {
                  "email": email,
                  "password": password
              };
              
              $(document).ajaxStart(function () {
                  $("#send").addClass("loading");
                  console.log("Ajax Request is Starting");
              });

              $(document).ajaxStop(function () {
                  $("#send").removeClass("loading");
                  console.log("Ajax Request has ended");
              });

              $.ajax({
                      type: "POST",
                      contentType: 'application/json; charset=UTF-8',
                      url: "http://192.168.0.43/api/v1/login",
                      data: JSON.stringify(data),
                      processData: true,
                      dataType: "json"
                  }).done(successFn).fail(errorFn);

              function successFn(result) {
                  var resultString = JSON.stringify(result)
                    if(resultString.indexOf("token") >=0){
                        response.push(result);
                        alert("You have successfully been logged in");
                        localStorage.setItem('token', response[0].User.token );
                        window.location = "chapter.html"
                    }else{
                       alert("Username or Password Incorrect");
                    }
              };

              function errorFn(xhr, status, strErr) {
                  alert("Something went wrong " + strErr);
              };
          };
      });

      //      $.ajax({
      //              type: "POST",
      //              contentType: 'application/json; charset=UTF-8',
      //              url: "http://192.168.0.43/api/v1/getMembers",
      //              data: JSON.stringify(data),
      //              processData: true
      //          }).done(successFn).fail(errorFn)
      //          .always(function (data, textStatus, jqXHR) {
      //              console.log("The request was completed");
      //          });
      //
      //      function successFn(result) {
      //          var response = JSON.parse(result);
      //          for (var i; i < response.length; i++){
      //              console.log(response.length);
      //              console.log(response[i]);
      //          }
      //          console.log(response);
      //      };
      //
      //      function errorFn(xhr, status, strErr) {
      //          console.log(xhr + strErr + " Something went wrong");
      //      };
