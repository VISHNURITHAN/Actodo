import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
export function Login(props){ // app.js la irudhu value pass aduthu prps muliyam 
    const navigate = useNavigate()
    const user= props.user
    // const setuser= props.setuser
  
    // 1 //getninputs from the user for unsername field 
    const [usernameinput,setusernameinput]=useState()
// 1.1 //haldle the user enterd inputs for username field 
function HandleUsernameInput(event){
    setusernameinput(event.target.value)
}
    // 2 // get inputs from the user for user password field 
    const [userpasswordinput,setuserpasswordinput]=useState()
// 2.1 // handle the user entered inputs for the password field
   function HandleUserPasswordInput(event){
    setuserpasswordinput(event.target.value)
   }

// 4 // register user or not edhu eduiku pandrom naa ipa user oru vela not reg ah irudhna "you have not registerd nu varum "
 // <-- continue -->  // adhunala tha reg/setreg usestate usepandrom and !!!intial ah "TRUE la itukanum"
   const[reguser,setreguser]=useState(true)

   // 3 //haldle login btn 
    function HandleLogin(){
        console.log(user);
        var userfound = false // for each loop la continuos ah odiea ika nala else partla irukdhukm op varum so apo array la evlo user add apnum aba kudura details matum crt panitu micha ella useriku not found nu varum console la so adha prevent pan atha the 
        //endh var state vach userfound ture nu aprm false nu soldrem 
        user.forEach(function(item){
            if (item.username === usernameinput && item.password === userpasswordinput)
                {
                console.log("login succes");
                userfound = true
                navigate('/Landing',{state:{user:usernameinput}})
             }
             if(userfound === false){

                console.log("usernot found")
                setreguser(false)
             }
            //  else{
            //     console.log("user not found");
            //     setreguser(false)
            //  }
        })
    }

    return(
        <>
           <div className="bg-black p-10 rounded-md my-2">
                <div className="bg-[#efefef] p-10 border rounded-md">
                    <h1 className="font-bold text-2xl">Hey Hi👋</h1>
                        {reguser? <p>I help you to manage your activities after you Login 🌐 !</p> : <p className="text-red-700"> Oops! it seems like you have not registred ⚠️</p>}
                        <input  className=" p-1 my-2 border bg-transparent border-black rounded-md" type="text" placeholder="Username" onChange={HandleUsernameInput} /><br />
                        <input className=" p-1 my-1 border bg-transparent border-black rounded-md" type="text" placeholder="Password" onChange={HandleUserPasswordInput}/><br />
                        <button className="bg-[#685BAE] rounded-md py-1 px-4 my-2" onClick={HandleLogin}>Login</button>
                        <p>don't have an account ? <Link to={"Signup"} className="underline">Signup</Link></p>
                </div>

            </div>
        </>
    )
}