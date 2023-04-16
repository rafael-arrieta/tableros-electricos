
import EmptySlot from "../EmptySlot/EmptySlot";
import "../../App.css";
import './Dashboard.css'
import { useState } from "react";
import Item from "../Item/Item";
import { computeHeadingLevel } from "@testing-library/react";

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
      name: 'bornera de tierra',
      image: './assets/items/bornera.svg',
      slots: 1
    },
    {
      id: 4,
      name: 'bornera de tierra',
      image: './assets/items/trifasica.svg',
      slots: 1
    }
  ]

  const [dragend, setDragend] = useState(null);
  const [dropItem, setDropItem] = useState(null);
  const [gridStyle, setGridStyle] = useState(null);

  const sendId = (id) => {
    setDragend(id);
    setDropItem(itemsArray[id]);
  };

  const [board, setBoard] = useState([])
  const [count, setCount] = useState(1);

  const gridHandlerStyle = (i, slots, value) => {

    !value ? setCount(count + 1) : setCount(count - 1)
    //count cuenta la cantidad de slots eliminados o la cantidad de posiciones en false
    //slots es la cantidad de lugares que debe ocupar, puede se 1, 2, 3, 4
    const newBoard = [...board]; // crea una copia del arreglo original

    for (let k = i; k < i + slots; k++) { // Arrancando a contar desde el lugar donde se ubicó el item se llenan los slots que correspondan
      newBoard[k] = value; // actualiza el valor correspondiente a true
    }

    setBoard(newBoard);

  }

  const setSlots = (value) => {
    let arr = []
    for (let i = 0; i < value; i++) {
      arr.push(true);
    }
    setBoard(arr)
  }

  // Volé truepositions

  //console.log('board es: '+board);
  //el truePositions y board tienen que matchear la posicion del board que se encuentra en false pero no despreciarla
  // el bug está en que el tipo va restantando posiciones y no es consitente en eso

  return (
    <>
      <div className="container">
        <div className="panel__container">
          <div className="slots__selector">
            <button onClick={() => setSlots(4)} className="selector__button">4</button>
            <button onClick={() => setSlots(8)} className="selector__button">8</button>
            <button onClick={() => setSlots(16)} className="selector__button">16</button>
          </div>
          <div className="item__container" style={gridStyle}>
            {itemsArray.map((item, i) => <Item id={item.id} image={item.image} key={i} sendId={sendId} />)}
          </div>
        </div>

        <div className="drop__container">
          {board.map((slot, i) => {

            return <EmptySlot
              id={i}
              key={i}
              recievedId={dragend}
              item={dropItem}
              gridHandlerStyle={gridHandlerStyle}
              boardLenght={board.length}
            />
          })}
        </div>
      </div>
      <p>Count={count}</p>
      <button onClick={() => console.log(board)}>Console</button>
    </>
  );
}

export default Dashboard;
