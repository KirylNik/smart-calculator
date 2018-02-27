class SmartCalculator {
    constructor(value) {
        this.command = '' + value;  // Тут будем накапливать команду.
        this.array = []; // Массив для сохранения всех комманд.
        this.ValueOf =  function() { return eval(this.command) };
        this.toString =  function() { return eval(this.command) };
    }

    add(number) {
        this.command = this.command + ' + ' + number;
        return this;
    }

    subtract(number) {
        this.command = this.command + ' - ' + number;
        return this;
    }

    multiply(number) {
        this.command = this.command + ' * ' + number;
        return this;
    }

    devide(number) {
        this.command = this.command + ' / ' + number;
        return this;
    }

    pow(number) {
        this.tempIndexOf = this.command.lastIndexOf(" ");
        this.temp = this.command.substring((this.tempIndexOf) + 1);
        this.temp = (+this.temp) * (+this.temp);
        this.command = this.command.slice(0, this.tempIndexOf + 1);
        this.command = this.command + this.temp;
        return this;
    }
};
module.exports = SmartCalculator;
