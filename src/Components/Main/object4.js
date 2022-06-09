import "./style.css"
import { CellData } from "./cells"
import {useEffect, useRef, useState} from 'react' 
import Token4 from '../../assets/token_4.png'
import { UseAppContext } from "../../context"

export const Object4 = ()=>{    
    const {options4Value4,setOptions4Value4, token4XPos, setToken4XPos,
        token4YPos, setToken4YPos, token1XPos, token1YPos, token2XPos, token2YPos,
         AToB, AToC, AToD, BToC, BToD, CToD, setAToB, moveXBy4, moveYBy4,  checkDistanceAToB, checkDistanceAToC
        , checkDistanceAToD, checkDistanceBToC, checkDistanceBToD, checkDistanceCToD,
        started4, setStarted4} = UseAppContext()
    const [objMoveXBy4, setObjMoveXBy4] = useState(0);
    const [objMoveYBy4, setObjMoveYBy4] = useState(0);
    const[moveAction4, setMoveAction4] = useState(false)
    const[disableBtn4, setDisableBtn4] = useState(false)
    const [moveToken4, setMoveToken4] = useState(false)
    const [noDrop4, setNoDrop4] = useState(false)
    

    // const [started4, setStarted4] = useState(false)

    const setDropAction4=(value)=>{
        setDisableBtn4(false)
        setNoDrop4(true)
        setObjMoveXBy4(moveXBy4)
        setObjMoveYBy4(moveYBy4)
        setMoveToken4(true) // object to be dropped
        setStarted4(true)
    }

    const setMotionObject4 = (objectID)=>{
        setMoveAction4(true)
        setNoDrop4(false)
        setDisableBtn4(true)
    }


    const showOptions4 =()=>{
        setOptions4Value4(!options4Value4)
        // checkDist()
        // setSideBoard(false)
    }

    useEffect(()=>{
        const item = document.querySelector(`#token4`);
        
        const token4XPos = item.getBoundingClientRect().x
        setToken4XPos(token4XPos)
        const token4YPos = item.getBoundingClientRect().y
        setToken4YPos(token4YPos)
        checkDistanceAToB()
        checkDistanceAToC()
        checkDistanceAToD()
        checkDistanceBToC()
        checkDistanceBToD()
        checkDistanceCToD()
    },[AToD, BToD, CToD])

    return <><div className={!started4 ? `token4 defaultClass4` : `token4 tokenSpace`} id="token4" 
        onClick={showOptions4}
            style={!moveToken4 || !moveAction4 ? null : {transform :`translate(${objMoveXBy4}px, ${objMoveYBy4}px)`}}
            > 
            <img src={Token4} alt="token4" className="token-pic-4"/>
            {/* when clicked show this list of object 4 obtions */}
        { options4Value4 && <div className="select-option" > 
            <h3>Token D</h3>
            <button 
            onClick={()=>setMotionObject4("token4")}
             disabled={disableBtn4}
              className="move-btn">Move</button>
            <button className="cancel-btn">Cancel</button>
            <div>{AToD.main} from A</div>
            <div>{BToD.main} from B</div>
            <div>{CToD.main} from C</div>
        </div>
        }
        </div>
        {/* end token 4 */}
        {<div className="board-options4" 
        // show box options nesr cursor when moveAction id true
        style={moveAction4 && !noDrop4 ? {transform:`translate(${moveXBy4}px, ${moveYBy4}px)`, zIndex:"10", display:"block"} : 
        {transform :`translate(${moveXBy4}px, ${moveYBy4}px)`, zIndex:"-10", display:"none"}}  >
            <button onClick={()=>setDropAction4(true)} disabled={!moveAction4} className="drop-btn">Drop</button>
        </div>}
        </>

}