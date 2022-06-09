import { useEffect, useState } from "react";
import "./style.css"
import { CellData } from "./cells";
import { Object1 } from "./object1";
import { Object2 } from "./object2";
import { Object3 } from "./object3";
import { Object4 } from "./object4";
import { UseAppContext } from "../../context";
import CellBlock2 from "./cellBlock2";

import { FaBars, FaBorderAll, FaImage, FaToggleOn, FaToggleOff } from "react-icons/fa";

const Main2 = ()=>{
    const {checkDistanceAToB,checkDistanceAToC, checkDistanceAToD, checkDistanceBToC, checkDistanceBToD, checkDistanceCToD,
        setRefValue,AToB, AToC, AToD, BToC, BToD, CToD, setAToB, moveXBy1, token1XPos, token1YPos, token2XPos, token2YPos,
        setMoveXBy1, setMoveYBy1, setMoveXBy2, setMoveYBy2, 
        setMoveXBy3, setMoveYBy3, setMoveXBy4, setMoveYBy4, 
        sideboard, setSideBoard,start, setStart} = UseAppContext()
   
    // useEffect(()=>{
    //     checkDistanceAToB()
    // },[AToB])
    const showRefValue =(value)=>{
        checkDistanceAToB()
        checkDistanceAToC()
        checkDistanceAToD()

        checkDistanceBToC()
        checkDistanceBToD()
        checkDistanceCToD()
        //setSideBoard(false)
        const selected = document.querySelector(`#${value}`);
        
        setMoveXBy1(selected)
        setMoveYBy1(selected)

        setMoveXBy2(selected)
        setMoveYBy2(selected)

        setMoveXBy3(selected)
        setMoveYBy3(selected)

        setMoveXBy4(selected)
        setMoveYBy4(selected)
       
        // setMoveXBy2(Math.round(selected.getBoundingClientRect().x))
        // setMoveYBy2(Math.round(selected.getBoundingClientRect().y))

        // checkDistanceAToB()
}


const setSideBoardValue =()=>{
    setSideBoard(!sideboard)
}

    return <div className='cellBoard'>
        <CellBlock2 />
    {/* {
        CellData.map((item,i) =>{
            return <div key={i + 1} id= {item.idValue} 
            style={{background: item.background}}
            onClick={()=>showRefValue(item.idValue)}
            >
               distance to A
            </div>
        })
    } */}
         
    <Object1 />
    <Object2 />
    <Object3 />
    <Object4 />
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
        <article>
            <strong>A to C</strong>
            <div>Direct distance: {AToC.main}</div>
            <div>Distance on X-Axis: {AToC.x}</div>
            <div>Distance on Y-Axis: {AToC.y}</div>
        </article><br/>
        <article>
            <strong>A to D</strong>
            <div>Direct distance: {AToD.main}</div>
            <div>Distance on X-Axis: {AToD.x}</div>
            <div>Distance on Y-Axis: {AToD.y}</div>
        </article><br/>

        <article>
            <strong>B to C</strong>
            <div>Direct distance: {BToC.main}</div>
            <div>Distance on X-Axis: {BToC.x}</div>
            <div>Distance on Y-Axis: {BToC.y}</div>
        </article><br/>
        <article>
            <strong>B to D</strong>
            <div>Direct distance: {BToD.main}</div>
            <div>Distance on X-Axis: {BToD.x}</div>
            <div>Distance on Y-Axis: {BToD.y}</div>
        </article><br/>
        <article>
            <strong>C to D</strong>
            <div>Direct distance: {CToD.main}</div>
            <div>Distance on X-Axis: {CToD.x}</div>
            <div>Distance on Y-Axis: {CToD.y}</div>
        </article><br/>
    <button 
    style={{position:"absolute"}} className="toggle-regions"
     onClick={()=>setStart(!start)}
     >{start ? `Hide Regions`: `Show Regions`}
     </button>
    </aside>
    </div>
}

export default Main2