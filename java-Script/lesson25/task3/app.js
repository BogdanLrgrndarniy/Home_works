var number = +prompt( 'Введите трехзначное число: ');

var number1 = parseInt(number / 100);
var number2 = parseInt(number / 10) % 10;
var number3 = number % 10;

if (number < 100 || number > 999) {
alert('Вы вели не трех значное число');
}
    else if(number1===number2 || number2===number3 || number1===number3)
    alert('Найдено совпадение цифр');
        else
        alert('Совпадений не найдено');