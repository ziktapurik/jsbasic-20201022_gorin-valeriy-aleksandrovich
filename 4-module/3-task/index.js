/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
    
    // Ищем индексы нужных нам столбцов таблицы
    let age;
    let gender;
    let status;
    for (let columns of table.tHead.rows[0].cells) { 
               
        if (columns.textContent === 'Age') {
            age=columns.cellIndex;
        } else if (columns.textContent === 'Gender')  {
            gender=columns.cellIndex;
        } else if (columns.textContent === 'Status')  {
            status=columns.cellIndex;
        }
        
    }
    
    
    for (let bodies of table.tBodies) {
       for (let tr of bodies.rows) {
          
           
           //добавляем класс available/unavailable/hidden
           if (tr.cells[status].getAttribute('data-available') == 'true') {
               tr.classList.add('available');
           } else if (tr.cells[status].getAttribute('data-available') == 'false') {
               tr.classList.add('unavailable'); 
           } else if (!tr.cells[status].hasAttribute('data-available')) {
               tr.setAttribute('hidden', true);
           }
           
           // добавляем класс male/female
           if (tr.cells[gender].textContent === 'm') {
               tr.classList.add('male');
           } else if (tr.cells[gender].textContent === 'f') {
               tr.classList.add('female');
           }
           
           //добавляем inline-стиль style="text-decoration: line-through"
           if (tr.cells[age].textContent < 18) {
               tr.style="text-decoration: line-through";
           }
        
        }
        
    }
    
}
