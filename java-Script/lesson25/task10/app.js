let day = +prompt('Ведите день');
let month = +prompt('Ведите месяц');
let year = +prompt('Ведите год');
// let day = 30;
// let month = 12;
// let year = 2019;
 
 let months = month == 1 || month == 3 || month == 5 || month == 7 ||  month == 8 ||  month == 10 ||  month == 12 && month !== 2;
 let monthsSecond = month == 4 || month == 6 || month == 9 || month == 11 && month !== 2;
    let years = day !== 30 && day !== 31 ;
    let yearsSecond = day !== 29 && day !== 30 && day !== 31;
    let fix = year % 400 == 0 || year % 100 !== 0 && year % 4 == 0 ;
    let fix2 =  year % 4 !== 0 || year % 100 == 0;
    let i = day - 1;
    let sum = 1;
 if (day == 30 && monthsSecond ) {
    day = 1;
    month += 1;
 } else if(day == 31 && month == 12 && year >= 1000) {
    year += 1;
    day = 1 ;
    month = 1;
 } else if (monthsSecond && day >= 1 && day <=29) {
     
 } 
  else if (day == 31 && months ) {
    day = 1;
    month += 1;
    
 } else if (month == 2 && years && fix ) {
     if (day == 29) {
        month = 3;
        day =  1;
        console.log(`Высокосный год ${month}`);

     }
       
 } else if (month == 2 && yearsSecond && fix2 ) {
    if (day == 28) {
        day =  1;
            month = 3;
        console.log(`Не Высокосный год ${month}`);
     }
       
 }



else if (day >= 1 && day <= 30 && months || monthsSecond) {
    for (i; i < day; i++) {
      day += 1;
      break;
        console.log(i)
    }

} else if (day == 0 || month == 0 && day > 31  || month > 12 && year < 1000 ) {
   alert('Ведіть коректні дані');
}


alert(`${day} день ${month} місяць ${year} рік `);


for (i; i < day; i++) {
  if (day >=1 && day < 29 && month == 2 && yearsSecond && fix2 )
    day += 1;
    break;
    console.log(i)
 }

//  console.log(`${day} день ${month} місяць ${year} рік`);



// alert(`${day} день. ${month} месяц. ${year} год.`);


// if (year % 400 == 0 && !year % 100 == 0 || year % 4 == 0 ) {
//     alert('високосний рік');
//  } else if (year % 100 == 0) {
//     alert('не високосний рік')
//  } else if (year % 4 == 0) {
//     alert('високосний рік');
//  } else {
//     alert('не високосний рік');
//  }