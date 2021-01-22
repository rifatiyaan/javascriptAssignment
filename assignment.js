




//problem:1

function kilometerToMeter(kilometer) {
    var meter = kilometer * 1000;
    if (kilometer < 0) {
        console.log("Invalid distance"); //AS DISTANCE CAN'T BE NEGATIVE
    }
    else {
        return meter;
    }
}
var distance = kilometerToMeter(0);
console.log(distance);





//////////////////////////////////////////////////////////////


//problem:2

function budgetCalculator(watch, phone, laptop) {
    priceOfWatch = 50 * watch;
    priceOfPhone = 100 * phone;
    priceOfLaptop = 500 * laptop;
    totalPrice = (priceOfWatch + priceOfPhone + priceOfLaptop);
    if ((watch < 0) || (watch % 1 != 0) || (phone < 0) || (phone % 1 != 0) || (laptop < 0) || (laptop % 1 != 0)) {
        console.log("Invalid quantity"); //AS QUANTITY CAN'T BE DECIMAL OR NEGATIVE
    }
    else {
        return totalPrice;
    }
}
var amount = budgetCalculator(0, 0, 0);
console.log(amount);





//////////////////////////////////////////////////////////////


//problem:3

function hotelCost(day) {


    if ((day < 0) || (day % 1 != 0)) {
        console.log("Invalid time") // AS DAYS CANT BE DECIMAL OR NEGATIVE
    }

    else if (day <= 10) {
        var firstCategoryPrice = day * 100;
        return firstCategoryPrice;

    }
    else if ((day > 10) && (day <= 20)) {
        extraDays = days - 10;
        var secondCategoryPrice = ((extraDays * 80) + (10 * 100));
        return secondCategoryPrice;
    }
    else if (day > 20) {
        extendedDays = day - 20;
        var thirdCategoryPrice = ((extendedDays * 50) + (10 * 80) + (10 * 100));
        return thirdCategoryPrice;
    }
}

var cost = hotelCost(0);
console.log(cost);


//////////////////////////////////////////////////////////////

//problem:4

function megaFriend(name) {
    var checkElement = name[0];
    for (i = 0; i < name.length; i++) {
        if (name[i].length > checkElement.length) {
            checkElement = name[i];
        }
    }
    return checkElement;
}

var friendsName = ["Roger", "Mike", "Jonathan", "Peter", "Micheal", "John", "Benedict", "Rob", "Edward"];
console.log(megaFriend(friendsName));




