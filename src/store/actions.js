import * as types from "./mutations-types";
export const setTitle = ({commit}, title)=> {
    console.log("HAHAHA = "+title);
    commit(types.METHOD_TITLE, {title})
};