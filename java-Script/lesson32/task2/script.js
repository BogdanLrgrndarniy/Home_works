// Создать HTML-страницу с большой таблицей.
// При клике по заголовку колонки, необходимо отсортировать данные по этой колонке.
// Учтите, что числовые значения должны сортироваться как числа, а не как строки.
let elementTd = document.querySelectorAll('td');
let elementTh = document.querySelectorAll('th');
let table = document.querySelector('table');
let arrTh =  Array.from(elementTh);
let arrTd = Array.from(elementTd);
let arr = [];
let amount = arrTh.length;
let count = 0;
let quantity = 0;
let buttonClick = 0;
console.log(arrTh);
console.log(arrTd);
console.log(amount);

 table.onclick = function(event) {
     buttonClick = buttonClick + 1;
     console.log(buttonClick);
  
        let target = event.target; 
        console.log(event);
        if (target.tagName != 'TH') return; 
       
       for(let i = 0; i < arrTh.length; i++){//находим все елемнты из колонки в зависимости который th был нажат
        count++
        console.log(count);
        if(target.textContent === arrTh[i].textContent){
            for(let j = i; j < arrTd.length; j++){
                    if(typeof Number(arrTd[j].textContent) === 'number' && Number(arrTd[j].textContent) < 9999999999999999999){
                        arr.push(Number(arrTd[j].textContent));
                    } else if(typeof arrTd[j].textContent){
                        arr.push(arrTd[j].textContent);
                    }
                j += amount - 1;
            }      
        }
    }

       for(let i = 0; i < arr.length; i++){
           if(arr[i] < 9999999999999999999  && buttonClick === 1){
            arr.sort(function(a,b){
                return a - b;
            })
            console.log(arr);
            break;
           } else if(arr[i] < 9999999999999999999  && buttonClick === 2 ){
            arr.sort(function(a,b){
                return b - a;
            })
           } else if (typeof arr[i] && buttonClick === 1) {
               arr.sort();
               console.log(arr);
               break;
           } else if(typeof arr[i] && buttonClick === 2) {
               arr.reverse()
               break;
           }
        }
  

  
        if(buttonClick === 2){
            buttonClick = 0;
        }
     
    
    let a = 0;
    for(let i = 0; i < arrTh.length; i++){
        if(target.textContent === arrTh[i].textContent){
            for(let k = i; k < arrTd.length; k++){
                k += amount - 1;
                // console.log(k);
     
                for(let j = i; j < (arrTd.length + arr.length) -  arr.length; j++){
                    j += amount - 1;
                    if(k === j){ 
                        arrTd[k - (count - 1)].textContent = arr[a];
                        // console.log(a);
                        a = a + 1;    
                    }
                }
            }
        }
    }
    count = 0;
    arr = [];
}
