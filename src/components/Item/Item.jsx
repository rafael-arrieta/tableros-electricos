import './Item.css'

function Item({id,sendId,image}){

    let srcRoute = `url(${image})`
    let itemClass = `draggable__item c${id}`
    let imageStyle = {
        backgroundImage: srcRoute, 
        backgroundRepeat:"no-repeat",
        backgroundPosition: "center center"
    }

    return (
        <div 
            className={itemClass}
            draggable="true"
            onDragStart={()=>{sendId(id)}}
            onDragEnd={()=>{sendId(null)}}
            style={imageStyle}
        >
            
        </div>
    )
}

export default Item
