/**
 * Power
 * @param {number} m base
 * @param {number} n index
 * @returns {number}
 */
function pow (m, n) {
    if (n <= 0 || (n ^ 0) !== n) {
        
        return "The wrong input value";
    } else {
    var res =m;
   while (n > 1) {
       m = m * res;
       n--;
   }
   return m;
  }
}

let arg1=+prompt("Enter the first value");
let arg2=+prompt("Enter the second one");
alert(pow(arg1,arg2));