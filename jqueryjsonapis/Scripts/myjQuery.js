$(document).ready(function () {
    $("#addRecipesButton").hide();
    $("#addRecipeForm").hide();

    $("#findButton").click(function () {
        var searchTerm = $("#veggieInput").val();
        var listItems = $("li");
        var numOfRecipes = listItems.length;
        searchTerm = searchTerm.toLowerCase();

        listItems.each(function () {
            var words = $(this).text().toLowerCase();

            if (!words.includes(searchTerm)) {
                $(this).hide("slow");
                numOfRecipes -= 1;
                if (numOfRecipes == 0) {
                    alert("No Recipes");
                    $(".list-group-item").hide();//hide recipes in list
                    $("#addRecipesButton").show();//show button
                    $("#addRecipeForm").show();

                    $("#addRecipesButton").click(function () {
                        var newRecipe = $("#userInput").val();
                        
                        

                        var listItems = $("li");

                        listItems.each(function () {
                            $(this).show("fast");
                        });
                        $("ul").append('<li class="list-group-item">' + newRecipe + '</li>');

                    });

                    if (words.includes(searchTerm)) {
                        $(this).show("slow");
                    }
                }
            };


            //User should be able to click the View all button and all the recipes are shown.
            $("#viewAllButton").click(function () {
                var listItems = $("li");
                listItems.each(function () {
                    $(this).show("fast");
                });
            });

        });
    });
});