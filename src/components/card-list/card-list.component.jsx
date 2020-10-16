import React from 'react';
import './card-list.style.css';

import { Card } from '../card/card.component'

export const CardList = (props) => {
    console.log(props)
    return (
        <div className='card-list'>
            {props.monsters.map((monster, idx) =>
                <Card key={idx} monster={monster} />
            )}
        </div>
    )
}