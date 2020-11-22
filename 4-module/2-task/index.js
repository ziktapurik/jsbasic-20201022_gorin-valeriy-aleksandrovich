/**
 * @param {HTMLTableElement} table
 * @return {void}
 */
function makeDiagonalRed(table) {
    let n=0; //счетчик правильной ячейки
    for (let i of table.rows) {
        i.cells[n].style.backgroundColor= 'red';
        n++; 
    }
}
