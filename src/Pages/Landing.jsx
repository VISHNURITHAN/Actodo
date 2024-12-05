import { Header } from "../compounds/Header"
import Card from "../compounds/Card"
import { Todocontainer } from "../compounds/Todocontainer"
import { useLocation } from "react-router-dom"
export function Landing()
{
    const data = useLocation()
    console.log(data.state.user)
    console.log(data)
    return(
        <>
        <div className="bg-black p-16">
        <div className="bg-[#efefef] p-10 rounder rounded-md">
          <Header username={data.state.user}/>
          {/* card */}
          <div className="flex justify-between flex-wrap gap-7">
            <Card bg={"#5755D9"} title={"25F"} subtitle={"Coimbatore"}/> 
            <Card bg={"#FFFF00"}title={"Current Date"} subtitle={"Karaikudi"}/>
            <Card bg={"#BB3354"} title={"React application"} subtitle={"build to manage your activity below"}/>
          </div>
          {/* Todo container */}
          <Todocontainer/>
          
        </div>
        
      </div>
        </>
    )
}