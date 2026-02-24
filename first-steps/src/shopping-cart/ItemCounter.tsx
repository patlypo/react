import { useState } from "react";

import './ItemCounter.css';

interface Props{
    name:string;
    quantity?:number;
};

export const ItemCounter = ({name, quantity = 1}:Props) =>{

    const [count, setCount] = useState(quantity);
    
    
    const handleAdd = () => {
        setCount(count +1);
    };
    const handleSubtract = () => {
        setCount(count-1);
    };

    return(
        <section className="item-row"
        // style={{
        //     display:'flex',
        //     alignItems:'center',
        //     gap:10,
        //     padding:10,
        //     marginTop:9,
        // }}
        >
            <span className="item-text"
            style={{
                color: count == 0 ? 'red': 'white',
            }}
            >{name}</span>
            <button onClick={handleAdd}> +1 </button>
            <span>{count}</span>
            <button onClick={handleSubtract}>-1</button>
        </section>
    
    )
}