import Square from "./components/Square";
import EmptySlot from "./components/EmptySlot";
import "./App.css";
import { useState } from "react";

function App() {
    const [dragend, setDragend] = useState(0);


    const sendId = (id) => {
        setDragend(id);
    };

    //const [quantity, setQuantity] = useState(0);

    let slotsArray = ['','','','','','','',''];

    const itemsArray = [
        {
            id: 1,
            name: 'térmica',
            image: '',
            slots: 2
        },
        {
            id: 2,
            name: 'disyuntor',
            image: '',
            slots: 2
        },
        {
            id: 3,
            name: 'bornera de tierra',
            image: '',
            slots: 1
        }
    ]

    
    return (
        <div className="App">
            <input placeholder="cantidad"></input>
            <select>
                <option>2</option>
                <option>4</option>
                <option>8</option>
            </select>

            <div className="square__container">
                {itemsArray.map((item,i)=> <Square id={item.id} key={i} sendId={sendId} />)}
            </div>

            <div className="drop__container">
                {slotsArray.map((slot, i) => <EmptySlot id={i} key={i} recibedId={dragend}/>)}
            </div>
        </div>
    );
}

export default App;
