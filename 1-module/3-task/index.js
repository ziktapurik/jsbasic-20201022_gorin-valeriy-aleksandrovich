/**
 * ucFirst
 * @param {string} str
 * @returns {string}
 */
function ucFirst(str) {
    if (str) {
        str = str[0].toUpperCase() + str.slice(1); //Меняем первый символ на заглавный
    }
    return str;
}
