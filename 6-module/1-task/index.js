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
    var months = (time/1000/60/60/24/365*12 - 12*years) > 0 ?
     Math.floor(time/1000/60/60/24/365*12 - 12*years) : '';
     var days = (time/1000/60/60/24/365*12*30.5 - 12*years*30.5) > 0 ?
      Math.floor((time/1000/60/60/24/365*12*30.5 - 12*years*30.5)%30.5) : '';
    var hours =  (time/1000/60/60/24/365*12*30.5*24 - 12*years*30.5*24) > 0 ?
     Math.floor((time/1000/60/60/24/365*12*30.5*24 - 12*years*30.5*24)%30.5) : '';
    var minutes = (time/1000/60/60/24/365*12*30.5*24*60 - 12*years*30.5*24*60) > 0 ?
    Math.floor((time/1000/60/60/24/365*12*30.5*24*60 - 12*years*30.5*24*60)%30.5) : '';
     return `${years}years ${months}months ${days}days ${hours}hours ${minutes}minutes`
}