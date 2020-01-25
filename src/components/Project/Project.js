import React from 'react';


const Project = (props) => {
    return (
    <div>
        <h2>{props.project.name}</h2>
        <img src={props.project.img} />
        <p>{props.project.description}</p>
        <a href={props.project.code}>View Code on Github</a><br />
        <a href={props.project.live}>Visit Live Link</a>
        <hr />
    </div>
    )
}

export default Project;