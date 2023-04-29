// our handy object constructor to create as many Food record objects as we need.
let Food = function (pName, pCalories) {
    this.food = pName;
    this.calories = parseInt(pCalories); 
};

Food.prototype.isValid = function () {
    if (this.food == "" || isNaN(this.calories) || this.calories <= 0) 
    {
        return false;
    } 
    else 
    {
        return true;
    }
};

Food.prototype.toString = function () {
    let cal = this.calculateMpg().toFixed(1);
    return this.calories;
};

