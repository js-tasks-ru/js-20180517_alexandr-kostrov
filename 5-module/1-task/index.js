'use strict';

/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
    Array.from(document.querySelector('tbody').children).forEach(row => {
        if(row.lastElementChild.dataset.available == "true"){
          row.classList.add('available');
        }else if(row.lastElementChild.dataset.available == "false"){
        row.classList.add('unavailable');
        }
        if(row.lastElementChild.previousElementSibling.textContent === 'm'){
          row.classList.add('male');
        }else if(row.lastElementChild.previousElementSibling.textContent === 'f'){
          row.classList.add('female');
        }
        if(+row.firstElementChild.nextElementSibling.textContent < 18){
        row.style.textDecoration = "line-through";
        }
        if(!row.getAttribute('hidden')){
          row.setAttribute('hidden','');
        }
        });
}