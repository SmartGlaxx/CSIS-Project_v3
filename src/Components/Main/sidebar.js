import { UseAppContext } from "../../context"
const SideBar = ()=>{
    const {changeColor} = UseAppContext()
    const colorsArray = ["red", "green","blue", "navy","white", "black"]
    return <div className="sidebar">
        <div className="sidebar-text">Item_Distance_Measure</div>
        {colorsArray.map((colorValue, i)=>{
            return <div key={i} style={{backgroundColor:`red`,color:`${colorValue}`}} 
            onClick={()=>changeColor(colorValue)}
            >
                {colorValue.toUpperCase()}
            </div>
        })}
        {/* <input type="color" id="favcolor" name="favcolor" value={background} onInput={(e)=>changeColor()}/> */}
    </div>
}

export default SideBar