import React from 'react';
import isoToDate from '../utility/isoToDate';

const Experience = (props) => {
    return(
        <div key={props._id} className='experience'>
            <p className='experience__title'>{props.title}</p>
            <p className='experience__company'>{props.company}</p>
            <p className='experience__date'><span>{isoToDate(props.from)}</span> - <span>{isoToDate(props.to)}</span></p>
            <p className='experience__description'>{props.description}</p>
        </div>
    )
}

export default Experience;