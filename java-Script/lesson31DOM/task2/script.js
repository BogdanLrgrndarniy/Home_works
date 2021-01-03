 // Создать HTML-страницу с кнопкой "Открыть" и модальным окном. На модальном окне должен быть текст и кнопка "Закрыть". Изначально модальное окно не отображается. При клике на кнопку "Открыть" появляется модальное окно, на кнопку "Закрыть" – исчезает.
let button = document.createElement('button');
button.style.cursor = 'pointer';
button.innerHTML = 'Открыть';
document.body.append(button);
let modal = document.getElementById('myModal');
let getButton = document.getElementsByTagName('button')[0];
let span = document.getElementsByClassName('close')[0];
getButton.onclick = function () {
     modal.style.display = 'block';
}
span.onclick = function() {
    modal.style.display = 'none';
}