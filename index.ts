import axios from "axios";
const url = "https://jsonplaceholder.typicode.com/todos/2";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then((res) => {
  const todo = res.data as Todo;
  //console.log(todo.iD)
  const id = todo.id;
  const completed = todo.completed;
  const title = todo.title;

  console.log(res.data);
});
// in order to compile ts file, go to terminal, then <tsc index.ts>

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
     The todo with id: ${id}
     Has a title of: ${title}
     Is it finished? ${completed}
    `);
};
