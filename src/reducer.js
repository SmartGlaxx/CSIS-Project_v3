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

     //Token 4
     case SET_OPTIONS_4:
        return {...state, options4Value4: action.payload};
        break;
    case TOKEN_4_X_POSITION:
        return {...state, token4XPos: action.payload};
        break;
    case TOKEN_4_Y_POSITION:
        return {...state, token4YPos: action.payload};
        break;
    case SET_MOVE_X_BY_4:
        return {...state, moveXBy4: action.payload};
        break;
    case SET_MOVE_Y_BY_4:
        return {...state, moveYBy4: action.payload};
        break;
   


    case CHECK_DISTANCE_A_TO_B:
        return {...state, AToB: action.payload};
        break;
    case CHECK_DISTANCE_A_TO_C:
        return {...state, AToC: action.payload};
        break;
    case CHECK_DISTANCE_A_TO_D:
        return {...state, AToD: action.payload};
        break;
    case CHECK_DISTANCE_B_TO_C:
        return {...state, BToC: action.payload};
        break;
    case CHECK_DISTANCE_B_TO_D:
        return {...state, BToD: action.payload};
        break;
    case CHECK_DISTANCE_C_TO_D:
        return {...state, CToD: action.payload};
        break;
    case SET_SIDEBOARD:
        return {...state, sideboard: action.payload}
        break;
    case SET_START:
        return {...state, start: action.payload}
        break;
    case SET_STARTED_2:
        return {...state, started2: action.payload}
        break;
    case SET_STARTED_4:
        return {...state, started4: action.payload}
        break;
        

        default :
            return {...state}
    }
    return state
}

export default reducer
