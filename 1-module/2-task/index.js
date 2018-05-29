'use strict';

/**
 * Эту функцию трогать не нужно
 */
function print (text) {
    alert(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 */
function conf (){
    return true;
}
function isValid (name) {
   return name.length !== 0 && name.indexOf(" ") === -1 && name.length >= 4 && conf();
}

function sayHello () {
    let userName = prompt('Enter the name');

    if (isValid(userName)) {
        print('Welcome back, ' + userName + '!');
    } else {
        print('Uncorrect name');
    }
}

sayHello();

