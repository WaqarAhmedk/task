import React ,{useState,useEffect}from 'react'

export default function MultiplierComponent() {
    const [num, setNum] = useState();
    const [ans, setAns] = useState(0)
    let cnum = 6;

    window.addEventListener('change', () => {

        const a = localStorage.getItem("num");
        setNum(a);
        setAns(-5 * a);

    })
    // useEffect(()=>{

    // },[num])
    return (
        <center style={{
            border: "1px solid black",
            marginTop: "20px",
            paddingLeft: "50px",
            padding: "20px"
        }}>
            <span>{cnum}*{num}</span>
            <div style={{
                marginTop: "20px",
                marginLeft: "90%",
                border: "1px solid black",
                padding: "10px"
            }}>
                <span>{ans}</span>
            </div>
        </center>)
}

