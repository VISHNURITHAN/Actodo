 function Card(props){
    return(
        <>
                <div style={{backgroundColor:props.bg}} className="text-center px-10 py-5 mt-1 rounded-md flex-grow">
                    <h1 className="text-2xl font-medium">{props.title}</h1>
                    <p>{props.subtitle}</p>
                </div>
        </>
    )
}
export default Card