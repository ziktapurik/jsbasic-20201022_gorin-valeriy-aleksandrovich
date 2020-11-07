/**
 * @param   {{ name: string, age: number }[]} users
 * @returns {string[]}  объект
 */
function namify(users) {
    let names = users.map(userObj => userObj.name); // помещаем в names значения всех name
    return names;
}
