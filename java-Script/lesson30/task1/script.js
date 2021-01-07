// 1) Реализовать класс, описывающий окружность. В классе должны быть следующие компоненты





 class Circle {
 
    constructor(radius) { // поле, хранящее радиус окружности;
   this.radius = radius;
    }
     get radiusReturn() { // get-свойство, возвращающее радиус окружности;
       return this.radius;
     }
     get piNumber() { //чесло пи
       return 3.14159265359;
     }
     set addradius(addradius) { // set-свойство, устанавливающее радиус окружности;
       this.radius = addradius ;
     }
     get diameter() { // get-свойство, возвращающее диаметр окружности;
       return 2 * this.radius + ' ' + 'get-свойство, возвращающее диаметр окружности';
     }
     areaCircle() { // метод, вычисляющий площадь окружности;
    console.log(Math.trunc(this.piNumber * (this.radius * this.radius)) + ' ' + 'площадь окружности');
     }
     lengthCircle() { // метод, вычисляющий длину окружности.
       console.log(2 * this.piNumber * this.radius + ' ' + 'длина окружности');
     }
   }
   // Продемонстрировать работу свойств и методов. 
   const circle = new Circle(30);
   
   console.log(circle.radiusReturn);
   console.log(circle.addradius = 51);
   console.log(circle.diameter);
   circle.areaCircle();
   circle.lengthCircle();