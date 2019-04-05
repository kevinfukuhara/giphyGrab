// VARIABLES
//--------------------------

// Initial array of movies
var gifs = ["Finding Nemo", "Apex Legends", "Coding", "Sleepy"];
var favorites = [];


//  FUNCTIONS
// ----------------------------

// Function for displaying movie data
function renderButtons(gifArr) {
    //Clear the movies buttons
    $("#btn-view").empty();

    for (i = 0; i < gifArr.length; i++) {
        console.log(gifArr[i]);

        var newBtn = $("<button>");

        newBtn.attr("value", gifArr[i]);
        newBtn.text(gifArr[i]);

        newBtn.addClass('gif-btn');

        $("#btn-view").append(newBtn);
    }
}

function getGifs() {
    event.preventDefault();

    console.log(this.getAttribute("value"));
    var searchTerm = this.getAttribute("value");

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + searchTerm + "&limit=10&rating=pg&api_key=dc6zaTOxFJmzC";

    // Creates AJAX call for the specific movie button being clicked
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        // YOUR CODE GOES HERE!!!
        console.log(response);      // Console shows that response.data returns and array!

        // Clear gifs 
        $("#gif-contain").empty();

        // iterate through array
        for (i = 0; i < response.data.length; i++) {
            var cardMain = $("<div style='width: 18rem;'>");
            cardMain.addClass("card");

            // Gather Gif's main properties
            gifStill = response.data[i].images.downsized_still.url;
            gifMove = response.data[i].images.downsized.url;
            gifRating = response.data[i].rating;
            gifTitle = response.data[i].title;

            var cardGif = $("<img>");
            cardGif.addClass("card-img-top");
            // Add gif's alt name/description
            cardGif.attr("alt", gifTitle);
            // Add gif's still value
            cardGif.attr("still_value", gifStill);
            // Add gif's active value
            cardGif.attr("move_value", gifMove);
            // Add the gif's src attribute to be the still value
            cardGif.attr("src", gifStill);
            
            // Add identifier as image
            cardGif.addClass("gif-image");

            var cardBody = $("<div>");
            // Add the rating of the gif
            cardBody.html("Rating: " + gifRating);

            // Append gif to Card Main, then append cardBody to cardMain
            cardMain.append(cardBody);
            cardMain.append(cardGif);
            // Then append cardMain to gif-contain in the HTML 
            $("#gif-contain").append(cardMain);

            console.log("Should have added a new card/Gif to the gif-container.");
        }

    });

}


//  SETUP
// ------------------------
renderButtons(gifs);


//  EVENT HANDLERS
// -------------------------

// Handler controls the API and displaying of Gifs when a button on top is pressed
$(document).on("click", ".gif-btn", getGifs);

//  Event handler that handles the adding of a button
$("#add-gif").on("click", function () {
    // stop page from reloaded when button is pressed
    event.preventDefault();

    var gifType = $("#gif-input").val();

    if(gifType != "") {
        gifs.push(gifType);
        renderButtons(gifs);
    }
});

//Event handler that handles to play/pause gifs if clicked
$(document).on("click", ".gif-image", function() {
    // console.log($(this).attr("move_value"));
    // stop page from reloaded when button is pressed
    event.preventDefault();

    var stillVal = $(this).attr("still_value");
    var moveVal = $(this).attr("move_value");
    var currState = $(this).attr("src");

    if(currState === stillVal) {
        // Case to Play Gif 
        $(this).attr("src", moveVal);
    } else if(currState === moveVal) {
        // Case to pause gif
        $(this).attr("src", stillVal);
    }
});
