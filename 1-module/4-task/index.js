/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {
    str = str.toLowerCase(); //переводим все в нижний регистр для регистровой независимости
    if ( str.indexOf("1xbet")!=-1 || str.indexOf("xxx")!=-1 ) { //проверка на наличие спама
        return true;
    } else return false;
}
