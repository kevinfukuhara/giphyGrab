// VARIABLES
//--------------------------

// Initial array of movies
var gifs = ["Finding Nemo", "Apex Legends", "Coding", "Sleepy"];

var favorites = [];



//  FUNCTIONS
// ----------------------------

// Function for displaying movie data
function renderButtons() {
    //Clear the movies buttons
    $("#btn-view").empty();

    for (i = 0; i < gifs.length; i++) {
        //   var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gifs[i] + "&limit=10&rating=pg&api_key=dc6zaTOxFJmzC";

        // var res;
        //   $.ajax({
        //     url: queryURL,
        //     method: "GET"
        //   }).then(function (response) {
        //     console.log(response);
        // var newBtn = $("<button>");

        // newBtn.attr("value", response.Title);
        // newBtn.text(response.Title);

        // $("#buttons-view").append(newBtn);

        // $("button").on("click", function(){
        //   console.log(this.value);
        // });
        console.log(gifs[i]);

        var newBtn = $("<button>");

        newBtn.attr("value", gifs[i]);
        newBtn.text(gifs[i]);

        newBtn.addClass('gif-btn');

        $("#btn-view").append(newBtn);
    }
}

function getGifs() {
    console.log(this.getAttribute("value"));
    var searchTerm = this.getAttribute("value");

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + searchTerm + "&limit=10&rating=pg&api_key=dc6zaTOxFJmzC";

    
}


//  SETUP
// ------------------------
renderButtons();


//  EVENT HANDLERS
// -------------------------
// $(document).on("click", ".gif-btn", getGifs($(this).attr("value")));
$(document).on("click", ".gif-btn", getGifs);

