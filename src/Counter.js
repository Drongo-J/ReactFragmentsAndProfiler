import React, { useRef, useState } from 'react'

export default function Counter() {
    let countRef = useRef(0);
    const [state, setState] = useState(0);


    function handle()
    {
        countRef.current = countRef.current + 1;
        console.log(countRef.current);
    }

    function handleClickState(){
        setState(state + 1);
    }

    return( 
        <div>
            <button onClick={handle}>You clicked {countRef.current} times</button>
            <button onClick={handleClickState}>You clicked {state} times</button>
        </div>
    )
}

