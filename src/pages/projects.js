import React from 'react';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';
import Project from '../components/Project/Project';
import Layout from '../components/layout';

const style = {
  gridColumn: '4/10',
  marginTop: '20vh',
};

const Projects = () => {
  const { allFile } = useStaticQuery(graphql`
    query {
      allFile {
        edges{
          node {
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);

  const projects = [
    {
      name: 'BookWorm',
      description: 'A full stack solution for graduate students to keep track of books used in their research. Using the Google books API, Flask for the server and PostgresSQL for the database, it\'s a super lightweight server rendered app. I plan on building a React app for the front end to replace the Jinja2 template front end',
      img: (<Img fluid={allFile.edges[1].node.childImageSharp.fluid} />),
      code: 'https://github.com/Zidane33/BookWorm-backend',
      live: 'https://book-w-orm.herokuapp.com/',
      tech: ['Flask', 'PostgresSQL', 'Jinja2', 'HTML', 'CSS', 'REST api'],
    },
    {
      name: 'GSA Carleton',
      description: 'My current workplace has a wordpress website that can be very slow. I am in the process of converting the website to utilize a React front end and query wordpress\' back end for all the pages and posts.',
      img: (<Img fluid={allFile.edges[4].node.childImageSharp.fluid} />),
      code: '',
      live: '',
      tech: ['Headless Wordpress', 'REST api', 'GraphQL', 'Gatsbyjs', 'React'],
    },
    {
      name: 'Shopify-Art-Store',
      description: 'A headless Shopify solution for an aspiring artist in the Ottawa region. Gatsbyjs provides a great synergy with Shopify\'s back end with its native support for GraphQL queries',
      img: (<Img fluid={allFile.edges[2].node.childImageSharp.fluid} />),
      code: 'https://github.com/Zidane33/shopify-art-store',
      live: '',
      tech: ['React', 'Gatsbyjs', 'Shopify', 'GraphQL'],
    },
    {
      name: 'Grad Portfolio',
      description: 'A fully deployed freelance project. It\'s graduate student portfolio built using Create-React-App. Hosted on Firebase with a custom domain name.',
      img: (<Img fluid={allFile.edges[3].node.childImageSharp.fluid} />),
      code: 'https://github.com/Zidane33/grad-portfolios',
      live: 'https://jay-ramasubramanyam.com/',
      tech: ['Create-React-App', 'React', 'CSS', 'JSX'],
    },
  ];

  return (
    <Layout>
      <div style={style}>
        {projects.map((x) => (
          <Project project={x} />
        ))}
      </div>
    </Layout>
  );
};

export default Projects;
