import React from 'react';
import male from '../assets/pictures/male.png';
import female from '../assets/pictures/female.png';
import neither from '../assets/pictures/neither.png'

function Contact (props){
    let gender;
    if (props.gender === 'male'){
        gender = male;
    }
    else if (props.gender === 'female'){
        gender = female;
    }
    else{
        gender = neither;
    }
    return(
        <div className="contact">
            <img className="gender" src= {gender} alt={props.gender} />
            <div className="contact-info">
                <p>{props.firstName} {props.lastName}</p>
                <p className="number">{props.number}</p>
            </div>
        </div>
    )
}

export default Contact;