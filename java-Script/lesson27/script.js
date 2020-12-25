

// Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше, чем второе; 1 – если первое больше, чем второе; и 0 – если числа равны.
let a = prompt('Ведіть перве число');
let b = prompt('Ведіть друге число');

function getNumbers(a,b) {
  if (a == b) return alert(0);
 return a < b ? alert(-1) : alert(1);
}

  getNumbers(a,b)



// Написать функцию, которая вычисляет факториал( добуток натуральних чисел від одиниці до включно) переданного ей числа.
let a = prompt('Ведіть число');
let result = 1;

function factorial(a, result) {
  for (i = 1; i <= a; i++) {
    
  result = result * i;
     
  }
  return result;
  
};

let factorialNumber = factorial(a, result);

 console.log(factorialNumber);
 console.log(factorialNumber);




// Написать функцию, которая принимает три отдельные цифры и превращает их в одно число. Например: цифры 1, 4, 9 превратятся в число 149.
let number;
function transformationsToString(a, b, c) {
  return number = Number((`${a}${b}${c}`));
}

transformationsToString(11, 51, 21)

console.log(number);

// Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь. Если в функцию передали 1 параметр, то она вычисляет площадь квадрата.



function square(a,b) {
  if (a > 0 && b > 0) {
    return a * b;
  } 
   else if (a > 0) {
   return  a * a;
   }
    else if (b > 0) {
    return b * b;
   }
}
let areaRectangle = square(10,5);
console.log(areaRectangle);
let areaSquare = square(-1,5);
console.log(areaSquare);

// Написать функцию, которая проверяет, является ли переданное ей число совершенным. Совершенное число – это число, равное сумме всех своих собственных делителей.
let number = prompt('Ведіть число');
  let result = 0;
function perfectNumber (number) {

  for (i = 1; i < number; i++) {

    if (number % i == 0) {
      result = result + i ;
    }  
}
   if (number == result){
      alert(`${result} совершенное число`);
    }
  return result;
}



perfectNumber(number);
console.log(result);

// Написать функцию, которая принимает минимальное и максимальное значения для диапазона, и выводит только те числа из диапазона, которые являются совершенными. Используйте написанную ранее функцию, чтобы узнавать, совершенное число или нет. 


 
    
function getPerfectNumbers(a,b) {
    for (let j = a; j <= b; j++) {
      if (!checkPerfectNumber(j)) continue;
      console.log(j);
    }
  }
  
function checkPerfectNumber(n) {
    let result = 0;
    for (let i = 1; i < n; i++) {
      if (n % i == 0) {
        result = i + result;
      }
    }
    if (result === n) {
      return result;
    }
}
  
getPerfectNumbers(2,1000);

// Написать функцию, которая принимает время (часы, минуты, секунды) и выводит его на экран в формате «чч:мм:сс».Если при вызове функции минуты и/или секунды не были переданы, то выводить их как 00.




function getTime(hour, minute, second) {
  if (hour < 10) {
   // console.log(`0${hour}`)
    hour =`0${hour}`;
 } 
  else if(hour > 24) {
   alert('Ведіть коректне значення')
  } 
  if (minute < 10) {
    minute = `0${minute}`;
  } else if(minute > 60 || minute < 1) {
  alert('Ведіть коректне значення')
  } 
  if (second < 10) {
    second = `0${second}`;
  } else if(second > 60 || second < 1) {
   alert('Ведіть коректне значення')
  } 
  if (minute == undefined) {
     minute = `00`;
  } 
  if (second == undefined) {
     second = `00`;
  } 
console.log(`<<${hour}:${minute}:${second}>>`)
}


getTime(17,28,45)

// Написать функцию, которая принимает часы, минуты и секунды и возвращает это время в секундах.

function returnSecond(hour, minute, second) {
  hour = hour * 60 * 60;
  minute = (minute * 60) + second;
  let result = hour + minute;
 return result;
}

let resultSecond = returnSecond(1,25,60);
console.log(resultSecond);

// Написать функцию, которая принимает количество секунд, переводит их в часы, минуты и секунды и возвращает в виде строки «чч:мм:сс».

function getSecond(second) {
 let hour = Math.trunc(second / 60 / 60);
  let minute = Math.trunc((second - (hour * 60 * 60)) / 60);
  second = second - ((minute * 60) + (hour * 60 * 60));
   if (hour < 10) {
     hour = `0${hour}`
   } else if (hour > 24){
     alert('Ведіть коректне значення');
     return;
   }
   if (minute < 10)
     minute = `0${minute}`;
    if (second < 10)
       second = `0${second}`;
  let result = `<<${hour}:${minute}:${second}>>`
  return result
  console.log(hour);
} 

let getSecondResult = getSecond(1000);
console.log(getSecondResult);

// Написать функцию, которая считает разницу между датами. Функция принимает 6 параметров, которые описывают 2 даты, и возвращает результат в виде строки «чч:мм:сс». При выполнении задания используйте функции из предыдущих 2-х заданий: сначала обе даты переведите в секунды, узнайте разницу в секундах, а потом разницу переведите обратно в «чч:мм:сс»

function returnSecond(hour, minute, second, hour1, minute1, second1) {
  if (hour <= 24) {
    hour = hour * 60 * 60;
    
  } else {
    console.log('ведіть коректне значення');
    return;
  }
  if (minute <= 60) {
    minute = (minute * 60) + second;
   
  } else {
     console.log('ведіть коректне значення');
    return;
  }
  let result = hour + minute;
  
  if (hour1 <= 24) {
      hour1 = hour1 * 60 * 60;
  } else {
     console.log('ведіть коректне значення');
    return;
  }
  if (minute1 <= 60) {
    minute1 = (minute1 * 60) + second1;
  } else {
    console.log('ведіть коректне значення');
    return;
  }
    let result2 = hour1 + minute1;
    let difference;

  if (result > result2) {
    difference = result - result2;
    console.log('result >')
  } else {
    difference = result2 - result;
     console.log('result2 >')
}
 return difference;
}

let resultSecond = returnSecond(5,25,60, 1,33,33);
console.log(resultSecond);



function getSecond(resultSecond) {
 let hour = Math.trunc(resultSecond / 60 / 60);
  let minute = Math.trunc((resultSecond - (hour * 60 * 60)) / 60);
  resultSecond = resultSecond - ((minute * 60) + (hour * 60 * 60));
   if (hour < 10) {
     hour = `0${hour}`
   } else if (hour > 24){
     alert('Ведіть коректне значення');
     return;
   }
   if (minute < 10)
     minute = `0${minute}`;
    if (resultSecond < 10)
       resultSecond = `0${resultSecond}`;
  let result = `<<${hour}:${minute}:${resultSecond}>>`
  return result
  console.log(hour);
} 

let getSecondResultDifference = getSecond(resultSecond);
console.log(getSecondResultDifference);