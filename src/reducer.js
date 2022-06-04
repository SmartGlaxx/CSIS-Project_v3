const SET_OPTIONS_1 = "SET_OPTIONS_1"; 
const SET_OPTIONS_2 = "SET_OPTIONS_2";
const SET_OPTIONS_3 = "SET_OPTIONS_3";
const TOKEN_1_X_POSITION = "TOKEN_1_X_POSITION"; 
const TOKEN_1_Y_POSITION = "TOKEN_1_Y_POSITION"; 
const TOKEN_2_X_POSITION = "TOKEN_2_X_POSITION"; 
const TOKEN_2_Y_POSITION = "TOKEN_2_Y_POSITION"; 
const TOKEN_3_X_POSITION = "TOKEN_3_X_POSITION"; 
const TOKEN_3_Y_POSITION = "TOKEN_3_Y_POSITION"; 
const SET_A_TO_B = "SET_A_TO_B";
const SET_A_TO_C = "SET_A_TO_C";
const SET_MOVE_X_BY_1 = "SET_MOVE_X_BY_1"; 
const SET_MOVE_Y_BY_1 = "SET_MOVE_Y_BY_1";
const SET_MOVE_X_BY_2 = "SET_MOVE_X_BY_2"; 
const SET_MOVE_Y_BY_2 = "SET_MOVE_Y_BY_2";
const SET_MOVE_X_BY_3 = "SET_MOVE_X_BY_3"; 
const SET_MOVE_Y_BY_3 = "SET_MOVE_Y_BY_3";
const CHECK_DISTANCE_A_TO_B = "CHECK_DISTANCE_A_TO_B"
const CHECK_DISTANCE_A_TO_C = "CHECK_DISTANCE_A_TO_C"

const reducer =(state, action)=>{
    switch(action.type){
        //Token 1
        case SET_OPTIONS_1:
            return {...state, options1Value1: action.payload};
            break;
        case TOKEN_1_X_POSITION:
            return {...state, token1XPos: action.payload};
            break;
        case TOKEN_1_Y_POSITION:
            return {...state, token1YPos: action.payload};
            break;
        case SET_A_TO_B:
            return {...state, AToB: action.payload};
            break;
        case SET_MOVE_X_BY_1:
            return {...state, moveXBy1: action.payload};
            break;
        case SET_MOVE_Y_BY_1:
            return {...state, moveYBy1: action.payload};
            break;
        //Token 2
        case SET_OPTIONS_2:
            return {...state, options2Value2: action.payload};
            break;
        case TOKEN_2_X_POSITION:
            return {...state, token2XPos: action.payload};
            break;
        case TOKEN_2_Y_POSITION:
            return {...state, token2YPos: action.payload};
            break;
        case SET_MOVE_X_BY_2:
            return {...state, moveXBy2: action.payload};
            break;
        case SET_MOVE_Y_BY_2:
            return {...state, moveYBy2: action.payload};
            break;
        case CHECK_DISTANCE_A_TO_B:
            return {...state, AToB: action.payload};
            break;
    
     //Token 3
     case SET_OPTIONS_3:
        return {...state, options3Value3: action.payload};
        break;
    case TOKEN_3_X_POSITION:
        return {...state, token3XPos: action.payload};
        break;
    case TOKEN_3_Y_POSITION:
        return {...state, token3YPos: action.payload};
        break;
    case SET_MOVE_X_BY_3:
        return {...state, moveXBy3: action.payload};
        break;
    case SET_MOVE_Y_BY_3:
        return {...state, moveYBy3: action.payload};
        break;
    case CHECK_DISTANCE_A_TO_C:
        return {...state, AToC: action.payload};
        break;



        default :
            return {...state}
    }
    return state
}

export default reducer
