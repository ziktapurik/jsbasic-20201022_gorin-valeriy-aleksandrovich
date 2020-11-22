/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
    //Разбиваем строку на элементы массива
    let myArr = str.split(' ');
    let myStringsArr = [];
    for (let el of myArr) {
        myStringsArr.push( el.split(',') ); 
    }
    myStringsArr = myStringsArr.flat(1);
  
    //оставляем в массиве только числовые значения
    let onlyNumberArr= [];
    for (let i in myStringsArr){
        if ( Number(myStringsArr[i]) || Number(myStringsArr[i])===0  && myStringsArr[i] != "") { //проверяем, что элемент массива - число, проще не придумал как это сделать
            onlyNumberArr.push(myStringsArr[i]);
        }
    }
  
  //Ищем min,max и сохраняем их в объект
  let min = Math.min (...onlyNumberArr);
  let max = Math.max (...onlyNumberArr);
  
  let result = {
    min: min,
	max: max
  }
  return result;
}
