import'./ItemDropOff.css'

function ItemDropOff({id,clearSlot,item}){

    return (
        <div className='dropoff__item' >
            <img className="img" src={item.image} alt=''/>
            <p>{item.name}</p>
            <button 
                className="button__close"
                onClick={
                    (e)=>{e.preventDefault()
                    clearSlot();
                }}
            >X</button>
           
        </div>
    )
}

export default ItemDropOff
