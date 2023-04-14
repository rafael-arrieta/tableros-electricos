
function SquareBlue({id , sendId}){


    return (
        <div 
        className="drag__square-blue" 
        draggable="true" 

        //onDragStart={()=>{console.log('drag start event')}}
        //onDrag={()=>{console.log('dragging now')}}
        onDragEnd={()=>{
            sendId(id)
        }}
        >
        </div>
    )
}

export default SquareBlue