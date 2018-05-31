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

function isValid (name) {
   return name.length !== 0 && name !== 'undefined' && name.indexOf(" ") === -1 && name.length >= 4 && true;
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

