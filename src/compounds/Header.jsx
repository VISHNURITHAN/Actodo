import { useNavigate } from "react-router-dom"
export function Header(props){

    const navigate = useNavigate()

    function HandleLogout(){
        navigate('/')
    }
    return(
        <>
            <div className="flex justify-between">
                 <h1 className="text-3xl font-medium">Hello {props.username} 😁</h1>
                 <button onClick={HandleLogout} className="bg-red-600 text-white font-medium p-1 rounded-md">Logout</button>
            </div>
            <p className="mt-1">I help you to manage your activities!</p>
        </>
    )
}