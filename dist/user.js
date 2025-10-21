//1task
export default class User {
    constructor(name) {
        this.name = name;
    } //constructor - это специальный метод внутри класса, который автоматически вызывается, когда создаётся новый объект этого класса. public - модификатор доступа. Он говорит, что свойство name будет доступно снаружи
    greet() {
        return `Привет, меня зовут ${this.name}`; //this - как бы говорит, возьми name именно у этого объекта
    }
}
//# sourceMappingURL=user.js.map