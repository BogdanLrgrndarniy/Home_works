let day = +prompt('Ведите день');
let month = +prompt('Ведите месяц');
let year = +prompt('Ведите год');
if (month == 2 && year % 400 == 0 && !year % 100 == 0  && day == 29 ) {
 month += 1;
 day = 01;
} else if (month == 2 && year % 400 == 0 && !year % 100 == 0  && day >= 1 && day <= 28) {
    day += 1;
}

 else if (year % 100 == 0 && month == 2 && day == 28) {
    month += 1;
    day = 01;
}  else if (day == 28 && month == 2  ) {
    month += 1;
    day = 01;
}
else if (year % 4 == 0 && day == 29 && month == 2 ) {
    month += 1;
    day = 01;
}
 else if (day !== 31 && day >=1 && day <30 && month == 9 || month == 11 || month % 2 == 0) {
    day += 1;
} else if ( day == 30 && day !== 31 || month == 9 || month == 11 || month % 2 == 0 && month !== 2 && month !== 1 && month !== 3 && month !== 5 && month !== 7 && month !== 8 && month !== 9 && month !== 10 && month !== 11 && month !== 12) {
    day = 01
    month += 1;
} else if (month % 2 == 0 && month !== 2 && month !== 1 && month !== 3 && month !== 5 && month !== 7 && month !== 8 && month !== 9 && month !== 10 && month !== 11 && month !== 12 && day !== 31 && day >=1 && day <=30 ) {
    day += 1;
}
else if (month == 12 && day == 31) {
    month = 01;
    day = 01;
    year += 1;
} else if (year % 400 == 0 && !year % 100 == 0 && year % 4 == 0) {

}

else {
    alert('Ведите коректные значения');
}
alert(`${day} день. ${month} месяц. ${year} год.`);


// if (year % 400 == 0 && !year % 100 == 0 ) {
//     alert('високосний рік');
//  } else if (year % 100 == 0) {
//     alert('не високосний рік')
//  } else if (year % 4 == 0) {
//     alert('високосний рік');
//  } else {
//     alert('не високосний рік');
//  }