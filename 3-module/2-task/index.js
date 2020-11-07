/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @returns {number[]}
 */
function filterRange(arr, a, b) {
    let min, max;
	if (a >= b) { //по условию a может быть больше b и наоборот
        max = a;
        min = b;
    } else {
        max = b;
        min = a;
    }
	
	let total=[];
    for (let i of arr) {
        if ((i>=min) && (i<=max)) {total.push(i)}; //Если элемент массива arr попадает в диаппазон между min и max, добавляем его в total
    }
	return total;
}
