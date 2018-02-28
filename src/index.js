class SmartCalculator {
    constructor(value) {
        this.command = '' + value;  // Тут будем накапливать команду.
        this.pow1 = []; // Тут будем отмечать, была ли команда pow(1) до выполняемой команды
        this.toString =  function() { return eval(this.command) }; // Выполнить команду при сравнении с чем-то.
    }

    add(number) {
        this.pow1.length = 0;  // Если была выполнена эта команда, то обнолить метку pow1
        this.command = this.command + ' + ' + number;  // Добавить к строке с коммандой новое значение.
        return this;  // Вернуть экземпляр себя, на случай дальнейших комманд.
    }

    subtract(number) {
        this.pow1.length = 0;  // Если была выполнена эта команда, то обнолить метку pow1
        this.command = this.command + ' - ' + number;  // Добавить к строке с коммандой новое значение.
        return this;  // Вернуть экземпляр себя, на случай дальнейших комманд.
    }

    multiply(number) {
        this.pow1.length = 0;  // Если была выполнена эта команда, то обнолить метку pow1
        this.command = this.command + ' * ' + number;  // Добавить к строке с коммандой новое значение.
        return this;  // Вернуть экземпляр себя, на случай дальнейших комманд.
    }

    devide(number) {  // Если была выполнена эта команда, то обнолить метку pow1
        this.pow1.length = 0;
        this.command = this.command + ' / ' + number;  // Добавить к строке с коммандой новое значение.
        return this;  // Вернуть экземпляр себя, на случай дальнейших комманд.
    }

    pow(number) {
        if (number == 1) { // Если стпень 1,то ничего не возводить в степень, но записать в буфер факт этого.
            this.tempIndexOf = this.command.lastIndexOf(" ");
            this.temp = this.command.substring((this.tempIndexOf) + 1);
            this.pow1.push(this.temp);
        } else if (this.pow1.length == 0) // Если степень не еденица.
            for (var i = 1; i < number; i++) {  // Возводить в степень количество раз, указанное в ней.
                this.tempIndexOf = this.command.lastIndexOf(" ");  // Получить индекс начала последнего числа в команде.
                this.temp = this.command.substring((this.tempIndexOf) + 1); // Получить само последнее число в команде.
                this.temp = (+this.temp) * (+this.temp); // Умножить число само на себя, возведя таким образом 1 раз в степень
                this.command = this.command.slice(0, this.tempIndexOf + 1); // Убрать старое невозведённое последнее число.
                this.command = this.command + this.temp;  // Добавить результат к команде
            }
        return this;  // Вернуть экземпляр себя, на случай дальнейших комманд.
    }
};
module.exports = SmartCalculator;
