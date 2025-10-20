//1task
export default class User {
  constructor(public name: string) {}

  greet(): string {
    return `Привет, меня зовут ${this.name}`;
  }
}
