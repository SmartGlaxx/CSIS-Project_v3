import "./style.css"
import { CellData } from "./cells"
import {useEffect, useRef, useState} from 'react' 
import Token2 from '../../assets/token_2.png'
import { UseAppContext } from "../../context"

export const Object2 = ()=>{
    // const {options2Value2,setOptions2Value2, token1XPos, token1YPos, token2XPos, setToken2XPos,
    //     token2YPos, setToken2YPos} = UseAppContext()
    
    const {options2Value2,setOptions2Value2, token2XPos, setToken2XPos,
        token2YPos, setToken2YPos, token1XPos, token1YPos, AToB, setAToB,
        moveXBy2, moveYBy2,  checkDistanceAToB} = UseAppContext()
    // const [moveXBy2, setMoveXBy2] = useState(0);
    // const [moveYBy2, setMoveYBy2] = useState(0);
    const [objMoveXBy2, setObjMoveXBy2] = useState(0);
    const [objMoveYBy2, setObjMoveYBy2] = useState(0);
//const [options2Value2, setOptions2Value2] = useState(false)
    const[moveAction2, setMoveAction2] = useState(false)
    const[disableBtn2, setDisableBtn2] = useState(false)
    const [moveToken2, setMoveToken2] = useState(false)
    const [noDrop2, setNoDrop2] = useState(false)
    

    // const [AToB, setAToB] = useState({main: 0.0, x: 0.0, y: 0.0})
    // const [AToC, setAToC] = useState({main: 0.0, x: 0.0, y: 0.0})
    // const [AToD, setAToD] = useState({main: 0.0, x: 0.0, y: 0.0})

    const [started2, setStarted2] = useState(false)

    const setDropAction2=(value)=>{
        setDisableBtn2(false)
        setNoDrop2(true)
        setObjMoveXBy2(moveXBy2)
        setObjMoveYBy2(moveYBy2)
        setMoveToken2(true) // object to be dropped
        setStarted2(true)
    }

    const setMotionObject2 = (objectID)=>{
        setMoveAction2(true)
        setNoDrop2(false)
        setDisableBtn2(true)
    }

    // const setCancelAction2 =()=>{
    //     setOptions2Value2(false)   
    // }

    // const showRefValue =(i)=>{
    //     setSideBoard(false)
    //     const selected = document.querySelector(`#${i}`);
        
    //     setMoveXBy2(Math.round(selected.getBoundingClientRect().x))
    //     setMoveYBy2(Math.round(selected.getBoundingClientRect().y))
    // }


    const showOptions2 =()=>{
        setOptions2Value2(!options2Value2)
        checkDist()
        // setSideBoard(false)
    }

    // setInterval(() => {
    //     checkDist()
    // }, 1000);
    useEffect(()=>{
        const item = document.querySelector(`#token2`);
        
        const token2XPos = item.getBoundingClientRect().x
        setToken2XPos(token2XPos)
        const token2YPos = item.getBoundingClientRect().y
        setToken2YPos(token2YPos)
        checkDistanceAToB()
    },[AToB])
//    console.log(token2YPos, token2XPos,"dddd")
    const checkDist =()=>{
        // const item = document.querySelector(`#token2`);
        
        // const token2XPos = item.getBoundingClientRect().x
        // setToken2XPos(token2XPos)
        // const token2YPos = item.getBoundingClientRect().y
        // setToken2YPos(token2YPos)
    
    //     const token2XPos = itemA.getBoundingClientRect().x
    //     const token2YPos = itemA.getBoundingClientRect().y
    //     const token2XPos = itemB.getBoundingClientRect().x
    //     const token2YPos = itemB.getBoundingClientRect().y

    //     const token3XPos = itemC.getBoundingClientRect().x
    //     const token3YPos = itemC.getBoundingClientRect().y
    //     const token4XPos = itemD.getBoundingClientRect().x
    //     const token4YPos = itemD.getBoundingClientRect().y

    //     // calc AtoB
    //     const xDistAToB = Math.abs(token2XPos - token2XPos).toFixed(2)
    //     const yDistAToB = Math.abs(token2YPos - token2YPos).toFixed(2)
    //     const distAToB = Math.sqrt(Math.pow(xDistAToB, 2) + Math.pow(yDistAToB, 2)).toFixed(2)
    //     setAToB({main: distAToB, x: xDistAToB, y: yDistAToB})

    //     // calc AtoC
    //     const xDistAToC = Math.abs(token2XPos - token3XPos).toFixed(2)
    //     const yDistAToC = Math.abs(token2YPos - token3YPos).toFixed(2)
    //     const distAToC = Math.sqrt(Math.pow(xDistAToC, 2) + Math.pow(yDistAToC, 2)).toFixed(2)
    //     setAToC({main: distAToC, x: xDistAToC, y: yDistAToC})

    //     // calc AtoD
    //     const xDistAToD = Math.abs(token2XPos - token4XPos).toFixed(2)
    //     const yDistAToD = Math.abs(token2YPos - token4YPos).toFixed(2)
    //     const distAToD = Math.sqrt(Math.pow(xDistAToD, 2) + Math.pow(yDistAToD, 2)).toFixed(2)
    //     setAToD({main: distAToD, x: xDistAToD, y: yDistAToD})
    }



    return <><div className={!started2 ? `token2 defaultClass2` : `token2 tokenSpace`} id="token2" 
        onClick={showOptions2}
            style={!moveToken2 || !moveAction2 ? null : {transform :`translate(${objMoveXBy2}px, ${objMoveYBy2}px)`}}
            > 
            <img src={Token2} alt="token2" className="token-pic-2"/>
            {/* when clicked show this list of object 2 obtions */}
        { options2Value2 && <div className="select-option" > 
            <h3>Token B</h3>
            <button 
            onClick={()=>setMotionObject2("token2")}
             disabled={disableBtn2}
              className="move-btn">Move</button>
            <button 
            // onClick={()=>setCancelAction2(true)} 
            className="cancel-btn">Cancel</button>
            <div>{AToB.main} from A</div>
            {/* <div>{AToC.main} from C</div>
            <div>{AToD.main} from D</div> */}
        </div>
        }
        </div>
        {/* end token 2 */}
        {<div className="board-options2" 
        // show box options nesr cursor when moveAction id true
        style={moveAction2 && !noDrop2 ? {transform:`translate(${moveXBy2}px, ${moveYBy2}px)`, zIndex:"20", display:"block"} : 
        {transform :`translate(${moveXBy2}px, ${moveYBy2}px)`, zIndex:"-20", display:"none"}}  >
            <button onClick={()=>setDropAction2(true)} disabled={!moveAction2} className="drop-btn">Drop</button>
        </div>}
        </>

}