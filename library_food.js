// our handy object constructor to create as many Food record objects as we need.
let Food = function (pName, pCalories) {
    this.food = pName;
    this.calories = parseInt(pCalories); 
};