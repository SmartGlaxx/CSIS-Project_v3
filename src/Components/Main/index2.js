import { useEffect, useState } from "react";
import "./style.css"
import { CellData } from "./cells";
import { Object1 } from "./object1";
import { Object2 } from "./object2";
import { UseAppContext } from "../../context";

import { FaBars, FaBorderAll, FaImage, FaToggleOn, FaToggleOff } from "react-icons/fa";

const Main2 = ()=>{
    const {checkDistanceAToB,setRefValue,AToB, moveXBy1, token1XPos, token1YPos, token2XPos, token2YPos,
        setMoveXBy1, setMoveYBy1, setMoveXBy2, setMoveYBy2} = UseAppContext()
    const [sideboard, setSideBoard] = useState(false)
   
    // useEffect(()=>{
    //     checkDistanceAToB()
    // },[AToB])
    const showRefValue =(value)=>{
        checkDistanceAToB()
        //setSideBoard(false)
        const selected = document.querySelector(`#${value}`);
        
        setMoveXBy1(selected)
        setMoveYBy1(selected)

        setMoveXBy2(selected)
        setMoveYBy2(selected)
       
        // setMoveXBy2(Math.round(selected.getBoundingClientRect().x))
        // setMoveYBy2(Math.round(selected.getBoundingClientRect().y))

        checkDistanceAToB()
}


const setSideBoardValue =()=>{
    setSideBoard(!sideboard)
}

    return <div className='cellBoard'>
    {
        CellData.map((item,i) =>{
            return <div key={i + 1} id= {item.idValue} 
            style={{background: item.background}}
            onClick={()=>showRefValue(item.idValue)}
            >
               
            </div>
        })
    }
         
    <Object1 />
    <Object2 />
    <div className="sidebar" onClick={setSideBoardValue}>
        <FaBars />
    </div>
    <aside className="sideboard" style={sideboard? {transform:"translateX(0%)", width:"15rem", transition:"all 0.5s"} : 
    {transform: "translateX(100%)", width:"15rem", transition:"all 2s"}}>
        <h3>Details of Relative Distance</h3>
        <article>
            <strong>A to B</strong>
            <div>Direct distance: {AToB.main}</div>
            <div>Distance on X-Axis: {AToB.x}</div>
            <div>Distance on Y-Axis: {AToB.y}</div>
        </article><br/>
        </aside>
    </div>
}

export default Main2