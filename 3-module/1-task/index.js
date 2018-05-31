/**
 * showSalary
 * @param {Array} data - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(data, age) {
    let str = "";
  for (user of data) {
      user["age"] <= age ? str += `${user["name"]}, ${user["balance"]}\n` : null;
  }
  return str;
}


