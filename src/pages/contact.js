import React from "react";
import Layout from '../components/layout'
const style = {
    gridColumn: '3/10',
    marginTop: '20vh',
}

const formStyle = {
    display: 'flex',
    flexDirection: 'column',
}

const Contact = () => {
  return (
    <Layout>
      <div style={style}>
          <h1>Contact</h1>
          <p>Leave a message!</p>
          <form style={formStyle} id='contact' name="contact" method="POST"> 
              <label>Name</label>
              <input type="text" name="name"></input>
              <label>Email</label>
              <input type="email" name="email"></input>
              <label>Message</label>
              <textarea form="contact" name="message" rows="4" columns="50"></textarea>
          </form>
      </div>
    </Layout>
  );
};

export default Contact;
