import { name, city, getMessage } from "./lib.js";
import TodoService from "./todo.service.js";

import Message, { message} from "./message.js";

console.log(name, city, getMessage())
let todoservice = new TodoService()