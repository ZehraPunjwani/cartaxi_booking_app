import update from "react-addons-update";
import constants from "./actionConstants";

// const {} = constants;

const ACTION_HANDLES = {

};
const initialState = {};

export function HomeReducer (state = initialState, action){
    const handler = ACTION_HANDLES[action.types];
    return handler ? handler(state, action) : state;
}