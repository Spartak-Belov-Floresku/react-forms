const Box = ({id, color, width, height, removeBox}) => {

    const removeDiv = divId => removeBox(divId);
    
    return (
        <div id={id} style={{"backgroundColor": color, "width": width, "height":height}}>
            <button onClick={() => removeDiv(id)}>X</button>
        </div>
    )
}

export default Box;