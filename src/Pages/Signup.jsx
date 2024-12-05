import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export function Signup(props){//value from app.js send to the props
    const navigate=useNavigate()
    const user = props.user
    const setuser = props.setuser

    // 1 // user input username signup handle 
    const[signupinput,setsignupinput]=useState()
    function HandleSignUpInput(event){
        setsignupinput(event.target.value)
    }
    // 2 // user input password signup handle 
    const [signuppassinput,setsignuppassinput]=useState()
    function HandleSignUpPassInput(event){
        setsignuppassinput(event.target.value)
    }
    // validaition field on required 
    const[ error , seterror]=useState(" ");

    // 3 // handle login btn
    function HandleLogin(){
        if(!signupinput || !signuppassinput){
            seterror("Both fields are required ⚠️")
            return;
        }
        seterror("");
        setuser([...user,{username:signupinput,password:signuppassinput}])
        navigate("/")
        console.log("added user");
    }
    return(
        <>
            <div className="bg-black p-10 rounded-md my-2">
                <div className="bg-[#efefef] p-10 border rounded-md">
                    <h1 className="font-bold text-2xl">Hey Hi </h1>
                        <p>Hey you can signup here 📃!</p>
                        <input className=" p-1 my-2 border bg-transparent border-black rounded-md" type="text" placeholder="Username" onChange={HandleSignUpInput} /><br />
                        <input className=" p-1 my-1 border bg-transparent border-black rounded-md" type="text" placeholder="Password" onChange={HandleSignUpPassInput}/><br />
                       { error && <p className="text-red-500 font-medium">{error}</p> }
                        <button className="bg-[#CB8201] rounded-md py-1 px-4 my-2" onClick={HandleLogin}>Sign up</button>
                        <p>Already have an account ? <Link to={"/"} className="underline">Login</Link></p>
                </div>

            </div>
        </>
    )
}
