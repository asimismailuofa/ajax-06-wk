var topics = ["Dog", "Cat", "Bird", "Reptile", "Mamals", " Rabbits"];

// A $( document ).ready() block.
$(document).ready(function () {
    console.log("ready!");

    for (var i = 0; i < topics.length; i++) {
        console.log(topics);

        // Then dynamicaly generating buttons for each animal in the array
        // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
        var btn = $("<button>");
        // Adding a data-attribute
        btn.attr("data-name", topics[i]);
        //CSS
        btn.addClass("animals");
        // Providing the initial button text
        btn.text(topics[i]);
        // Adding the button to the div
        $("#create-buttons").append(btn);
    }

    $(document).on("click", ".animals", function () {
        var animalName = $(this).attr("data-name");
        console.log(animalName);

        // Example queryURL for Giphy API
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animalName + "&api_key=UWcrcG8bfhqtGPwrR6oSfvWBdFcp62vs";

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);

            // Creating and storing an image tag
            var animalImg = $("<img>");

            // Setting the catImage src attribute to imageUrl
            animalImg.attr("src", animalName);
            animalImg.attr("alt", "animations-appear-here");

            // Prepending the catImage to the images div
            $("#animations-appear-here").prepend(animalImg);

        });
    });
});





