import "./style.css"
import { CellData } from "./cells"
import {useEffect, useRef, useState} from 'react' 
import Token3 from '../../assets/token_3.png'
import { UseAppContext } from "../../context"

export const Object3 = ()=>{
    // const {options3Value3,setOptions3Value3, token1XPos, token1YPos, token3XPos, setToken3XPos,
    //     token3YPos, setToken3YPos} = UseAppContext()
    
    const {options3Value3,setOptions3Value3, token3XPos, setToken3XPos,
        token3YPos, setToken3YPos, token1XPos, token1YPos, token2XPos, token2YPos,
         AToB, AToC, setAToB, moveXBy3, moveYBy3,  checkDistanceAToB, checkDistanceAToC} = UseAppContext()
    // const [moveXBy3, setMoveXBy3] = useState(0);
    // const [moveYBy3, setMoveYBy3] = useState(0);
    const [objMoveXBy3, setObjMoveXBy3] = useState(0);
    const [objMoveYBy3, setObjMoveYBy3] = useState(0);
//const [options3Value3, setOptions3Value3] = useState(false)
    const[moveAction3, setMoveAction3] = useState(false)
    const[disableBtn3, setDisableBtn3] = useState(false)
    const [moveToken3, setMoveToken3] = useState(false)
    const [noDrop3, setNoDrop3] = useState(false)
    

    // const [AToB, setAToB] = useState({main: 0.0, x: 0.0, y: 0.0})
    // const [AToC, setAToC] = useState({main: 0.0, x: 0.0, y: 0.0})
    // const [AToD, setAToD] = useState({main: 0.0, x: 0.0, y: 0.0})

    const [started3, setStarted3] = useState(false)

    const setDropAction3=(value)=>{
        setDisableBtn3(false)
        setNoDrop3(true)
        setObjMoveXBy3(moveXBy3)
        setObjMoveYBy3(moveYBy3)
        setMoveToken3(true) // object to be dropped
        setStarted3(true)
    }

    const setMotionObject3 = (objectID)=>{
        setMoveAction3(true)
        setNoDrop3(false)
        setDisableBtn3(true)
    }

    // const setCancelAction3 =()=>{
    //     setOptions3Value3(false)   
    // }

    // const showRefValue =(i)=>{
    //     setSideBoard(false)
    //     const selected = document.querySelector(`#${i}`);
        
    //     setMoveXBy3(Math.round(selected.getBoundingClientRect().x))
    //     setMoveYBy3(Math.round(selected.getBoundingClientRect().y))
    // }


    const showOptions3 =()=>{
        setOptions3Value3(!options3Value3)
        checkDist()
        // setSideBoard(false)
    }

    // setInterval(() => {
    //     checkDist()
    // }, 1000);
    useEffect(()=>{
        const item = document.querySelector(`#token3`);
        
        const token3XPos = item.getBoundingClientRect().x
        setToken3XPos(token3XPos)
        const token3YPos = item.getBoundingClientRect().y
        setToken3YPos(token3YPos)
        checkDistanceAToB()
        checkDistanceAToC()
    },[AToB, AToC])
//    console.log(token3YPos, token3XPos,"dddd")
    const checkDist =()=>{
        // const item = document.querySelector(`#token3`);
        
        // const token3XPos = item.getBoundingClientRect().x
        // setToken3XPos(token3XPos)
        // const token3YPos = item.getBoundingClientRect().y
        // setToken3YPos(token3YPos)
    
    //     const token3XPos = itemA.getBoundingClientRect().x
    //     const token3YPos = itemA.getBoundingClientRect().y
    //     const token3XPos = itemB.getBoundingClientRect().x
    //     const token3YPos = itemB.getBoundingClientRect().y

    //     const token3XPos = itemC.getBoundingClientRect().x
    //     const token3YPos = itemC.getBoundingClientRect().y
    //     const token4XPos = itemD.getBoundingClientRect().x
    //     const token4YPos = itemD.getBoundingClientRect().y

    //     // calc AtoB
    //     const xDistAToB = Math.abs(token3XPos - token3XPos).toFixed(3)
    //     const yDistAToB = Math.abs(token3YPos - token3YPos).toFixed(3)
    //     const distAToB = Math.sqrt(Math.pow(xDistAToB, 3) + Math.pow(yDistAToB, 3)).toFixed(3)
    //     setAToB({main: distAToB, x: xDistAToB, y: yDistAToB})

    //     // calc AtoC
    //     const xDistAToC = Math.abs(token3XPos - token3XPos).toFixed(3)
    //     const yDistAToC = Math.abs(token3YPos - token3YPos).toFixed(3)
    //     const distAToC = Math.sqrt(Math.pow(xDistAToC, 3) + Math.pow(yDistAToC, 3)).toFixed(3)
    //     setAToC({main: distAToC, x: xDistAToC, y: yDistAToC})

    //     // calc AtoD
    //     const xDistAToD = Math.abs(token3XPos - token4XPos).toFixed(3)
    //     const yDistAToD = Math.abs(token3YPos - token4YPos).toFixed(3)
    //     const distAToD = Math.sqrt(Math.pow(xDistAToD, 3) + Math.pow(yDistAToD, 3)).toFixed(3)
    //     setAToD({main: distAToD, x: xDistAToD, y: yDistAToD})
    }



    return <><div className={!started3 ? `token3 defaultClass3` : `token3 tokenSpace`} id="token3" 
        onClick={showOptions3}
            style={!moveToken3 || !moveAction3 ? null : {transform :`translate(${objMoveXBy3}px, ${objMoveYBy3}px)`}}
            > 
            <img src={Token3} alt="token3" className="token-pic-3"/>
            {/* when clicked show this list of object 3 obtions */}
        { options3Value3 && <div className="select-option" > 
            <h3>Token C</h3>
            <button 
            onClick={()=>setMotionObject3("token3")}
             disabled={disableBtn3}
              className="move-btn">Move</button>
            <button 
            // onClick={()=>setCancelAction3(true)} 
            className="cancel-btn">Cancel</button>
            <div>{AToB.main} from A</div>
            {/* <div>{AToC.main} from C</div>
            <div>{AToD.main} from D</div> */}
        </div>
        }
        </div>
        {/* end token 3 */}
        {<div className="board-options3" 
        // show box options nesr cursor when moveAction id true
        style={moveAction3 && !noDrop3 ? {transform:`translate(${moveXBy3}px, ${moveYBy3}px)`, zIndex:"10", display:"block"} : 
        {transform :`translate(${moveXBy3}px, ${moveYBy3}px)`, zIndex:"-10", display:"none"}}  >
            <button onClick={()=>setDropAction3(true)} disabled={!moveAction3} className="drop-btn">Drop</button>
        </div>}
        </>

}