
// Функция сокращения объекта-дроби.

let division = {
    numerator:{
    numerator1: 7,
    numerator2: 8,
 },
   denominator:{
   denominator1: 8,
   denominator2: 8,
 },
   // Функция сложения 2-х объектов-дробей;
 additions:function(){
 let commonDenominator;
   let commonDenominator2;
   if(this.numerator.numerator1 === this.numerator.numerator2 && this.denominator.denominator1 === this.denominator.denominator2){
     commonDenominator = this.numerator.numerator1 + this.numerator.numerator2;
    commonDenominator2 = this.denominator.denominator1;
     NOD(commonDenominator, commonDenominator2);
   } else{
   commonDenominator = (this.numerator.numerator1 * this.denominator.denominator2) + (this.numerator.numerator2 * this.denominator.denominator1);
   commonDenominator2 = (this.denominator.denominator1 * this.denominator.denominator2);
   }
 
 
     function NOD (commonDenominator, commonDenominator2) {
       let generalNod;
     if (commonDenominator2 > commonDenominator) return NOD(commonDenominator2, commonDenominator);
     if (!commonDenominator2) return commonDenominator;
        generalNod =  NOD(commonDenominator2, commonDenominator % commonDenominator2);
     return generalNod;
 }
  let generalNodNumbers = (NOD(commonDenominator,commonDenominator2));
 commonDenominator = commonDenominator / generalNodNumbers;
   commonDenominator2 /= generalNodNumbers;
     return commonDenominator + '/' + commonDenominator2;
 },
   // Функция деления 2-х объектов-дробей;
 
   division:function(){  
     let commonDenominator;
   let commonDenominator2;
     commonDenominator = Number(this.numerator.numerator1 * this.denominator.denominator2);
    commonDenominator2 = this.denominator.denominator1 * this.numerator.numerator2;
     // console.log(commonDenominator);
     // console.log(commonDenominator2);
     
 
    function NOD (commonDenominator, commonDenominator2) {
       let generalNod;
     if (commonDenominator2 > commonDenominator) return NOD(commonDenominator2, commonDenominator);
     if (!commonDenominator2) return commonDenominator;
        generalNod =  NOD(commonDenominator2, commonDenominator % commonDenominator2);
     return generalNod;
 }
     let generalNodNumbers = (NOD(commonDenominator,commonDenominator2));
    commonDenominator = commonDenominator / generalNodNumbers;
   commonDenominator2 /= generalNodNumbers;
     return commonDenominator + '/' + commonDenominator2;
   },
   // Функция умножения 2-х объектов-дробей;
   multiplication:function(){
   let commonDenominator;
   let commonDenominator2;
    commonDenominator = this.numerator.numerator1 * this.denominator.denominator1;
    commonDenominator2 = this.numerator.numerator2 * this.denominator.denominator2;
     
     function NOD (commonDenominator, commonDenominator2) {
       let generalNod;
     if (commonDenominator2 > commonDenominator) return NOD(commonDenominator2, commonDenominator);
     if (!commonDenominator2) return commonDenominator;
        generalNod =  NOD(commonDenominator2, commonDenominator % commonDenominator2);
     return generalNod;
 }
     let generalNodNumbers = (NOD(commonDenominator,commonDenominator2));
    commonDenominator = commonDenominator / generalNodNumbers;
   commonDenominator2 /= generalNodNumbers;
     return commonDenominator + '/' + commonDenominator2;
   },
   // Функция вычитания 2-х объектов-дробей;
   subtraction:function(){
 let commonDenominator;
   let commonDenominator2;
   if(this.denominator.denominator1 === this.denominator.denominator2){
     commonDenominator = this.numerator.numerator1 - this.numerator.numerator2;
    commonDenominator2 = this.denominator.denominator1;
    //  NOD(commonDenominator, commonDenominator2);
   } else{
   commonDenominator = (this.numerator.numerator1 * this.denominator.denominator2) - (this.numerator.numerator2 * this.denominator.denominator1);
   commonDenominator2 = (this.denominator.denominator1 * this.denominator.denominator2);
   NOD(commonDenominator, commonDenominator2);
   }
 
 
   function NOD (commonDenominator, commonDenominator2) {
     if (commonDenominator2 > commonDenominator) return NOD(commonDenominator2, commonDenominator);
     if (!commonDenominator2) return commonDenominator;
     return NOD(commonDenominator2, commonDenominator % commonDenominator2);;
 }
  let generalNodNumbers = (NOD(commonDenominator,commonDenominator2));
 commonDenominator = commonDenominator / generalNodNumbers;
   commonDenominator2 /= generalNodNumbers;
     return commonDenominator + '/' + commonDenominator2;
 },
   }
 
 
 // console.log(NOD(10, 25));
 console.log(division.additions())
 console.log(division.division())
 console.log(division.multiplication())

// ПРИ ВИЗОВІ ЦІЄЇ ФУНКЦІЇ ВИНИКАЯ ПОМИЛКА Uncaught RangeError: Maximum call stack size exceeded
//  console.log(division.subtraction())
 