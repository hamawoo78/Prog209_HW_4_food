document.addEventListener("DOMContentLoaded", function (event) {
    document.getElementById("track").addEventListener("click", newFood);
});

// submit button function
let newFood = function () {    

    displayTotalCalories();
}

let displayTotalCalories = function () {
    let displayString = "";


    document.getElementById("total").value = displayString; // update new Calories
    document.getElementById("food").select();           // make it easy to enter a new food
}