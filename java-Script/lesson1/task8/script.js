let moneyWallet = prompt('введите сумму денег в кошельке');
let priceOfOneChocolate = prompt('введите цену одной шоколадки');

let howManyChocolatesUserCanBuy = Math.round(moneyWallet / priceOfOneChocolate);
let RestOfMoney = moneyWallet % priceOfOneChocolate;

alert( ` ${howManyChocolatesUserCanBuy} шоколадки, ${RestOfMoney} ваша решта` );