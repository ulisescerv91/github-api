import React from 'react';
import './Avatar.scss'
const Avatar = (props) => {
    const {img,imgAlt} = props
    
    return <img src={img} alt={imgAlt} className='Avatar' />
}

export default Avatar;
