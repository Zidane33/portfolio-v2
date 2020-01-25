import React from "react";
import Layout from '../components/layout';

const style={
    gridColumn: '3/11',
    marginTop: '20vh', 
}

const Resume = () => {
    return(
        <Layout>
            <div style={style}>
                <h1>Resume</h1>
                <a style={{color: 'purple', marginTop: '5%', display: 'block'}} href="https://docs.google.com/document/d/1SMB28QG36HHJgiEc4Svg39k7RRObS9kcJgI72WnxuyY/edit?usp=sharing">Download PDF</a>
            </div>
        </Layout>
    )
}

export default Resume; 