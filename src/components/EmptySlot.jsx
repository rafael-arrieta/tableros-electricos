import { useState } from 'react'
import Slot from './Slot'
import Square from './Square';


function EmptySlot({id, sendSlotPosition, recibedId}) {
    //id es el id del emptyslot que va a venir del MAP, ahora está hardcodeado

    const [coso, setCoso] = useState(0)

    const sendId = (id)=>{
        console.log('no hace nada'+recibedId);
    }
    
    return (
        <div className='empty__slot'
            onDragOver={(e)=>{e.preventDefault();}}
            onDrop={()=>{
                setCoso(recibedId)
            }}
        >
            {(recibedId===0)?<Slot/>:<Square id={coso} sendId={sendId}/> }

        </div>
    )
}

export default EmptySlot