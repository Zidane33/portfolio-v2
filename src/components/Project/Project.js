import React from 'react';
import Arrow from '../assets/arrow.svg';
import Tech from './Tech';



const Project = (props) => {
    return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <h2 style={{alignSelf: 'start'}}>{props.project.name}</h2>
        <div style={{width: '25vh'}}>
            {props.project.img}
        </div> 
        <p style={{margin: '1em'}}>{props.project.description}</p>
        <a className="links" href={props.project.code}>View Code on Github
            <Arrow className="arrow" height='1em' width='1em'></Arrow>
        </a>
        <br />
        <a className="links" href={props.project.live}>Visit Live Link
            <Arrow className="arrow" height='1em' width='1em'></Arrow>
        </a>
        <Tech tech={props.project.tech} />
        <hr style={{width: '100%'}} />
    </div>
    )
}

export default Project;