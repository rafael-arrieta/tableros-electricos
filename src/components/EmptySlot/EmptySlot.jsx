import { useState } from "react";
import Slot from "./Slot";
import ItemDropOff from "../ItemDropOff/ItemDropOff";

function EmptySlot({ id, recievedId, item, gridHandlerStyle, boardIndex }) {
    //id es el id del emptyslot que va a venir del MAP, ahora está hardcodeado
    //item viene lo mas bien, hay que recordar hace el onDrop con el flag y como eliminé el bug
    //boardLenght el tipo deberia matchear el board con las truePositions.map

    const [itemSaved, setItemSaved] = useState(null); // esta almacena recievedId en un estado, y lo inicializa en NULL
    const [flag, setFlag] = useState(false); // la flag determina si puede recibir o no el elemento
    
    const clearSlot = ()=>{
        //es el evento del OnClick del boton que limpia el slot
        if(flag){
            setItemSaved(null)
            setFlag(false)
            gridHandlerStyle((id),itemSaved.slots,true)
            console.log(itemSaved.slots);
        }
    }

    return (
        <div
            onDragOver={(e) => {
                e.preventDefault();
            }}
            onDrop={() => {
                if(!flag && boardIndex && recievedId!==null){
                    setItemSaved(item)
                    setFlag(true)

                    if(item.slots>1){
                        gridHandlerStyle((id),(item.slots),false)
                    }
                };
                
            }}
        >
            {itemSaved === null ? <Slot id={id} hidden={boardIndex}/> : <ItemDropOff id={id} clearSlot={clearSlot} item={itemSaved}/>}
        </div>
    );
}

export default EmptySlot;
