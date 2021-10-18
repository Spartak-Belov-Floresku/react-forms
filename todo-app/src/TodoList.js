import { useState  } from "react";
import { v4 as uuid } from 'uuid';

import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

const TodoList = () => {
   
    const[todos, setToDos] = useState([]);

    const addToDo = newToDo => setToDos(todos => [...todos, {...newToDo, id: uuid()}]);

    const removeToDo = divId => setToDos(todos.filter(div => div.id !== divId));

    return (
        <>
        <NewTodoForm addToDo={addToDo} />
        {todos.lenght !== 0? todos.map(({id, task}) => <Todo id={id} task={task} key={id} removeToDo={removeToDo} />):''}
        </>
    )
}

export default TodoList;