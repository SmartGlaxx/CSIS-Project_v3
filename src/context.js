import React, { useContext, useReducer } from "react";
import reducer from "./reducer"
const AppContext = React.createContext()
const SET_OPTIONS_1 = "SET_OPTIONS_1"; const SET_OPTIONS_2 = "SET_OPTIONS_2"; const TOKEN_1_X_POSITION = "TOKEN_1_X_POSITION"; 
const TOKEN_1_Y_POSITION = "TOKEN_1_Y_POSITION"; const TOKEN_2_X_POSITION = "TOKEN_2_X_POSITION"; 
const TOKEN_2_Y_POSITION = "TOKEN_2_Y_POSITION"; const SET_A_TO_B = "SET_A_TO_B";
const SET_MOVE_X_BY_1 = "SET_MOVE_X_BY_1"; const SET_MOVE_Y_BY_1 = "SET_MOVE_Y_BY_1";
const SET_MOVE_X_BY_2 = "SET_MOVE_X_BY_2"; const SET_MOVE_Y_BY_2 = "SET_MOVE_Y_BY_2";
const CHECK_DISTANCE_A_TO_B = "CHECK_DISTANCE_A_TO_B"

const initialState ={
    options1Value1: false,
    token1XPos : 0,
    token1YPos : 0,
    moveXBy1 : 0,
    moveYBy1 : 0,
    options1Value2 : false,
    token2XPos : 0,
    token2YPos : 0,
    moveXBy2 : 0,
    moveYBy2 : 0,
    AToB : {main: 0.0, x: 0.0, y: 0.0},
    backgroundC: "#0f0"
}
export const AppProvider = ({children})=>{
    const [state, dispatch] = useReducer(reducer, initialState)

    // const changeColor =(color)=>{
    //     console.log(color)
    //     // dispatch({type: "CHANGE_COLOR", payload: color})
    // }
    
// Token 1
    const setOptions1Value1 = (value)=>{
        dispatch({type:SET_OPTIONS_1, payload: value})
    }
    const setToken1XPos = (value)=>{
        dispatch({type: TOKEN_1_X_POSITION, payload: value})
    }
    const setToken1YPos = (value)=>{
        dispatch({type: TOKEN_1_Y_POSITION, payload: value})
    }
    const setMoveXBy1=(value)=>{
        const itemValue = Math.round(value.getBoundingClientRect().x)
        dispatch({type: SET_MOVE_X_BY_1, payload: itemValue})
    }
    const setMoveYBy1=(value)=>{
        const itemValue = Math.round(value.getBoundingClientRect().y)
        dispatch({type: SET_MOVE_Y_BY_1, payload: itemValue})
    }
    // Tpkem 2
    const setOptions2Value2 = (value)=>{
        dispatch({type:SET_OPTIONS_2, payload: value})
    }
    const setToken2XPos = (value)=>{
        dispatch({type: TOKEN_2_X_POSITION, payload: value})
    }
    const setToken2YPos = (value)=>{
        dispatch({type: TOKEN_2_Y_POSITION, payload: value})
    }
    const setMoveXBy2=(value)=>{
        const itemValue = Math.round(value.getBoundingClientRect().x)
        dispatch({type: SET_MOVE_X_BY_2, payload: itemValue})
    }
    const setMoveYBy2=(value)=>{
        const itemValue = Math.round(value.getBoundingClientRect().y)
        dispatch({type: SET_MOVE_Y_BY_2, payload: itemValue})
    }
    

    const setAToB = (value)=>{
        dispatch({type: SET_A_TO_B, payload: value})
    }
    
    const checkDistanceAToB =()=>{
        const xDistAToB = Math.abs(state.token1XPos - state.token2XPos).toFixed(2)
        const yDistAToB = Math.abs(state.token1YPos - state.token2YPos).toFixed(2)
        const distAToB = Math.sqrt(Math.pow(xDistAToB, 2) + Math.pow(yDistAToB, 2)).toFixed(2)
        dispatch({type: CHECK_DISTANCE_A_TO_B, payload: {main: distAToB, x: xDistAToB, y: yDistAToB}})
    }
   
    return <AppContext.Provider value={{
        ...state, setOptions1Value1, setOptions2Value2, setToken1XPos, setToken1YPos, setMoveXBy1, 
        setMoveYBy1, setToken2XPos, setToken2YPos, setMoveXBy2, setMoveYBy2, 
         setAToB, checkDistanceAToB
    }}>
    {children}
    </AppContext.Provider>
}

export const UseAppContext=()=>{
    return React.useContext(AppContext)
}