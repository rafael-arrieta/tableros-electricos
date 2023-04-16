import'./ItemDropOff.css'

function ItemDropOff({id,clearSlot,item}){

    //let srcRoute = `./assets/item${id}.svg`
    let dropOffItemClass =`dropoff__item`
    //style={gridItem:"nth-child(2)"}

    return (
        <div className={dropOffItemClass} >
            <img className="img" src={item.image} alt=''/>
            <p>{item.name}</p>
            <button 
                className="button__close"
                onClick={
                    (e)=>{e.preventDefault()
                    clearSlot();
                }}
            >x</button>
           
        </div>
    )
}

export default ItemDropOff
