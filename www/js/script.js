//This is the response variable to store the json response object 
var response = [];
var chapterId = [];
var members = [];
var events = [];

var chapters = JSON.parse(localStorage.getItem("chapters"));
var token = JSON.parse(localStorage.getItem("token"));
if(typeof localStorage.getItem("token") !== "string"){
  var tokenName = "";
  var tokenEmail = "";
}else{
    var tokenName = token[0].name;
    var tokenEmail = token[0].email
}

$(".welcome-name").append(tokenName);
$(".user-view .name").append(tokenName);
$(".user-view .email").append(tokenEmail);

// Initialize collapse button
$(".button-collapse").sideNav();

//When a user clicks the send button this code grabs the information
//submits to the server and return a json object via ajax request

$("a#logout").click(function(){
<<<<<<< HEAD
    localStorage.clear();
=======
    localStorage.removeItem("token");
    localStorage.removeItem("chapters");
    localStorage.removeItem("eventId");
    
>>>>>>> 13d23635c578c4421f33a24bff0d2dc32aeacf08
    window.location = "index.html";
});

$("#send").click(function () {
    //assign variables to  email and password values
    var email = $("#email").val();
    var password = $("#password").val();
        //Check for empty fields
    if ((email.length || password.length) == 0) {
        alert("Fields cannot be empty");
    } else {
        //store fields in object for use in the ajax request
        var data = {
            "email": email,
            "password": password
        };
        // Ajax start global function
        $(document).ajaxStart(function () {
            $("#send").addClass("loading");
            console.log("Ajax Request is Starting");
        });
        // Ajax stop global function
        $(document).ajaxStop(function () {
            $("#send").removeClass("loading");
            console.log("Ajax Request has ended");
        });
        // Ajax request
        $.ajax({
            type: "POST",
            contentType: 'application/json; charset=UTF-8',
<<<<<<< HEAD
            url: "http://ogbako.relserve.com/api/v1/login",
=======
            url: "http://192.168.0.43/api/v1/login",
>>>>>>> 13d23635c578c4421f33a24bff0d2dc32aeacf08
            data: JSON.stringify(data),
            processData: true,
            dataType: "json"
        }).done(successFn).fail(errorFn);
        //This function check the response from the server and looks 
        //for a token field, if token id found it stores the token in
        //local storage else it returns an error.      
        function successFn(result) {
            var resultString = JSON.stringify(result)
            if (resultString.indexOf("token") >= 0) {
                for (var elm in result) {
                    response.push(result[elm]);
                }
                alert("You have successfully been logged in");
                localStorage.setItem('token', JSON.stringify(response[0]));
                localStorage.setItem('chapters', JSON.stringify(response[1]));
                window.location = "chapter.html"
            } else {
                alert("Username or Password Incorrect");
            }
        };
        //if there is an error in the ajax request display the error
        function errorFn(xhr, status, strErr) {
            alert(strErr + status + "Something went wrong ");
        };
    };
});


