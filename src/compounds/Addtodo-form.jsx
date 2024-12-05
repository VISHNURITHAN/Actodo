import { useState } from "react"

export function Addtodolist(props){

    const list=props.list
    const setlist=props.setlist

    const [userinput,setuserinput]=useState("")
    function HandleUserInput(event){
        setuserinput(event.target.value)
    }
    function HandleAddBtn(){
        setlist([...list,{id:list.length+1,activity:userinput}])
        setuserinput("")
    }


    return(
        <>
            <div>
                <h1 className="text-2xl font-medium">Add Todo-Form</h1>
                <input value={userinput} type="text" className="mt-1 p-1 border border-black rounded-md" onChange={HandleUserInput}/>
                <button className="bg-[#039BE5] rounded-md p-1" onClick={HandleAddBtn}>Add</button>
            </div>
        </>
    )
}