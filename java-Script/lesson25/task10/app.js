let day = +prompt('Ведите день');
let month = +prompt('Ведите месяц');
let year = +prompt('Ведите год');

if (day <= 30 && day >= 1) {
    day += 1;
} else if ( day == 31 && month >=1 && month <= 11) {
    day = 01
    month += 1;
} else if (month == 12 && day == 31) {
    month = 01;
    day = 01;
    year += 1;
} else if (year) {

}

else {
    alert('Ведите коректные значения');
}

alert(`${day} день. ${month} месяц. ${year} год.`);

if (year % 400 == 0 && !year % 100 == 0 ) {
    alert('високосний рік');
 } else if (year % 100 == 0) {
    alert('не високосний рік')
 } else if (year % 4 == 0) {
    alert('високосний рік');
 } else {
    alert('не високосний рік');
 }