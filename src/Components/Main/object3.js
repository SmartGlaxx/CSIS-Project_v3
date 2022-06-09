import "./style.css"
import { CellData } from "./cells"
import {useEffect, useRef, useState} from 'react' 
import Token3 from '../../assets/token_3.png'
import { UseAppContext } from "../../context"

export const Object3 = ()=>{    
    const {options3Value3,setOptions3Value3, token3XPos, setToken3XPos,
        token3YPos, setToken3YPos, token1XPos, token1YPos, token2XPos, token2YPos,
        AToB, AToC, AToD, BToC, BToD, CToD, setAToB, moveXBy3, moveYBy3,  checkDistanceAToB, checkDistanceAToC
         , checkDistanceAToD, checkDistanceBToC, checkDistanceBToD, checkDistanceCToD} = UseAppContext()
    const [objMoveXBy3, setObjMoveXBy3] = useState(0);
    const [objMoveYBy3, setObjMoveYBy3] = useState(0);
    const[moveAction3, setMoveAction3] = useState(false)
    const[disableBtn3, setDisableBtn3] = useState(false)
    const [moveToken3, setMoveToken3] = useState(false)
    const [noDrop3, setNoDrop3] = useState(false)
    

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


    const showOptions3 =()=>{
        setOptions3Value3(!options3Value3)
        // checkDist()
        // setSideBoard(false)
    }


    useEffect(()=>{
        const item = document.querySelector(`#token3`);
        
        const token3XPos = item.getBoundingClientRect().x
        setToken3XPos(token3XPos)
        const token3YPos = item.getBoundingClientRect().y
        setToken3YPos(token3YPos)
        checkDistanceAToB()
        checkDistanceAToC()
        checkDistanceAToD()
        checkDistanceBToC()
        checkDistanceBToD()
        checkDistanceCToD()
    },[AToC,BToC,CToD])

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
            <button className="cancel-btn">Cancel</button>
            <div>{AToC.main} from A</div>
            <div>{BToC.main} from B</div>
            <div>{CToD.main} from D</div>
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