'use strict';

/**
 * Генерация HTML списка друзей
 * @param {Friend[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList (friends) {
    let list = document.createElement('ul');
    friends.forEach(obj => {
        let li = document.createElement('li');
      li.innerHTML = `${obj.firstName} ${obj.lastName}`
      list.appendChild(li);
    });
    return list;
    
}
