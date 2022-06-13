export const setJob = (payload:string) =>({
    type:"SET_JOB",
    payload
})

export const addJob = (payload:string)=>({
    type:"ADD_JOB",
    payload
})

export const deleteJob = (payload:string)=>(
    {
        type:"DELETE_JOB",
        payload
    })