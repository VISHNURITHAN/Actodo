// import { useState } from "react"
import { Todoitem } from "./Todo-Item"

export function Todolist(props){

    const list=props.list
    const setlist=props.setlist
    return(
        <>
            <div className="bg-[#9890BC] flex-grow rounded-md p-2 justify-between">
                <h1 className="text-2xl font-medium">Today's Activity</h1>
                {
                    list.length === 0? <p className="text-red-500 font-medium">You havent added any activiity yet</p> : " "
                }
                    {
                        list.map(function(item,index){
                            return(
                                <>
                                 <Todoitem id={item.id} activity={item.activity} list={list} setlist={setlist}index={index} />
                                </>
                            )
                        })
                    }
            </div>

        </>
    )
}