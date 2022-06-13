import React, { useReducer } from "react";
import TodoContext from './context';
import logger from "./logger";
import { initState, reducer } from "./reducer";
interface Props {
    children: React.ReactNode;
}

export default function Provider({children}:Props){
    const [state, dispatch] = useReducer(logger(reducer),initState);
    return (
       <TodoContext.Provider value={[state, dispatch]}>
       {children}
       </TodoContext.Provider>
    )
}
