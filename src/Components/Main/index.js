import "./style.css"
import { CellData } from "./cells"
import {useEffect, useRef, useState} from 'react' 
import Token1 from '../../assets/token_1.png'
import Token2 from '../../assets/token_2.png'
import Token3 from '../../assets/token_3.png'
import Token4 from '../../assets/token_4.png'

import { FaBars, FaBorderAll, FaImage, FaToggleOn, FaToggleOff } from "react-icons/fa";


const visible = {
    display:"block"
}
const Main = ()=>{
    const element = useRef()
    // const {backgroundC} = UseAppContext()
    const [moveXBy1, setMoveXBy1] = useState(0);
    const [moveYBy1, setMoveYBy1] = useState(0);
    const [moveXBy2, setMoveXBy2] = useState(0);
    const [moveYBy2, setMoveYBy2] = useState(0);
    const [moveXBy3, setMoveXBy3] = useState(0);
    const [moveYBy3, setMoveYBy3] = useState(0);
    const [moveXBy4, setMoveXBy4] = useState(0);
    const [moveYBy4, setMoveYBy4] = useState(0);
    const [objMoveXBy1, setObjMoveXBy1] = useState(0);
    const [objMoveYBy1, setObjMoveYBy1] = useState(0);
    const [objMoveXBy2, setObjMoveXBy2] = useState(0);
    const [objMoveYBy2, setObjMoveYBy2] = useState(0);
    const [objMoveXBy3, setObjMoveXBy3] = useState(0);
    const [objMoveYBy3, setObjMoveYBy3] = useState(0);
    const [objMoveXBy4, setObjMoveXBy4] = useState(0);
    const [objMoveYBy4, setObjMoveYBy4] = useState(0);
    const [options1Value1, setOptions1Value1] = useState(false)
    const [options1Value2, setOptions1Value2] = useState(false)
    const [options1Value3, setOptions1Value3] = useState(false)
    const [options1Value4, setOptions1Value4] = useState(false)
    const[moveAction1, setMoveAction1] = useState(false)
    const[moveAction2, setMoveAction2] = useState(false)
    const[moveAction3, setMoveAction3] = useState(false)
    const[moveAction4, setMoveAction4] = useState(false)
    const[disableBtn1, setDisableBtn1] = useState(false)
    const[disableBtn2, setDisableBtn2] = useState(false)
    const[disableBtn3, setDisableBtn3] = useState(false)
    const[disableBtn4, setDisableBtn4] = useState(false)
    const [moveToken1, setMoveToken1] = useState(false)
    const [moveToken2, setMoveToken2] = useState(false)
    const [moveToken3, setMoveToken3] = useState(false)
    const [moveToken4, setMoveToken4] = useState(false)
    const [noDrop1, setNoDrop1] = useState(false)
    const [noDrop2, setNoDrop2] = useState(false)
    const [noDrop3, setNoDrop3] = useState(false)
    const [noDrop4, setNoDrop4] = useState(false)
    const [started2, setStarted2] = useState(false)
    const [started3, setStarted3] = useState(false)
    const [started4, setStarted4] = useState(false)

    const [AToB, setAToB] = useState({main: 0.0, x: 0.0, y: 0.0})
    const [AToC, setAToC] = useState({main: 0.0, x: 0.0, y: 0.0})
    const [AToD, setAToD] = useState({main: 0.0, x: 0.0, y: 0.0})
    const [BToC, setBToC] = useState({main: 0.0, x: 0.0, y: 0.0})
    const [BToD, setBToD] = useState({main: 0.0, x: 0.0, y: 0.0})
    const [CToD, setCToD] = useState({main: 0.0, x: 0.0, y: 0.0})

    const [sideboard, setSideBoard] = useState(false)
    const [checkboardOn, setCheckboardOn] = useState(false)
    
    const setDropAction1=(value)=>{
        setDisableBtn1(false)
        setNoDrop1(true)
        setObjMoveXBy1(moveXBy1)
        setObjMoveYBy1(moveYBy1)

        setMoveToken1(true) // object to be dropped
    }
    const setDropAction2=(value)=>{
        setDisableBtn2(false)
        setNoDrop2(true)
        setObjMoveXBy2(moveXBy2)
        setObjMoveYBy2(moveYBy2)
        setMoveToken2(true) // object to be dropped
        setStarted2(true)
    }
    const setDropAction3=(value)=>{
        setDisableBtn3(false)
        setNoDrop3(true)
        setObjMoveXBy3(moveXBy2)
        setObjMoveYBy3(moveYBy2)
        setMoveToken3(true) // object to be dropped
        setStarted3(true)
    }
    const setDropAction4=(value)=>{
        setDisableBtn4(false)
        setNoDrop4(true)
        setObjMoveXBy4(moveXBy2)
        setObjMoveYBy4(moveYBy2)
        setMoveToken4(true) // object to be dropped
        setStarted4(true)
    }
    const setMotionObject1 = (objectID)=>{
        setMoveAction1(true)
        setNoDrop1(false)
        setDisableBtn1(true)
    }
    const setMotionObject2 = (objectID)=>{
        setMoveAction2(true)
        setNoDrop2(false)
        setDisableBtn2(true)
    }
    const setMotionObject3 = (objectID)=>{
        setMoveAction3(true)
        setNoDrop3(false)
        setDisableBtn3(true)
    }
    const setMotionObject4 = (objectID)=>{
        setMoveAction4(true)
        setNoDrop4(false)
        setDisableBtn4(true)
    }
    const setCancelAction1 =()=>{
        setOptions1Value1(false)   
    }
    const setCancelAction2 =()=>{
        setOptions1Value2(false)   
    }
    const setCancelAction3 =()=>{
        setOptions1Value3(false)   
    }
    const setCancelAction4 =()=>{
        setOptions1Value4(false)   
    }
    const showRefValue =(i)=>{
        setSideBoard(false)
        const selected = document.querySelector(`#${i}`);
        
        setMoveXBy1(Math.round(selected.getBoundingClientRect().x))
        setMoveYBy1(Math.round(selected.getBoundingClientRect().y))
       
        setMoveXBy2(Math.round(selected.getBoundingClientRect().x))
        setMoveYBy2(Math.round(selected.getBoundingClientRect().y))

        setMoveXBy3(Math.round(selected.getBoundingClientRect().x))
        setMoveYBy3(Math.round(selected.getBoundingClientRect().y))

        setMoveXBy4(Math.round(selected.getBoundingClientRect().x))
        setMoveYBy4(Math.round(selected.getBoundingClientRect().y))
        
        // if(selected.getBoundingClientRect().x - moveXBy1 < 100 || 
        // selected.getBoundingClientRect().y - moveYBy1 < 100){
        //     setBackground()
        // }else{
        //     alert("morte than 100")
        // }
    }

    const setBackground=()=>{
        
    }

    const showOptions1 =()=>{
        setOptions1Value1(!options1Value1)
        checkDist()
        setSideBoard(false)
    }
    const showOptions2 =()=>{
        setOptions1Value2(!options1Value2)
        checkDist()
        setSideBoard(false)
    }
    const showOptions3 =()=>{
        setOptions1Value3(!options1Value3)
        checkDist()
        setSideBoard(false)
    }
    const showOptions4 =()=>{
        setOptions1Value4(!options1Value4)
        checkDist()
        setSideBoard(false)
    }
 
    setInterval(() => {
        checkDist()
    }, 1000);
   
    const checkDist =()=>{
        const itemA = document.querySelector(`#token1`);
        const itemB = document.querySelector(`#token2`);
        const itemC = document.querySelector(`#token3`);
        const itemD = document.querySelector(`#token4`);

        const token1XPos = itemA.getBoundingClientRect().x
        const token1YPos = itemA.getBoundingClientRect().y
        const token2XPos = itemB.getBoundingClientRect().x
        const token2YPos = itemB.getBoundingClientRect().y

        const token3XPos = itemC.getBoundingClientRect().x
        const token3YPos = itemC.getBoundingClientRect().y
        const token4XPos = itemD.getBoundingClientRect().x
        const token4YPos = itemD.getBoundingClientRect().y
        

        // calc AtoB
        const xDistAToB = Math.abs(token1XPos - token2XPos).toFixed(2)
        const yDistAToB = Math.abs(token1YPos - token2YPos).toFixed(2)
        const distAToB = Math.sqrt(Math.pow(xDistAToB, 2) + Math.pow(yDistAToB, 2)).toFixed(2)
        setAToB({main: distAToB, x: xDistAToB, y: yDistAToB})

        // calc AtoC
        const xDistAToC = Math.abs(token1XPos - token3XPos).toFixed(2)
        const yDistAToC = Math.abs(token1YPos - token3YPos).toFixed(2)
        const distAToC = Math.sqrt(Math.pow(xDistAToC, 2) + Math.pow(yDistAToC, 2)).toFixed(2)
        setAToC({main: distAToC, x: xDistAToC, y: yDistAToC})

        // calc AtoD
        const xDistAToD = Math.abs(token1XPos - token4XPos).toFixed(2)
        const yDistAToD = Math.abs(token1YPos - token4YPos).toFixed(2)
        const distAToD = Math.sqrt(Math.pow(xDistAToD, 2) + Math.pow(yDistAToD, 2)).toFixed(2)
        setAToD({main: distAToD, x: xDistAToD, y: yDistAToD})

         // calc BtoC
         const xDistBToC = Math.abs(token2XPos - token3XPos).toFixed(2)
         const yDistBToC = Math.abs(token2YPos - token3YPos).toFixed(2)
         const distBToC = Math.sqrt(Math.pow(xDistBToC, 2) + Math.pow(yDistBToC, 2)).toFixed(2)
         setBToC({main: distBToC, x: xDistBToC, y: yDistBToC})
         
         // calc BtoD
         const xDistBToD = Math.abs(token2XPos - token4XPos).toFixed(2)
         const yDistBToD = Math.abs(token2YPos - token4YPos).toFixed(2)
         const distBToD = Math.sqrt(Math.pow(xDistBToD, 2) + Math.pow(yDistBToD, 2)).toFixed(2)
         setBToD({main: distBToD, x: xDistBToD, y: yDistBToD})
         
         // calc CtoD
         const xDistCToD = Math.abs(token3XPos - token4XPos).toFixed(2)
         const yDistCToD = Math.abs(token3YPos - token4YPos).toFixed(2)
         const distCToD = Math.sqrt(Math.pow(xDistCToD, 2) + Math.pow(yDistCToD, 2)).toFixed(2)
         setCToD({main: distCToD, x: xDistCToD, y: yDistCToD})
    }
    const setSideBoardValue =()=>{
        setSideBoard(!sideboard)
    }

    const setCheckboardValue = ()=>{
        setCheckboardOn(!checkboardOn)
    }

    return<>
        <div className="background">
            CSIS-1280
        </div>
        <section className='cellBoard' >
        {
            CellData.map((item,i) =>{
                
                for(let i = 0; i<= 36; i++){
                    return <><div key={i + 1} id= {item.idValue} 
                    style={checkboardOn ? {background : item.background} : {background: "none"}}
                    onClick={()=>showRefValue(item.idValue)}>
                        </div>
                        {/* start token 1 */}
                        {/* click to select an option */}
                        <div className="token1" id="token1" onClick={showOptions1}
                          style={!moveToken1 || !moveAction1 ? null : {transform :`translate(${objMoveXBy1}px, ${objMoveYBy1}px)`}}> 
                            <img src={Token1} alt="token1" className="token-pic-1"/>
                            {/* when clicked show this list of object 1 obtions */}
                        { options1Value1 && <div className="select-option" > 
                            <h3>Token A</h3>
                            <button onClick={()=>setMotionObject1("token1")} disabled={disableBtn1} className="move-btn">Move</button>
                            <button onClick={()=>setCancelAction1(true)} className="cancel-btn">Cancel</button>
                            <div>{AToB.main} from B</div>
                            <div>{AToC.main} from C</div>
                            <div>{AToD.main} from D</div>
                        </div>
                        }
                        </div>
                        {/* end token 1 */}
                        {/* start token 2 */}
                        <div className={!started2 ? `token2 defaultClass2` : `token2 tokenSpace`} id="token2" onClick={showOptions2}
                          style={!moveToken2 || !moveAction2 ? null : {transform :`translate(${objMoveXBy2}px, ${objMoveYBy2}px)`}}> 
                            <img src={Token2} id="token2" alt="token2" className="token-pic-2"/>
                            {/* when clicked show this list of object 1 obtions */}
                        { options1Value2 && <div className="select-option" > 
                            <h3>Token B</h3>
                            <button onClick={()=>setMotionObject2("token2")} disabled={disableBtn2} className="move-btn">Move</button>
                            <button onClick={()=>setCancelAction2(true)} className="cancel-btn">Cancel</button>
                            <div>{AToB.main} from A</div>
                            <div>{BToC.main} from C</div>
                            <div>{BToD.main} from D</div>
                        </div>
                        }
                        </div>
                        {/* end token 2 */}
                        {/* start token 3 */}
                        <div className={!started3 ? `token3 defaultClass3` : `token3`} id="token3" onClick={showOptions3}
                          style={!moveToken3 || !moveAction3 ? null : {transform :`translate(${objMoveXBy3}px, ${objMoveYBy3}px)`}}> 
                            <img src={Token3} id="token3" alt="token3" className="token-pic-3"/>
                            {/* when clicked show this list of object 1 obtions */}
                        { options1Value3 && <div className={started3 ? `select-option` : `select-option alt-move`} > 
                            <h3>Token C</h3>
                            <button onClick={()=>setMotionObject3("token3")} disabled={disableBtn3} className="move-btn">Move</button>
                            <button onClick={()=>setCancelAction3(true)}  className="cancel-btn">Cancel</button>
                            <div>{AToC.main} from A</div>
                            <div>{BToC.main} from B</div>
                            <div>{CToD.main} from D</div>
                        </div>
                        }
                        </div>
                        {/* end token 3 */}
                        {/* start token 4 */}
                        <div className={!started4 ? `token4 defaultClass4` : `token4 tokenSpace`} id="token4" onClick={showOptions4}
                          style={!moveToken4 || !moveAction4 ? null : {transform :`translate(${objMoveXBy4}px, ${objMoveYBy4}px)`}}> 
                            <img src={Token4} id="token4" alt="token4" className="token-pic-4"/>
                            {/* when clicked show this list of object 1 obtions */}
                        { options1Value4 && <div className={started4 ? `select-option` : `select-option alt-move`} > 
                        <h3>Token D</h3>
                            <button onClick={()=>setMotionObject4("token4")} disabled={disableBtn4} className="move-btn">Move</button>
                            <button onClick={()=>setCancelAction4(true)} className="cancel-btn">Cancel</button>
                            <div>{AToD.main} from A</div>
                            <div>{BToD.main} from B</div>
                            <div>{CToD.main} from C</div>
                        </div>
                        }
                        </div>
                        {/* end token 4 */}
                        </>
                }
                
            })
        }
        
    {<div className="board-options1" 
    // show box options nesr cursor when moveAction id true
    style={moveAction1 && !noDrop1 ? {transform:`translate(${moveXBy1}px, ${moveYBy1}px)`, zIndex:"10", display:"block"} : 
    {transform :`translate(${moveXBy1}px, ${moveYBy1}px)`, zIndex:"-10", display:"none"}}  >
        <button onClick={()=>setDropAction1(true)} disabled={!moveAction1} className="drop-btn">Drop</button>
    </div>}
    {<div className="board-options2" 
    // show box options nesr cursor when moveAction id true
    style={moveAction2 && !noDrop2 ? {transform:`translate(${moveXBy2}px, ${moveYBy2}px)`, zIndex:"10", display:"block"} : 
    {transform :`translate(${moveXBy2}px, ${moveYBy2}px)`, zIndex:"-10", display:"none"}} 
    >
        <button onClick={()=>setDropAction2(true)} disabled={!moveAction2} className="drop-btn">Drop</button> 
    </div>}
    {<div className="board-options3" 
    // show box options nesr cursor when moveAction id true
    style={moveAction3 && !noDrop3 ? {transform:`translate(${moveXBy3}px, ${moveYBy3}px)`, zIndex:"10", display:"block"} : 
    {transform :`translate(${moveXBy3}px, ${moveYBy3}px)`, zIndex:"-10", display:"none"}} 
    >
        <button onClick={()=>setDropAction3(true)} disabled={!moveAction3} className="drop-btn">Drop</button> 
    </div>}
    {<div className="board-options4" 
    // show box options nesr cursor when moveAction id true
    style={moveAction4 && !noDrop4 ? {transform:`translate(${moveXBy4}px, ${moveYBy4}px)`, zIndex:"10", display:"block"} : 
    {transform :`translate(${moveXBy4}px, ${moveYBy4}px)`, zIndex:"-10", display:"none"}} 
    >
        <button onClick={()=>setDropAction4(true)} disabled={!moveAction4} className="drop-btn">Drop</button> 
    </div>}
    <div className="sidebar" onClick={setSideBoardValue}>
        <FaBars />
    </div>
    <div className="sideboard" style={sideboard? {transform:"translateX(0%)", width:"15rem", transition:"all 0.5s"} : 
    {transform: "translateX(100%)", width:"15rem", transition:"all 2s"}}>
        {checkboardOn ? <FaImage onClick={setCheckboardValue} className="toggle-btn"/> : 
        <FaBorderAll onClick={setCheckboardValue} className="toggle-btn"/>}
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
        </article>
        <br/>
        <div className="credit">
            Design by: Smart U. Egbuchulem
        </div>
    </div>
    </section></>
}

export default Main