/**
 * Power
 * @param {number} m base
 * @param {number} n index
 * @returns {number}
 */
function pow (m, n) {
    if (n <= 0 || (n ^ 0) !== n ) {
        
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
function secondArg (arg1) {
    arg2 = +prompt("Enter the second one");
    isNaN(arg2) ? alert("wrong input value") : alert(pow(arg1,arg2));
}
function resolve () {
    let arg1, arg2;
    arg1 = +prompt("Enter the first value");
    isNaN(arg1) ? alert("wrong input value") : secondArg(arg1);
}

resolve();
     

