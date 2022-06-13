import React from "react";
import { action, initialState, initState } from "./reducer";

const TodoContext = React.createContext<[initialState,React.Dispatch<action>]>({} as any);
export default TodoContext;