/**
 * Проверяем объект obj на пустоту
 * @param {Object} obj
 * @returns {Boolean}
 */
function isEmpty(obj) { 
    for (let key in obj) { //Если есть хоть один ключ, выводим false, иначе true
      return false;
    }
    return true;
}
