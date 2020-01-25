import React from "react";
import Project from "../components/Project/Project";
import Layout from '../components/layout'

const style={
  gridColumn: '3/11',
  marginTop: '20vh'
}

const projects = [
  {
    name: 'BookWorm',
    description: `A full stack solution for graduate students to keep track of books used in their research. Using the Google books API, Flask for the server and PostgresSQL for the database, it's a super lightweight server rendered app. I plan on building a React app for the front end to replace the Jinja2 template front end`,
    img: '',
    code: 'https://github.com/Zidane33/BookWorm-backend',
    live: '',
  }, 
  {
    name: 'GSA Carleton',
    description: `My current workplace has a wordpress website that can be very slow. I am in the process of converting the website to utilize a React front end and query wordpress' back end for all the pages and posts. It's still a work in progress`,
    img: '',
    code: '',
    live: '',
  }, 
  {
    name:'Shopify-Art-Store',
    description: `A headless Shopify solution for an aspiring artist in the Ottawa region. Gatsbyjs provides a great synergy with Shopify's back end with its native support for GraphQl queries`,
    img:'',
    code: 'https://github.com/Zidane33/shopify-art-store',
    live: '',  
  }, 
  {
  name:'Grad Portfolio',
  description: `A fully deployed freelance project. It's graduate student portfolio built using React.`,
  img: '',
  code: 'https://github.com/Zidane33/grad-portfolios',
  live: '',
},
]

const Projects = () => {
  return (
    <Layout>
        <div style={style}>
          {projects.map(x => {
            return (
              <Project project={x} />
            )
          })}
        </div>
    </Layout>
  );
};

export default Projects;
