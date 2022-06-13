import React, { useContext } from "react"
import TodoContext from "./context"
import { action, initialState } from "./reducer";

export const useStore = ():[initialState,React.Dispatch<action>]=>{
    const [state,dispatch] = useContext(TodoContext);
    return [state, dispatch];
}