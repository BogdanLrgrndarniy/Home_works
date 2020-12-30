// 3. Создать объект, описывающий время (часы, минуты, секунды), и следующие функции для работы с этим объектом: 

// Функция вывода времени на экран;

// Учтите, что в последних 3-х функциях, при изменении одной части времени, может измениться и другая. Например, если ко времени «20:30:45» добавить 30 секунд, то должно получиться «20:31:15», а не «20:30:75».

let timeObject = {
    hour: 11,
    minutes: 30,
    second: 40,
  };
  
  let outputTime = function(){
  return (`${timeObject.hour}:часов, ${timeObject.minutes}:минут, ${timeObject.second}:секунд`);
  }
  
  let outputTimeResult = outputTime();
  console.log(outputTimeResult);
  
  // Функция изменения времени на переданное количество секунд,минут,часов;
  // Об'эднав три функції в одну
  
  let changeTimeSeconds = function(second, minute, hour){
   second = second + timeObject.second;
   minute = minute +  Number(timeObject.minutes);
    hour = hour + Number(timeObject.hour)
    // let hour = timeObject.hour;
    let secondResult;
    let minuteResult;
    let hourResult;
    for(let i = 0; i < Math.trunc(second/60); i++){
      minute += 1;
    }
    for(let i = 0; i < Math.trunc(minute/60); i++){
      hour += 1;
    }
   
   if (second > 60) {
      secondResult =  Math.trunc(second / 60);
      secondResult = secondResult * 60;
      second = second - secondResult;
    } else  if (second % 60 == 0 && second !== 60) {
      second = 0;
    }
    if(minute > 60) {
      minuteResult =  Math.trunc(minute / 60);
      minuteResult = minuteResult * 60;
      minute = minute - minuteResult;
    } else if(minute % 60 == 0 && minute !== 60) {
      minute = 0;
    }
    if(hour > 24){
       hourResult = Math.trunc(hour / 24);
      hourResult = hourResult * 24;
      hour = hour -  hourResult;
    } else if(hour % 24 == 0) {
      hour = 0;
    } 
    return (`${hour}:часов, ${minute}:минут, ${second}:секунд`);
    }
  
  let changeTimeSecondsResult = changeTimeSeconds(0,122,55);
  console.log(changeTimeSecondsResult);
  
   // Функция изменения времени на переданное количесво минут;