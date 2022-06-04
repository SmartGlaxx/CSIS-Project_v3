import "./style.css"
import { CellData } from "./cells"
import {useEffect, useRef, useState} from 'react' 
import Token1 from '../../assets/token_1.png'
import { UseAppContext } from "../../context"

export const Object1 = ()=>{
    const {options1Value1,setOptions1Value1, token1XPos, setToken1XPos,
        token1YPos, setToken1YPos, token2XPos, token2YPos, token3XPos, token3YPos, 
        AToB, AToC, setAToB, moveXBy1, moveYBy1, checkDistanceAToB,checkDistanceAToC} = UseAppContext()
    // const [moveXBy1, setMoveXBy1] = useState(0);
    // const [moveYBy1, setMoveYBy1] = useState(0);
    const [objMoveXBy1, setObjMoveXBy1] = useState(0);
    const [objMoveYBy1, setObjMoveYBy1] = useState(0);
//const [options1Value1, setOptions1Value1] = useState(false)
     const[moveAction1, setMoveAction1] = useState(false)
    const[disableBtn1, setDisableBtn1] = useState(false)
const [moveToken1, setMoveToken1] = useState(false)
    const [noDrop1, setNoDrop1] = useState(false)

    // const [AToB, setAToB] = useState({main: 0.0, x: 0.0, y: 0.0})
    // const [AToC, setAToC] = useState({main: 0.0, x: 0.0, y: 0.0})
    // const [AToD, setAToD] = useState({main: 0.0, x: 0.0, y: 0.0})

    const setDropAction1=(value)=>{
        setDisableBtn1(false)
        setNoDrop1(true)
        setObjMoveXBy1(moveXBy1)
        setObjMoveYBy1(moveYBy1)

        setMoveToken1(true) // object to be dropped

        checkDistanceAToB()
        checkDistanceAToC()
    }

    const setMotionObject1 = (objectID)=>{
        setMoveAction1(true)
        setNoDrop1(false)
        setDisableBtn1(true)
    }

    // const setCancelAction1 =()=>{
    //     setOptions1Value1(false)   
    // }

    // const showRefValue =(i)=>{
    //     setSideBoard(false)
    //     const selected = document.querySelector(`#${i}`);
        
    //     setMoveXBy1(Math.round(selected.getBoundingClientRect().x))
    //     setMoveYBy1(Math.round(selected.getBoundingClientRect().y))
    // }


    const showOptions1 =()=>{
        setOptions1Value1(!options1Value1)
        checkDist()
        // setSideBoard(false)
    }

    // setInterval(() => {
    //     checkDist()
    // }, 1000);

    useEffect(()=>{
        const item = document.querySelector(`#token1`);
        
        const token1XPos = item.getBoundingClientRect().x
        setToken1XPos(token1XPos)
        const token1YPos = item.getBoundingClientRect().y
        setToken1YPos(token1YPos)
         checkDistanceAToB()
         checkDistanceAToC()
        },[AToB, AToC])
   
    const checkDist =()=>{
        // const item = document.querySelector(`#token1`);
    
        // const token1XPos = item.getBoundingClientRect().x
        // setToken1XPos(token1XPos)
        // const token1YPos = item.getBoundingClientRect().y
        // setToken1YPos(token1YPos)
        
        // checkDistanceAToB()
    //     const token2XPos = itemB.getBoundingClientRect().x
    //     const token2YPos = itemB.getBoundingClientRect().y
    //     const token3XPos = itemC.getBoundingClientRect().x
    //     const token3YPos = itemC.getBoundingClientRect().y
    //     const token4XPos = itemD.getBoundingClientRect().x
    //     const token4YPos = itemD.getBoundingClientRect().y

    //     // calc AtoB
        // const xDistAToB = Math.abs(token1XPos - token2XPos).toFixed(2)
        // const yDistAToB = Math.abs(token1YPos - token2YPos).toFixed(2)
        // const distAToB = Math.sqrt(Math.pow(xDistAToB, 2) + Math.pow(yDistAToB, 2)).toFixed(2)
        // setAToB({main: distAToB, x: xDistAToB, y: yDistAToB})

    //     // calc AtoC
    //     const xDistAToC = Math.abs(token1XPos - token3XPos).toFixed(2)
    //     const yDistAToC = Math.abs(token1YPos - token3YPos).toFixed(2)
    //     const distAToC = Math.sqrt(Math.pow(xDistAToC, 2) + Math.pow(yDistAToC, 2)).toFixed(2)
    //     setAToC({main: distAToC, x: xDistAToC, y: yDistAToC})

    //     // calc AtoD
    //     const xDistAToD = Math.abs(token1XPos - token4XPos).toFixed(2)
    //     const yDistAToD = Math.abs(token1YPos - token4YPos).toFixed(2)
    //     const distAToD = Math.sqrt(Math.pow(xDistAToD, 2) + Math.pow(yDistAToD, 2)).toFixed(2)
    //     setAToD({main: distAToD, x: xDistAToD, y: yDistAToD})
    }


    return <div style={{position:"absolute"}}>
        {/* start token 1 */}
        {/* click to select an option */}
        <div className="token1" id="token1" 
         onClick={showOptions1}
             style={!moveToken1 || !moveAction1 ? null : {transform :`translate(${objMoveXBy1}px, ${objMoveYBy1}px)`}}
            > 
            <img src={Token1} alt="token1" className="token-pic-1"/>
            {/* when clicked show this list of object 1 obtions */}
        { options1Value1 && <div className="select-option" > 
            <h3>Token A</h3>
            <button 
            onClick={()=>setMotionObject1("token1")}
             disabled={disableBtn1}
              className="move-btn">Move</button>
            <button 
            // onClick={()=>setCancelAction1(true)} 
            className="cancel-btn">Cancel</button>
            <div>{AToB.main} from B</div>
            {/* <div>{AToC.main} from C</div>
            <div>{AToD.main} from D</div> */}
        </div>
        }
        </div>
        {/* end token 1 */}
        {<div className="board-options1" 
        // show box options nesr cursor when moveAction id true
        // style={moveAction1 ? {transform:`translate(${moveXBy1}px, ${moveYBy1}px)`, zIndex:"10", display:"block"} : 
    style={moveAction1 && !noDrop1 ? {transform:`translate(${moveXBy1}px, ${moveYBy1}px)`, zIndex:"10", display:"block"} : 
        {transform :`translate(${moveXBy1}px, ${moveYBy1}px)`, zIndex:"-10", display:"none"}}  >
            <button onClick={()=>setDropAction1(true)} disabled={!moveAction1} className="drop-btn">Drop</button>
        </div>} 
    </div>

}