import { useState } from "react";
import { v4 as uuid } from 'uuid';

import Box from "./Box";
import NewBoxForm from "./NewBoxForm";


const BoxList = () => {

    const [boxes, setBoxs] = useState([]);

    const addBox = newBox => setBoxs(boxes => [...boxes, {...newBox, id : uuid()}]);

    const removeBox = divId => setBoxs(boxes.filter(div => div.id !== divId));
    
    return (
        <>
        <NewBoxForm addBox={addBox}/>
            <div>
                {boxes.lenght !== 0? boxes.map(({ id, color, width, height }) => <Box id={id} color={color} width={parseInt(width)} height={parseInt(height)} key={id} removeBox={removeBox} />):''}
            </div>
        </>
    )
}

export default BoxList;