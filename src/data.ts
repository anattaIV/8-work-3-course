import * as _ from "lodash"; // import * as _ - мы импортируем все функции из библиотеки lodash и даём им общее имя _. Теперь можно использовать любые функции lodash, например, _.map, _.filter, _.cloneDeep и другие.
// lodash — это удобная библиотека для работы с массивами, объектами и прочими структурами данных.
const words: string[] = ["apple", "banana", "cherry"]; 
const uppercase = _.map(words, (word: string) => word.toUpperCase());

console.log(uppercase); 

export { uppercase };
