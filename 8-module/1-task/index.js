'use strict';

/**
 * Компонент, который реализует сортируемую таблицу
 * @param {Array} items - данные, которые нужно отобразить
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      },
 *
 * @constructor
 */
function SortableTable(items) {

    /**
     * @property {Element} - обязательно свойство, которое ссылается на элемент <table>
     */
    this.el = document.createElement('table');
    var fragment = document.createDocumentFragment();
    let head = document.createElement('thead');
    let body = document.createElement('tbody');

    head.appendChild(document.createElement('tr'));
    console.log(Object.keys(items[0]));
    Object.keys(items[0]).forEach(key=>{
        var td = document.createElement('td');
        td.textContent = key;
      head.firstElementChild.appendChild(td);
    });
    this.el.appendChild(head);
     function adding(){ items.forEach(obj => {
         var row = document.createElement('tr');
         Object.keys(obj).forEach(key=>{
             var cell = document.createElement('td');
             cell.innerHTML = obj[key];
             row.appendChild(cell);
         });
         body.appendChild(row);
     })
      return fragment.appendChild(body);
    }
     var resultOfAdding =adding();
     this.el.appendChild(resultOfAdding);
    /**
     * Метод выполняет сортировку таблицы
     * @param {number} column - номер колонки, по которой нужно выполнить сортировку (отсчет начинается от 0)
     * @param {boolean} desc - признак того, что сортировка должна идти в обратном порядке
     */
    var rows = Array.from(this.el.querySelector('tbody').rows);
    this.sort = function (column, desc = false) {
        
        var sortedFunc = !isNaN(+rows[0].cells[column].textContent)  ? function(a,b){
            
            if(!desc){
            return a.cells[column].textContent - b.cells[column].textContent;}
            else{
                return -(a.cells[column].textContent - b.cells[column].textContent); 
            }
        } : function(a,b){
            if(!desc){
            return a.cells[column].textContent > b.cells[column].textContent;}
            else{
                return !(a.cells[column].textContent > b.cells[column].textContent); 
            }
        }
        rows.sort(sortedFunc);
        var fragm = document.createDocumentFragment();
        rows.forEach(row=>{
            fragm.appendChild(row);
        });
        this.el.querySelector('tbody').innerHTML = '';
        this.el.querySelector('tbody').appendChild(fragm);
     };
     //document.querySelector()
}

