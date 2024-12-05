import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Login } from "./Pages/Login"
import { Signup } from "./Pages/Signup"
import { Landing } from "./Pages/Landing"
import { useState } from "react"

function App(){
    // use srate array adhukull object iruka podhu such like username, password// 
    //?? resaon // nama nala value ah pat=rent la irundhu matum the child send pana mudim so adha app.js kula vachu props muliyama child iku data va pass apndrom... 
    const [user,setuser]=useState(
      [
          {
              username:"vishnu",  
              password:"123"
          }
      ]
  )
  return(
    <>
        <BrowserRouter>
    
          <Routes>
              <Route path='/' element={<Login user={user} setuser={setuser}/>}></Route>
              <Route path='Signup' element={<Signup user={user} setuser={setuser}/>}></Route>
              <Route path="Landing" element={<Landing />}></Route>
          </Routes>
        </BrowserRouter>
    </>
  )
}
export default App