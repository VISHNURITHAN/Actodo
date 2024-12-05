export function Todoitem(props){
    const list = props.list
    const setlist = props.setlist
    function HandleDelete(deleteid){
        console.log(deleteid)
        var temarr = list.filter(function(item){
            if(deleteid === item.id){
                return false;
            }
            else{
                return true;
            }
        })
        setlist(temarr)
    }
    return(
        <>
        <div className="flex justify-between">
             <p>{props.index+1}.{props.activity} </p>
             <button className="text-red-600 " onClick={()=>{HandleDelete(props.id)}}>delete</button>
        </div>
        </>
    )
}