import React from 'react';
import './Label.scss'
const Label = (props) => {
    const {label} = props
    
    let getContrastYIQ = (hexcolor) => {
        var r = parseInt(hexcolor.substr(0, 2), 16);
        var g = parseInt(hexcolor.substr(2, 2), 16);
        var b = parseInt(hexcolor.substr(4, 2), 16);
        var yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
        return (yiq >= 128) ? '#000' : '#fff';
    }


    return <span className='Label' style={
        {
            backgroundColor: `#${label.color}`,
            color: `${getContrastYIQ(label.color)}`
        }
    }
    >
        {label.name}
    </span>
}

export default Label;
