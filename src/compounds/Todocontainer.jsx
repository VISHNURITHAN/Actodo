import { Todolist } from "./Todo-list"
import { Addtodolist } from "./Addtodo-form"
import { useState } from "react"
export function Todocontainer(){
    const[list,setlist]=useState([
        {
            id:1,
            activity:"Go for an Walk"
        },
        {
            id:2,
            activity:"Have a Breakfast"
        }
    ])
    return(
        <>
            <div className="flex flex-wrap gap-5 mt-7">
              <Addtodolist list={list} setlist={setlist}/>
              <Todolist list={list} setlist={setlist}/>
             </div>
        </>
    )
}