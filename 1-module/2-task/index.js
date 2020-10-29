/**
 * Эту функцию трогать не нужно
 */
function print(text) {
  console.log(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 */
function isValid(name) {
    if (name.length < 4) { //длина имени должна быть минимум 4 символа
        return false;
    }
    
   if ( name.indexOf(" ")<0 && name.indexOf("\n")<0 && name.indexOf("\t")<0 ) { //в имени не должно быть пробелов
        return true;
    } else return false;
}

function sayHello() {
  let userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}
