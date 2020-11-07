/**
 * @param {string} str
 * @returns {string}
 */
function camelize(str) {
    let arr = str.split("-"); //разделяем строку по словам
	
    for (let i=1; i<arr.length; i++) {
        arr[i]=arr[i][0].toUpperCase() + arr[i].slice(1); //всем словам кроме первого делаем первую букву заглавной
    }
	return arr.join('');
}
