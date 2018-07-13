import React from 'react';
import isoToDate from '../utility/isoToDate';

const Education = (props) => {
    return(
        <div key={props._id} className='education'>
            <p className='education__degree'>{props.degree}</p>
            <p className='education__school'>{props.school}</p>
            <p className='education__study'>{props.fieldofstudy}</p>
            <p className='education__date'><span>{isoToDate(props.from)}</span> - <span>{isoToDate(props.to)}</span></p>
            <p className='education__description'>{props.description}</p>
        </div>
    )
}

export default Education;