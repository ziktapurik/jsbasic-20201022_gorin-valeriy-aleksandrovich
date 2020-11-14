/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(friends) {
    let friendsFullNames = friends.map (u => u.firstName + ' ' + u.lastName); //повторяем предыдущие уроки
    
    let friendsList = document.createElement('ul');
    
    for (let name of friendsFullNames) {
	   friendsList.innerHTML += `<li>${name}</li>`;
	}

    return friendsList;
}
