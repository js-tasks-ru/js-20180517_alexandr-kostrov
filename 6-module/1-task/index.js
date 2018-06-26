'use strict';

/**
 * Функция возвращает строкой, сколько времени осталоьс до события
 * @param {Date} when - дата события
 * @return {string} - строка с указанием времени до начала события
 */
function getBeforeTime(when) {
    let current = new Date(Date.now()); // обязательно получать текущую дату через эту функцию. Иначе тесты работать не будут
   var time = when - current;
    if((time) < 0){
        return "The event has already pass away";
    }
    var years = time/1000/60/60/24/365 > 0 ? Math.floor(time/1000/60/60/24/365) : '';
    var months = (time/1000/60/60/24/365*12 - 12*years) > 0 ? Math.floor(time/1000/60/60/24/365*12 - 12*years) : '';
    return `${years}years ${months}months`
}