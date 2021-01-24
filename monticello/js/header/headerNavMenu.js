let elementLi = document.querySelectorAll('li');



for(let i = 0; i < elementLi.length; i++){

    elementLi[i].addEventListener('click', function(event){
        if(elementLi[i].classList.contains('li-Active') === false){
            for(let j = 0; j < elementLi.length; j++){
                if(elementLi[j].classList.contains('li-Active')){
                    elementLi[j].classList.remove('li-Active');
                }
            }
            elementLi[i].classList.add('li-Active');
        }
    });
    
}



