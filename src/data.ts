//3task
import _ from "lodash";

const words = ["apple", "banana", "cherry"];
const uppercased = _.map(words, (word) => word.toUpperCase());

console.log(uppercased); // ["APPLE", "BANANA", "CHERRY"]

export { uppercased };