import { job } from "../todo-list/service";

export interface initialState {
    job: string;
    jobs: job[];
}

export interface action {
    type: string,
    payload: any
}

export const initState: initialState = {
    job: "",
    jobs: []
}

let newState;
export const randomId = () => {
    return Math.floor(Math.random() * 1000).toString();
}


export const reducer = (state: initialState, action: action): initialState => {
    switch (action.type) {
        case "SET_JOB":
            newState = {
                ...state,
                job: action.payload
            }
            break;
        case "ADD_JOB":
            newState = {
                ...state,
                jobs: [...state.jobs, { jobId: randomId(), description: action.payload }]
            }
            break;
        case "DELETE_JOB":
            newState = {
                ...state,
                jobs: [...state.jobs.filter(i => i.jobId !== action.payload)]
            }
            break;
        default:
            throw new Error('Invalid action.')
    }
    return newState;
}