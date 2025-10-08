import React, { useEffect, useState } from 'react'



function CounterPage() {

    const [count, setCount] = useState(0)

    // useEffect(() => {
    //     setCount(count + 1)


    // }, [])





    return (

        <>

            <button onClick={(e) => { setCount(count + 1) }} style={{ height: 200, marginLeft: 5 }}>{count}</button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={(e) => { setCount(count - 1) }} style={{ height: 200, }}>{count}</button>


        </>
    )

}

export default CounterPage

