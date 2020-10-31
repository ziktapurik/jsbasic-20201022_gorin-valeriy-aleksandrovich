/**
 * Складываем зарплаты
 * @param {Object} salaries - объект зарплат
 * @returns {Number}
 */
function sumSalary(salaries) {
    let total = 0; //сюда мудем записывать зарплату
    for (let key in salaries) {
        if ( typeof(salaries[key]) == "number" ) { //если это число, то точно зарплата
           total +=  salaries[key];
        }
    }
    return total;
}
