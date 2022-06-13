import { action, initialState } from "./reducer";

export const logger = (reducer: (state: initialState, action: action) => initialState) => {
    return (prevState: initialState, action: action) => {
        console.group(action.type);
        console.log('Prev state: ', prevState);
        console.log('Action: ', action);
        const newState = reducer(prevState, action);
        console.log('Next state: ', newState);
        console.groupEnd();
        return newState;
    }
}

export default logger;