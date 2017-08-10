$(document).ready(function () {
    $("#findButton").click(function () {
        var searchTerm = $("#veggieInput").val();
        searchTerm = searchTerm.toLowerCase();
        var listItems = $("li");
        listItems.each(function () {
            var words = $(this).text().toLowerCase();
            if (!words.includes(searchTerm)) {
                $(this).hide("slow");
            }
            if (words.includes(searchTerm)) {
                $(this).show("slow");
            }
        });
    });
    //User should be able to click the View all button and all the recipes are shown.
    $("#viewAllButton").click(function () {
        var listItems = $("li");
        listItems.each(function () {
            $(this).show("fast");
        })
    })

    //

});
    