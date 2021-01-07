class Marker {
    constructor(colorMarker, amountInk) {
      this.colorMarker = colorMarker; // поле, которое хранит цвет маркера;
      this.amountInk = amountInk; // поле, которое хранит количество чернил в маркере (в процентах);
    }
  print(string) {  //метод для печати
    let amountSymbols = 0;
    let generalAmountSymbols = 0;
    let emptyString = '';
    for(let i = 0; i <  string.length; i++){
              if(string[i] !== ' ') {
                   generalAmountSymbols += 1;
              }
    }
    
    for(let i = 0; i <  string.length; i++){
      if(this.amountInk > 0){
          emptyString += string[i];       
      }
      if(this.amountInk > 0 && string[i] !== ' '){
         this.amountInk -= 0.5;
         amountSymbols += 1;
      } else if(this.amountInk === 0) {
                console.log('чернила закончились');
        break;
      }
      if(generalAmountSymbols === amountSymbols){
        console.log('Ура! Напичаталось все сообщения');
      }
    }
    generalAmountSymbols = generalAmountSymbols - amountSymbols;
          console.log(`'${emptyString}' '${marker.colorMarker}'` + ' ' + 'осталось' + ' ' +  this.amountInk + ' ' + 'процентов чернила');
          console.log(amountSymbols + ' ' + 'символов напичаталось.' + ' ' + generalAmountSymbols + ' символов осталось напечатать');
  }
}
