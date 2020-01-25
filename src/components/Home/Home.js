import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import Img from "gatsby-image";
import Arrow from '../assets/arrow.svg';
import "./HomeStyle.css";

const Home = () => {
  const { file } = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "hero.png" }) {
        childImageSharp {
          fluid(maxWidth: 1300, grayscale: true) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <div className="home">
        <div className="text-wrapper">
            <h1>Hey, my name’s Zidane.</h1>
            <p>
                I'm a full stack developer.
            </p>
            <Link to="/about" className="links">About Me
                <Arrow className="arrow" height='1em' width='1em'></Arrow>
            </Link>
            <Link to="/projects" className="links">Recent Projects
                <Arrow className="arrow" height='1em' width='1em'></Arrow>
            </Link>
            <Link to="/contact" className="links">Get in Touch
                <Arrow className="arrow" height='1em' width='1em'></Arrow>
            </Link> 
            <Link to="/resume" className="links">View my Experience
                <Arrow className="arrow" height='1em' width='1em'></Arrow>
            </Link>
        </div>
        <div className="image-wrapper">
            <Img fluid={file.childImageSharp.fluid} />
        </div>
    </div>
  );
};

export default Home;
