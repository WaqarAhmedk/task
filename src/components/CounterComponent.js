import React, { useState ,useEffect} from 'react'

export default function CounterComponent() {

    const [num, setNum] = useState(1);

    useEffect(() => {

      
            localStorage.setItem("num", num);
            window.dispatchEvent(new Event("change"))
            console.log(num);
        
    }, [num])
    return (
        <div style={{
            border: "1px solid black",
            marginTop: "20px",
            paddingLeft: "50px",
            padding: "50px"
        }}>

            <button style={{
                marginRight: "60px"
            }} onClick={() => {
                setNum(num + 1)
            }}>
                +
            </button>
            <span style={{
                marginRight: "60px",

            }}>{
                    num
                }</span>
            <button onClick={() => {
                setNum(num - 1)
            }}>
                -
            </button>
        </div>
    )
}
