import React, { useRef, useState } from 'react'
export const Counter = () => {
    const [count, setCount] = useState(0);
    let val = useRef(0);
    const handleClick = () => {
        setCount(count => count + 1)
        setCount(count => count + 1)
        setCount(count => count + 1)
        val.current++;
        console.log(val.current)
    }
    return (
        <div>
            <p>{count}</p>
            <button className='border-2 border-black' onClick={handleClick}>Click Me</button>
        </div>
    )
}
