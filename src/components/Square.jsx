function Square({id,sendId}){

    return (
        <div 
            className={"drag__square-"+id}
            draggable="true"
            onDragStart={()=>{sendId(id)}}
            onTouchStart={()=>{sendId(id)}}
        ></div>
    )
}

export default Square
