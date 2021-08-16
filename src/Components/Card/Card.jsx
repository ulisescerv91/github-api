import React from 'react';
import Avatar from '../Avatar/Avatar';
import Label from '../Label/Label';
import './Card.scss'
const Card = (props) => {
    const {item} = props

    let getLabels = () =>{
        return item.labels.map((label, key) => {
            return <Label key={key} label={label} />
        })
    }


    return (
        <div className='Card'>
            <a href={item.html_url} target="_blank" rel="noreferrer noopener">
                <div className="Card__container">
                    <Avatar img={item.user.avatar_url} imgAlt={item.user.login}/>
                    <div className="Card__container__info">
                        <h4>{item.title}</h4>
                        <div className="labels">
                            {getLabels()}
                        </div>
                        <div className="extra">
                            #{item.number} by {item.user.login}
                        </div>
                    </div>
                </div>
            </a>
        </div>
    );
}

export default Card;
