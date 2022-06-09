import { useEffect, useState } from "react";
import "./style.css"
import { CellData } from "./cells";
import { UseAppContext } from "../../context";

const CellBlock2 = ()=>{
    const {checkDistanceAToB, checkDistanceAToC, checkDistanceAToD, checkDistanceBToC, 
        token1XPos, token1YPos, token2XPos, token2YPos, token3XPos, token3YPos, token4XPos, token4YPos,
        checkDistanceBToD, checkDistanceCToD,
        moveXBy1,  setMoveXBy1, setMoveYBy1, setMoveXBy2, setMoveYBy2, 
        setMoveXBy3, setMoveYBy3, setMoveXBy4, setMoveYBy4,
        setSideBoard, started2, started4, start} = UseAppContext()
const [value, setValue] = useState(0)
    // const callThis =(e)=>{
    // console.log(e.target.value)
    // }

    const showRefValue =(value)=>{
        checkDistanceAToB()
        checkDistanceAToC()
        checkDistanceAToD()
        checkDistanceBToC()
        checkDistanceBToD()
        checkDistanceCToD()
        
        const selected = document.querySelector(`#${value}`);
        
        setMoveXBy1(selected)
        setMoveYBy1(selected)

        setMoveXBy2(selected)
        setMoveYBy2(selected)

        setMoveXBy3(selected)
        setMoveYBy3(selected)

        setMoveXBy4(selected)
        setMoveYBy4(selected)

        setSideBoard(false)
           
}

// const twoTrue=(value)=>{

//         //  return document.querySelector(`#${value}`).getBoundingClientRect().x < 200 ? true : false
         
//     // const e  = document.querySelector(`#${value}`).getBoundingClientRect().x
//     // if(e < 200){
//     //     return true
//     // }else{
//     //     return false
//     // }
// }


// setTimeout(() => {
//     setShadesValue(1)
// }, 3000);

// setTimeout(() => {
//     setShadesValue(1)
//     alert(shadesValue)    
// }, 3000);
  
    return <div className='cellBoard'>
    {
        CellData.map((item,i) =>{
            // setInterval(()=>{twoTrue(item.idValue)})
            return <div key={i + 1} id= {item.idValue} className='cellBoard2'
            style={{background: item.background}}
            onClick={()=>showRefValue(item.idValue)}
            >
                {start &&<>
                {/* intersection A and B */}
                {
                    (Math.abs(token1XPos - document.querySelector(`#${item.idValue}`).getBoundingClientRect().x) < 200 &&
                    Math.abs(token1YPos - document.querySelector(`#${item.idValue}`).getBoundingClientRect().y) < 200) 
                    &&
                    (Math.abs(token2XPos - document.querySelector(`#${item.idValue}`).getBoundingClientRect().x) < 200 &&
                    Math.abs(token2YPos - document.querySelector(`#${item.idValue}`).getBoundingClientRect().y) < 200 )
                    &&  <div style={{background:"none"}} className="innerCells"></div>
                }
                {/* intersection A and C */}
                {
                    (Math.abs(token1XPos - document.querySelector(`#${item.idValue}`).getBoundingClientRect().x) < 200 &&
                    Math.abs(token1YPos - document.querySelector(`#${item.idValue}`).getBoundingClientRect().y) < 200) 
                    &&
                    (Math.abs(token3XPos - document.querySelector(`#${item.idValue}`).getBoundingClientRect().x) < 200 &&
                    Math.abs(token3YPos - document.querySelector(`#${item.idValue}`).getBoundingClientRect().y) < 200 )
                    &&  <div style={{background:"none"}} className="innerCells"></div>
                }
                {/* intersection A and D */}
                {
                    (Math.abs(token1XPos - document.querySelector(`#${item.idValue}`).getBoundingClientRect().x) < 200 &&
                    Math.abs(token1YPos - document.querySelector(`#${item.idValue}`).getBoundingClientRect().y) < 200) 
                    &&
                    (Math.abs(token4XPos - document.querySelector(`#${item.idValue}`).getBoundingClientRect().x) < 200 &&
                    Math.abs(token4YPos - document.querySelector(`#${item.idValue}`).getBoundingClientRect().y) < 200 )
                    &&  <div style={{background:"none"}} className="innerCells"></div>
                }

                {/* intersection B and C */}
                {
                    (Math.abs(token2XPos - document.querySelector(`#${item.idValue}`).getBoundingClientRect().x) < 200 &&
                    Math.abs(token2YPos - document.querySelector(`#${item.idValue}`).getBoundingClientRect().y) < 200) 
                    &&
                    (Math.abs(token3XPos - document.querySelector(`#${item.idValue}`).getBoundingClientRect().x) < 200 &&
                    Math.abs(token3YPos - document.querySelector(`#${item.idValue}`).getBoundingClientRect().y) < 200 )
                    &&  <div style={{background:"none"}} className="innerCells"></div>
                }
                {/* intersection B and D */}
                {
                    (Math.abs(token2XPos - document.querySelector(`#${item.idValue}`).getBoundingClientRect().x) < 200 &&
                    Math.abs(token2YPos - document.querySelector(`#${item.idValue}`).getBoundingClientRect().y) < 200) 
                    &&
                    (Math.abs(token4XPos - document.querySelector(`#${item.idValue}`).getBoundingClientRect().x) < 200 &&
                    Math.abs(token4YPos - document.querySelector(`#${item.idValue}`).getBoundingClientRect().y) < 200 )
                    &&  <div style={{background:"none"}} className="innerCells"></div>
                }
                {/* intersection C and D */}
                {
                    (Math.abs(token3XPos - document.querySelector(`#${item.idValue}`).getBoundingClientRect().x) < 200 &&
                    Math.abs(token3YPos - document.querySelector(`#${item.idValue}`).getBoundingClientRect().y) < 200) 
                    &&
                    (Math.abs(token4XPos - document.querySelector(`#${item.idValue}`).getBoundingClientRect().x) < 200 &&
                    Math.abs(token4YPos - document.querySelector(`#${item.idValue}`).getBoundingClientRect().y) < 200 )
                    &&  <div style={{background:"none"}} className="innerCells"></div>
                }



                {/* Region A */}
                {
                    Math.abs(token1XPos - document.querySelector(`#${item.idValue}`).getBoundingClientRect().x) < 200 &&
                    Math.abs(token1YPos - document.querySelector(`#${item.idValue}`).getBoundingClientRect().y) < 200 
                    && <div style={{background:"rgba(200,200,200,0.7)"}} className="innerCells"></div>
                }
                {/* Region B */}
                {
                    started2 ? 
                    Math.abs(token2XPos - document.querySelector(`#${item.idValue}`).getBoundingClientRect().x) < 200 &&
                    Math.abs(token2YPos - document.querySelector(`#${item.idValue}`).getBoundingClientRect().y) < 200 
                    &&  <div style={{background:"rgba(100,100,0,0.7)"}} className="innerCells"></div> 
                    :
                    Math.abs(token2XPos - document.querySelector(`#${item.idValue}`).getBoundingClientRect().x) < 300 &&
                    Math.abs(token2YPos - document.querySelector(`#${item.idValue}`).getBoundingClientRect().y) < 200 
                    &&  <div style={{background:"rgba(100,100,0,0.7)"}} className="innerCells"></div>
                } 
                {/* Region C */}
                {
                    Math.abs(token3XPos - document.querySelector(`#${item.idValue}`).getBoundingClientRect().x) < 200 &&
                    Math.abs(token3YPos - document.querySelector(`#${item.idValue}`).getBoundingClientRect().y) < 200 
                    && <div style={{background:"rgba(0,0,200,0.7)"}} className="innerCells"></div>
                }
                {/* Region D */}
                {
                    started4 ? 
                    Math.abs(token4XPos - document.querySelector(`#${item.idValue}`).getBoundingClientRect().x) < 200 &&
                    Math.abs(token4YPos - document.querySelector(`#${item.idValue}`).getBoundingClientRect().y) < 200 
                    &&  <div style={{background:"rgba(100,0,0,0.7)"}} className="innerCells"></div>
                    :
                    Math.abs(token4XPos - document.querySelector(`#${item.idValue}`).getBoundingClientRect().x) < 300 &&
                    Math.abs(token4YPos - document.querySelector(`#${item.idValue}`).getBoundingClientRect().y) < 200 
                    &&  <div style={{background:"rgba(100,0,0,0.7)"}} className="innerCells"></div>
                }
                </>}
            </div>
        })
    }
    {/* <button style={{position:"absolute"}} className="toggle-regions"
     onClick={()=>setStart(!start)}>{start ? `Hide Regions`: `Show Regions`}
     </button> */}
    </div>
}

export default CellBlock2