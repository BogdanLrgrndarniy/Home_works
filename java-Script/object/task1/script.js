// Создать объект, описывающий автомобиль (производитель, модель, год выпуска, средняя скорость), и следующие функции для работы с этим объектом:

let car = {
    manufacturer: 'BMW',
    model: 'BMW X5',
    yearIssue: 2005,
    middleSpeed: 230,
    };
    
    
    
    // Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью. Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час.: 230,
    
    // Функция для вывода на экран информации об автомобиле;
    function informationCar(carBMW){
      for(let item in carBMW){
    return  console.log(`Производитель: ${carBMW.manufacturer}  Модель: ${carBMW.model} Год выпуска: ${carBMW.yearIssue} Средняя скорость: ${carBMW.middleSpeed}`);
      }
    };
    
    informationCar(car)
    // Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью. Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час.
    function timeCoverTransmittedDistance(distance, car) {
        let takeTimeMinutes= Math.round((distance / car.middleSpeed) * 60);
        let timeHour = Math.trunc(takeTimeMinutes / 60);
        let otherMinute = takeTimeMinutes - (timeHour * 60);
        let hourfor = Math.trunc((timeHour/4));
       let numberStops = 0;
        for(let i = 0; i < hourfor; i++){
          timeHour += 1;
          numberStops += 1;
        }
      console.log(`${timeHour}:часа ${otherMinute}:минут (С учетом остановок каждый четыре часа) Всего было ${numberStops} остановок`);
     }
    
    timeCoverTransmittedDistance(10000, car)
    // t = S(РАСТОЯНИЯ) : V(СКОРОСТЬ)