'use strict';
 const MS_IN_DAY = 86400000;
/**
 * Функция возвращает строкой, сколько времени осталоьс до события
 * @param {Date} when - дата события
 * @return {string} - строка с указанием времени до начала события
 */
function getBeforeTime(when) {
    let current = new Date(Date.now()); // обязательно получать текущую дату через эту функцию. Иначе тесты работать не будут
   var time = when - current;
   var rest = new Date(time);
   
   var result = [];

   var year = rest.getFullYear() - 1970;
   var month = rest.getMonth();
   
   let days = rest.getUTCDate();
   let hours = rest.getUTCHours();
   let minutes = rest.getUTCMinutes();
   let sec = rest.getUTCSeconds();

   if(rest <= MS_IN_DAY){
       days -= 1;
   }

   if(year){
       result.push(`${year}years`);
   }
   if(month){
    result.push(`${month}months`);
}
   if(days){
    result.push(`${days}days`);
}
   if(hours){
    result.push(`${hours}hours`);
}
   if(minutes){
    result.push(`${minutes}minutes`);
}
if(sec){
    result.push(`${sec}seconds`);
}

return result.join(',')
}