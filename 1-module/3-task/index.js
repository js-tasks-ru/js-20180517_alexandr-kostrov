'use strict';

/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(string) {
    "use strict";
let arr=string.split(" ");
let arr1=arr.map(elem=>{
    if(elem.indexOf(",")!==-1){
      return elem=elem.slice(0,elem.length-1)
    } else {
        return elem;
    }
});

let arr2 = arr1.filter(elem => {
    return !isNaN(+elem);
});

let arr3 = arr2.map (elem => +elem);
arr3.sort(function(a, b) {
  return a - b;
});
let min = arr3 [0]
let max = arr3 [arr3.length-1];

return {
    "min" : min,
    "max" : max,
  } 
 
}

