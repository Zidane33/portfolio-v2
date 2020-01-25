import React from "react";
import { Link } from "gatsby";
import Layout from '../components/layout';

const style={
    gridColumn: '3/11',
    marginTop: '20vh', 
}

const pStyle = {
    fontSize: '1rem',
    fontWeight: '600',
    lineHeight: '2rem',
    margin: '0px',
    paddingTop: '2em',
}

const About = () => {
  return (
    <Layout>
      <div style={style}>
        <h1>About</h1>
        <p style={pStyle}> 
            I'm a an aspiring Web developer currently working as an Executive Director for a non-profit organization, working with graduate students to help them navigate graduate school. 
             My role is varied and always interesting, there is no typical day. Working for non-profits taught me a lot on how best to solve complex problems with limited resources, which is an invaluable skill in the tech world.
            <br />
            <br />
            I am an aspiring web developer who is passionate about all things tech and programming. What started as a hobby blossomed into a career aspiration. 
            <br />
            <br />
            I am fully committed to being the best developer I can be, and to that end I am seeking to develop my skills further working on software that will help people. 
            I am most interestd in spaces that empower others and provide them with the resources to grow. 
            <br />
            <br />
            Outside of work I like to work on full stack web applications with a
            combination of React and backend frameworks like Nodejs and Python Flask.
            This allows me play around with new technology and gives me a better
            understanding of the digital industry as a whole. It's also incredibly
            fun!
            <br />
            <br />
            If that sounds like someone you’d like to collaborate with then{" "}
            <Link to="/contact">get in touch.</Link>
        </p>
      </div>
    </Layout>
  );
};

export default About;
