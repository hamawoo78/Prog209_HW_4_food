let foods = [];

document.addEventListener("DOMContentLoaded", function (event) {
    document.getElementById("track").addEventListener("click", newFood);
});

// submit button function
let newFood = function () {    
    let food = new Food(
        document.getElementById("food").value,
        document.getElementById("calories").value
    );
    
    if (!food.isValid()) {
        alert("Please complete all fields. " +
            "Calories must be numeric " +
            "and greater than zero.");
    } else {
        foods.push(food);  // add new food information to array
        console.log(foods);
        console.log(foods.length);
        displayTotalCalories();
    }
    document.getElementById("food").focus();
}

let displayTotalCalories = function () {
    let displayString = "", calTotal = 0;

    for (let i in foods) {  
        calTotal = calTotal + foods[i].calories;                          
    }

    displayString = calTotal.toString() ; 

    document.getElementById("total").value = displayString; // update new Calories
    document.getElementById("food").select();           // make it easy to enter a new food
}