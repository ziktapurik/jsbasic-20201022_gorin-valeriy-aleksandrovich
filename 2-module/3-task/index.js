let calculator = {
    read(a, b) { //записываем данные в объект
        this.number1 = a;
        this.number2 = b;
    },
    sum() {return this.number1 + this.number2}, //складываем данные из объекта
    mul() {return this.number1 * this.number2}, // умножаем данные из объекта
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
