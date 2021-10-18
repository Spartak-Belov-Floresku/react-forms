import { useState } from "react";

const NewTodoForm = ({addToDo}) => {
    const INITIAL_STATE ={
        task:''
    }

    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = e => {
        setFormData(formData => ({
            ...formData,
            [e.target.name]: e.target.value
        }));
    }

    const handleSubmit = e => {
        e.preventDefault();
        addToDo({...formData});
        setFormData(INITIAL_STATE);
    }

    return(
        <form onSubmit={handleSubmit}>
           <label htmlFor="task">Add new task: </label>
            <input
                id="task"
                type="text"
                name="task"
                placeholder="New task to do"
                value={formData.task}
                onChange={handleChange}
            />
            <button>Add Task</button>
        </form>
    )
}

export default NewTodoForm;