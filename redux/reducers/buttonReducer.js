import { CLICK_BUTTON } from "../types";

const initialState = {
    buttonIsOn: false,
};

export default (state = initialState, action) => {
    if(state.buttonIsOn == false){
        switch (action.type){
            case CLICK_BUTTON:
                return {...state, buttonIsOn: state.buttonIsOn = true };

                default:
                    return state;
        }
    } else {
        switch (action.type){
            case CLICK_BUTTON:
                return {...state, buttonIsOn: state.buttonIsOn = false };

                default:
                    return state;
        }        
    }
}