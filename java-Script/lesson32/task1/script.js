// Создать HTML-страницу для отображения/редактирования текста.
//  При открытии страницы текст отображается с помощью тега div. 
//  При нажатии Ctrl + E, вместо div появляется textarea с тем же текстом, который теперь можно редактировать. 
//  При нажатии Ctrl + , вместо textarea появляется div с уже измененным текстом.
//  Не забудьте выключить поведение по умолчанию для этих сочетаний клавиш.

let newElementTextArea = document.createElement('textarea');
newElementTextArea.classList.add('textArea');
let elementDiv = document.querySelector('div');
let elementP = document.querySelector('p');
elementDiv.textContent = 'sddddd';
newElementTextArea.textContent = elementDiv.textContent
// elementDiv.append(newElementTextArea);



document.onkeydown =  function(event) {
      if(event.ctrlKey && event.code === 'KeyE'){
        console.log('Нажата ctrl + E');
        elementDiv.append(newElementTextArea);
        return false;
      } else if(event.ctrlKey && newElementTextArea.value.length !== elementDiv.textContent.length){
        elementDiv.textContent = newElementTextArea.value;
        // newElementTextArea.value = '';
        return false;
      }
}






