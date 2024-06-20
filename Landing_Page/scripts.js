// Get the modal
var modal = document.getElementById("recipeModal");

// Get the button that opens the modal
var buttons = document.querySelectorAll(".recipe-button");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
buttons.forEach(button => {
    button.onclick = function() {
        var recipeId = this.getAttribute("data-id");
        var modalTitle = document.querySelector(".modal-title");
        var modalIngredients = document.querySelector(".modal-ingredients");
        var modalInstructions = document.querySelector(".modal-instructions");

        // Example data for recipes (replace with actual data retrieval logic)
        var recipes = {
            recipe1: {
                title: "Spaghetti Carbonara",
                ingredients: "Spaghetti, eggs, Parmesan cheese, bacon, black pepper, salt",
                instructions: "1. Cook spaghetti according to package instructions.\n2. In a bowl, mix eggs, Parmesan cheese, and black pepper.\n3. In a pan, fry bacon until crispy.\n4. Drain spaghetti and toss in the pan with bacon.\n5. Add egg mixture and toss quickly until sauce thickens.\n6. Serve immediately.",
            },
            recipe2: {
                title: "Paneer Tikka Masala",
                ingredients: "Paneer, yogurt, spices (cumin, coriander, garam masala), tomatoes, cream, butter",
                instructions: "1. Marinate paneer cubes in yogurt and spices.\n2. Grill or bake paneer until golden.\n3. Prepare a sauce with tomatoes, cream, and spices.\n4. Add paneer to the sauce and simmer until flavors blend.\n5. Garnish with cilantro and serve hot with rice or naan.",
            },
            recipe3: {
                title: "Chocolate Cake",
                ingredients: "Flour, sugar, cocoa powder, baking powder, baking soda, eggs, milk, oil, vanilla extract",
                instructions: "1. Preheat oven to 350°F (175°C).\n2. Mix dry ingredients in a bowl.\n3. Add wet ingredients and mix until smooth.\n4. Pour batter into greased pans.\n5. Bake for 30-35 minutes until a toothpick inserted comes out clean.\n6. Cool completely, frost as desired, and enjoy!",
            }
        };

        // Update modal content with selected recipe
        modalTitle.textContent = recipes[recipeId].title;
        modalIngredients.textContent = "Ingredients: " + recipes[recipeId].ingredients;

        // Convert newline characters to <br> for HTML display
        modalInstructions.innerHTML = "Instructions:<br>" + recipes[recipeId].instructions.replace(/\n/g, '<br>');

        // Display the modal
        modal.style.display = "block";
    }
});

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
