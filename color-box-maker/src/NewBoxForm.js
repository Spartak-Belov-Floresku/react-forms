import { useState } from "react";


const NewBoxForm = ({addBox}) => {

    const INITIAL_STATE = {
        color: 'red',
        width: 10,
        height: 10
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
        addBox({...formData});
        setFormData(INITIAL_STATE);
    }

    return(
        <form onSubmit={handleSubmit}>

            <label htmlFor="color">Color: </label>
            <select id="color" name="color" value={formData.color} onChange={handleChange}>
                <option value="red">Red</option>
                <option value="blue">Blue</option>
                <option value="green">Green</option>
                <option value="yellow">Yellow</option>
            </select>

            <label htmlFor="width">Width: {formData.width} px </label>
            <input
                id="width"
                type="range"
                name="width"
                min="10"
                max="200"
                value={formData.width}
                onChange={handleChange}
            />

            <label htmlFor="height">Height: {formData.height} px </label>
            <input
                id="height"
                type="range"
                name="height"
                min="10"
                max="200"
                value={formData.height}
                onChange={handleChange}
            />

            <button>Add DIV</button>

        </form>
    )




}

export default NewBoxForm;