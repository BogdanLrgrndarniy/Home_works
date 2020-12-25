let button = document.querySelector('.button').onClick;

function  makePhrases(){
    document.querySelector('.whoAreYou');
    let words1 = ['імератор який', 'вождь який', 'толік тракторіст який', 'собачка яка', 'хомич який', 'ялинка яка'];
    let words2 = ['робить', 'нюхає', 'дивиться на', 'бачить', 'пригає як',  'плачить на'];
    let words3 = ['сіськи', 'яйця діда мороза', 'дружину женю', 'картоплю', 'альонені сіски', 'динозавра' ];

    let rand1 = Math.floor(Math.random() * words1.length);
    let rand2 = Math.floor(Math.random() * words1.length);
    let rand3 = Math.floor(Math.random() * words1.length);

    document.querySelector('.whoAreYou').innerHTML = words1[rand1] + " " + words2[rand2] + " " + words3[rand3];
}




// makePhrases();
// makePhrases();
// makePhrases();
// makePhrases();