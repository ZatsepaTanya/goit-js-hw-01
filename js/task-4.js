let credits = 23580;
const pricePerDroid = 3000;
let totalPrice;
const countPerDroid = prompt("Какое колличество дроидов необходимо?");


if (countPerDroid === null){
    console.log("Отменено пользователем!");
}else{
    totalPrice=countPerDroid*pricePerDroid;
    if (totalPrice>credits){
        console.log("Недостаточно средств на счету!");
    }else{
        credits = credits - totalPrice;
        console.log(`Вы купили ${countPerDroid} дроидов, на счету осталось ${credits} кредитов`);
     }
}



