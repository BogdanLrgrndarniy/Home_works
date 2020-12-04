let usd = prompt('Ведіть кількість доларів для обміну');
let currencySelection = prompt('в яку валюту хочете перевести USD ? EUR, UAH або AZN');

let EUR = Math.round(usd * 0.83);
let UAH = Math.round(usd * 28.44);
let AZN = Math.round(usd * 1.70);

if (currencySelection == 'EUR') {
   alert(`Ви отримаєте ${EUR} євро`);
} else if (currencySelection == 'UAH') {
   alert(`Ви отримаєте ${UAH} гривні`);
} else if (currencySelection == 'AZN') {
   alert(`Ви отримаєте ${AZN} маната`);
} else {
   alert('Ви вели не ту валюту');
}