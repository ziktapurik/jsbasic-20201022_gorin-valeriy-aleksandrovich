/**
 * truncate
 * @param {string} str
 * @param {number} maxlength
 * @returns {string}
 */
function truncate(str, maxlength) {
    if ( typeof(maxlength) != "number" || maxlength<1 ) { //если ввели фигню - результат не выводим
        console.log("Введите корректное ограничение длины строки");
        //return;
    }
    
    if ( str.length > maxlength ) { //в противном случае строка не нуждается в обрезании
        str = str.slice(0, (maxlength-1)) + "…";
    }
    
    return str;
}
