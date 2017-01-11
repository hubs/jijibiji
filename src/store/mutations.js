import * as types from "./mutations-types";
export default {
    [types.METHOD_TITLE](state,{title}){
        state.title=title;
    }
}