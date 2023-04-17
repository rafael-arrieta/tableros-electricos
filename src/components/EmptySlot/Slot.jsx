import React from "react";
import './Slot.css'

const slot = ({id , hidden}) => {
    //console.log(hidden?'board index TRUE  ->' +id: 'tenemos un FALSE ->' +id);

    let styleOp = {
        visibility: 'visible'
    }
        
    if(!hidden) {
        styleOp.visibility = 'hidden'
    }

    return <div className="slot" style={styleOp}>{id}</div>;
};

export default slot;
