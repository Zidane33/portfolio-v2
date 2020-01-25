import React from 'react';

const style = {
    background: 'black',
    fontSize: '0.8em',
    color: 'white',
    border: '2px black solid',
    float: 'left',
    padding: '7px',
    listStyle: 'none',
    margin: '0px 5px 5px 0px'
}

const Tech = (props) => {
    const tech = props.tech.map(tech => tech)
    const arr = tech.map((tech) => {
        return (
                <li style={style} key={tech.id}>
                    {tech}
                </li>
        )
    })
    return (
        <ul>
            {arr}
        </ul>
    )
}

export default Tech;