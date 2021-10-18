const Todo = ({id, task, removeToDo}) => {
    
    const removeDiv = divId => removeToDo(divId);

    return (
        <div id={id}>
            <p>{task}</p>
            <button onClick={()=> removeDiv(id)}>X</button>
        </div>
    )
}

export default Todo;