import React, { useContext, useReducer } from "react";
import reducer from "./reducer"
const AppContext = React.createContext()
const SET_OPTIONS_1 = "SET_OPTIONS_1"; 
const SET_OPTIONS_2 = "SET_OPTIONS_2";
const SET_OPTIONS_3 = "SET_OPTIONS_3";
const SET_OPTIONS_4 = "SET_OPTIONS_4";
const TOKEN_1_X_POSITION = "TOKEN_1_X_POSITION"; 
const TOKEN_1_Y_POSITION = "TOKEN_1_Y_POSITION"; 
const TOKEN_2_X_POSITION = "TOKEN_2_X_POSITION"; 
const TOKEN_2_Y_POSITION = "TOKEN_2_Y_POSITION"; 
const TOKEN_3_X_POSITION = "TOKEN_3_X_POSITION"; 
const TOKEN_3_Y_POSITION = "TOKEN_3_Y_POSITION"; 
const TOKEN_4_X_POSITION = "TOKEN_4_X_POSITION"; 
const TOKEN_4_Y_POSITION = "TOKEN_4_Y_POSITION"; 
const SET_A_TO_B = "SET_A_TO_B";
const SET_A_TO_C = "SET_A_TO_C";
const SET_A_TO_D = "SET_A_TO_D";
const SET_MOVE_X_BY_1 = "SET_MOVE_X_BY_1"; 
const SET_MOVE_Y_BY_1 = "SET_MOVE_Y_BY_1";
const SET_MOVE_X_BY_2 = "SET_MOVE_X_BY_2"; 
const SET_MOVE_Y_BY_2 = "SET_MOVE_Y_BY_2";
const SET_MOVE_X_BY_3 = "SET_MOVE_X_BY_3"; 
const SET_MOVE_Y_BY_3 = "SET_MOVE_Y_BY_3";
const SET_MOVE_X_BY_4 = "SET_MOVE_X_BY_4"; 
const SET_MOVE_Y_BY_4 = "SET_MOVE_Y_BY_4";
const CHECK_DISTANCE_A_TO_B = "CHECK_DISTANCE_A_TO_B"
const CHECK_DISTANCE_A_TO_C = "CHECK_DISTANCE_A_TO_C"
const CHECK_DISTANCE_A_TO_D = "CHECK_DISTANCE_A_TO_D"
const CHECK_DISTANCE_B_TO_C = "CHECK_DISTANCE_B_TO_C"
const CHECK_DISTANCE_B_TO_D = "CHECK_DISTANCE_B_TO_D"
const CHECK_DISTANCE_C_TO_D = "CHECK_DISTANCE_C_TO_D"
const SET_SIDEBOARD = "SET_SIDEBOARD"
const SET_START = "SET_START"
const SET_STARTED_2 = "SET_STARTED_2"
const SET_STARTED_4 = "SET_STARTED_4"

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
    options1Value3 : false,
    token3XPos : 0,
    token3YPos : 0,
    moveXBy3 : 0,
    moveYBy3 : 0,
    options1Value4 : false,
    token4XPos : 0,
    token4YPos : 0,
    moveXBy4 : 0,
    moveYBy4 : 0,
    AToB : {main: 0.0, x: 0.0, y: 0.0},
    AToC : {main: 0.0, x: 0.0, y: 0.0},
    AToD : {main: 0.0, x: 0.0, y: 0.0},
    BToC : {main: 0.0, x: 0.0, y: 0.0},
    BToD : {main: 0.0, x: 0.0, y: 0.0},
    CToD : {main: 0.0, x: 0.0, y: 0.0},
    sideBoard : false,
    started2 : false,
    started4 : false,
    start : false,
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
    
    // Tpkem 3
    const setOptions3Value3 = (value)=>{
        dispatch({type:SET_OPTIONS_3, payload: value})
    }
    const setToken3XPos = (value)=>{
        dispatch({type: TOKEN_3_X_POSITION, payload: value})
    }
    const setToken3YPos = (value)=>{
        dispatch({type: TOKEN_3_Y_POSITION, payload: value})
    }
    const setMoveXBy3=(value)=>{
        const itemValue = Math.round(value.getBoundingClientRect().x)
        dispatch({type: SET_MOVE_X_BY_3, payload: itemValue})
    }
    const setMoveYBy3=(value)=>{
        const itemValue = Math.round(value.getBoundingClientRect().y)
        dispatch({type: SET_MOVE_Y_BY_3, payload: itemValue})
    }

    // Tpkem 4
    const setOptions4Value4 = (value)=>{
        dispatch({type:SET_OPTIONS_4, payload: value})
    }
    const setToken4XPos = (value)=>{
        dispatch({type: TOKEN_4_X_POSITION, payload: value})
    }
    const setToken4YPos = (value)=>{
        dispatch({type: TOKEN_4_Y_POSITION, payload: value})
    }
    const setMoveXBy4=(value)=>{
        const itemValue = Math.round(value.getBoundingClientRect().x)
        dispatch({type: SET_MOVE_X_BY_4, payload: itemValue})
    }
    const setMoveYBy4=(value)=>{
        const itemValue = Math.round(value.getBoundingClientRect().y)
        dispatch({type: SET_MOVE_Y_BY_4, payload: itemValue})
    }

    const setAToB = (value)=>{
        dispatch({type: SET_A_TO_B, payload: value})
    }
    const setAToC = (value)=>{
        dispatch({type: SET_A_TO_C, payload: value})
    }
    const setAToD = (value)=>{
        dispatch({type: SET_A_TO_D, payload: value})
    }
    
    const checkDistanceAToB =()=>{
        const xDistAToB = Math.abs(state.token1XPos - state.token2XPos).toFixed(2)
        const yDistAToB = Math.abs(state.token1YPos - state.token2YPos).toFixed(2)
        const distAToB = Math.sqrt(Math.pow(xDistAToB, 2) + Math.pow(yDistAToB, 2)).toFixed(2)
        dispatch({type: CHECK_DISTANCE_A_TO_B, payload: {main: distAToB, x: xDistAToB, y: yDistAToB}})
    }
   
    const checkDistanceAToC =()=>{
        const xDistAToC = Math.abs(state.token1XPos - state.token3XPos).toFixed(2)
        const yDistAToC = Math.abs(state.token1YPos - state.token3YPos).toFixed(2)
        const distAToC = Math.sqrt(Math.pow(xDistAToC, 2) + Math.pow(yDistAToC, 2)).toFixed(2)
        dispatch({type: CHECK_DISTANCE_A_TO_C, payload: {main: distAToC, x: xDistAToC, y: yDistAToC}})
    }

    const checkDistanceAToD =()=>{
        const xDistAToD = Math.abs(state.token1XPos - state.token4XPos).toFixed(2)
        const yDistAToD = Math.abs(state.token1YPos - state.token4YPos).toFixed(2)
        const distAToD = Math.sqrt(Math.pow(xDistAToD, 2) + Math.pow(yDistAToD, 2)).toFixed(2)
        dispatch({type: CHECK_DISTANCE_A_TO_D, payload: {main: distAToD, x: xDistAToD, y: yDistAToD}})
    }

    const checkDistanceBToC =()=>{
        const xDistBToC = Math.abs(state.token2XPos - state.token3XPos).toFixed(2)
        const yDistBToC = Math.abs(state.token2YPos - state.token3YPos).toFixed(2)
        const distBToC = Math.sqrt(Math.pow(xDistBToC, 2) + Math.pow(yDistBToC, 2)).toFixed(2)
        dispatch({type: CHECK_DISTANCE_B_TO_C, payload: {main: distBToC, x: xDistBToC, y: yDistBToC}})
    }

    const checkDistanceBToD =()=>{
        const xDistBToD = Math.abs(state.token2XPos - state.token4XPos).toFixed(2)
        const yDistBToD = Math.abs(state.token2YPos - state.token4YPos).toFixed(2)
        const distBToD = Math.sqrt(Math.pow(xDistBToD, 2) + Math.pow(yDistBToD, 2)).toFixed(2)
        dispatch({type: CHECK_DISTANCE_B_TO_D, payload: {main: distBToD, x: xDistBToD, y: yDistBToD}})
    }

    const checkDistanceCToD =()=>{
        const xDistCToD = Math.abs(state.token3XPos - state.token4XPos).toFixed(2)
        const yDistCToD = Math.abs(state.token3YPos - state.token4YPos).toFixed(2)
        const distCToD = Math.sqrt(Math.pow(xDistCToD, 2) + Math.pow(yDistCToD, 2)).toFixed(2)
        dispatch({type: CHECK_DISTANCE_C_TO_D, payload: {main: distCToD, x: xDistCToD, y: yDistCToD}})
    }

    const setSideBoard =(value)=>{
        dispatch({type: SET_SIDEBOARD, payload : value})
    }

    const setStart = (value)=>{
        dispatch({type: SET_START, payload: value})
    }
    const setStarted2 = (value)=>{
        dispatch({type: SET_STARTED_2, payload: value})
    }
    const setStarted4 = (value)=>{
        dispatch({type: SET_STARTED_4, payload: value})
    }
    return <AppContext.Provider value={{
        ...state, setOptions1Value1, setOptions2Value2, setOptions3Value3, setOptions4Value4, 
        setToken1XPos, setToken1YPos, setToken2XPos, setToken2YPos,
        setToken3XPos, setToken3YPos, setToken4XPos, setToken4YPos,
        setMoveXBy1, setMoveYBy1, setMoveXBy2, setMoveYBy2, 
        setMoveXBy3, setMoveYBy3, setMoveXBy4, setMoveYBy4, 
        setAToB, setAToC, setAToD, 
        checkDistanceAToB, checkDistanceAToC, checkDistanceAToD, 
        checkDistanceBToC, checkDistanceBToD, checkDistanceCToD,
        setSideBoard, setStarted2, setStarted4, setStart
    }}>
    {children}
    </AppContext.Provider>
}

export const UseAppContext=()=>{
    return React.useContext(AppContext)
}