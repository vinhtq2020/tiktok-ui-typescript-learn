import { useRef } from "react";
import { actions, useStore } from "../store";


export const TodoList = () => {
    const [state, dispatch] = useStore();    
    const { job, jobs } = state;
    const inputRef = useRef<any>(null);
    return (
        <div>
            <form ref={inputRef} >
                <input type="text" value={job} onChange={(e) => {
                    dispatch(actions.setJob(e.target.value))
                }} />
                <input type="submit" value="them" onClick={(e) => {
                    e.preventDefault();
                    dispatch(actions.addJob(job))
                    dispatch(actions.setJob(""))
                    console.log(inputRef.current)
                }} />
            </form>

            {jobs && jobs.length > 0 && (<ul>
                {jobs.map(item =>
                (
                    <li key={item.jobId}>{item.description} <span onClick={() => dispatch(actions.deleteJob(item.jobId))}>x</span></li>
                )
                )}

            </ul>)
            }
        </div>
    )
}