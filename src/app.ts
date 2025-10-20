//1task
import { add, PI } from "./math";
import User from "./user";

const user = new User("Александр");
console.log(add(5, 3));           
console.log(user.greet());        
console.log(PI);                  
//2task
import { APP_NAME as appName, VERSION as ver } from "./constants";

console.log(`${appName} ${ver}`);
//3task !!!!! не установлен lodash
import { uppercased } from "./data";

console.log(uppercased);