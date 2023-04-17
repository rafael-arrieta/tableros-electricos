
import EmptySlot from "../EmptySlot/EmptySlot";
import "../../App.css";
import './Dashboard.css'
import { useState } from "react";
import Item from "../Item/Item";

function Dashboard() {

    const itemsArray = [
        {
            id: 0,
            name: 'térmica',
            image: './assets/items/termica.svg',
            slots: 2
        },
        {
            id: 1,
            name: 'disyuntor',
            image: './assets/items/disyuntor.svg',
            slots: 2
        },
        {
            id: 2,
            name: 'protector',
            image: './assets/items/protector.svg',
            slots: 2
        },
        {
            id: 3,
            name: 'bornera',
            image: './assets/items/bornera.svg',
            slots: 1
        },
        {
            id: 4,
            name: 'tripolar',
            image: './assets/items/trifasica.svg',
            slots: 3
        }
    ]

    const [dragend, setDragend] = useState(null);
    const [dropItem, setDropItem] = useState(null);
    

    const sendId = (id) => {
        setDragend(id);
        setDropItem(itemsArray[id]);
    };

    const [board, setBoard] = useState([])

    const gridHandlerStyle = (i, slots, value)=>{
        //count cuenta la cantidad de slots eliminados o la cantidad de posiciones en false
        //slots es la cantidad de lugares que debe ocupar, puede se 1, 2, 3, 4
        const newBoard = [...board]; // crea una copia del arreglo original
        //newBoard[i+slots] = value; // actualiza el valor correspondiente a true
        
        console.log(`${i} - cant ${slots} y value ${value}`);
        switch (slots){

            case 2:
                newBoard[i+1] = value
                console.log(newBoard);
                break

            case 3:
                newBoard[i+1] = value
                newBoard[i+2] = value
                console.log(newBoard);
                break

            case 4:
                newBoard[i+1] = value
                newBoard[i+2] = value
                newBoard[i+3] = value
                console.log(newBoard);
                break

            default:
                console.log(newBoard);
                break
        }
        setBoard(newBoard);
    }
    
    const setSlots = (value)=>{
        let arr = []
        for (let i = 0; i < value; i++) {
            arr.push(true);
        }
        setBoard(arr)
    }

    return (
        <>
            
            <div className="container">
                <div className="panel__container">
                    <div className="slots__selector">
                        <button onClick={()=>setSlots(4)} className="selector__button">4</button>
                        <button onClick={()=>setSlots(8)} className="selector__button">8</button>
                        <button onClick={()=>setSlots(16)} className="selector__button">16</button>
                    </div>
                    <div className="item__container">
                        {itemsArray.map((item,i)=> <Item id={item.id} image={item.image} key={i} sendId={sendId}/>)}
                    </div>
                </div>

                <div className="drop__container">
                    {board.map((slot, i) => <EmptySlot 
                                    id={i}
                                    key={i} 
                                    recievedId={dragend}
                                    item={dropItem}
                                    gridHandlerStyle={gridHandlerStyle}
                                    boardIndex={board[i]}
                                />)}
                </div>
            </div>
        </>
    );
}

export default Dashboard;
