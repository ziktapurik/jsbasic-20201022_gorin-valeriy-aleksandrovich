/**
 * showSalary
 * @param {Array} users - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(users, age) {
    let youngs = users.filter ( u => u.age <= age ); //Создаем массив только с сотрудниками нужного возраста
    let names = youngs.map ( u => u.name + ', ' + u.balance); // Создаем массив только и именами и балансом сотрудников
    return names.join( '\n' );
}
