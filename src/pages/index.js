import React from "react";
import Home from "../components/Home/Home";
import Nav from '../components/Nav/Nav'

const bodyStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(12, 1fr)',
  background: 'rgb(34, 34, 34)',
  fontFamily: 'Source Sans Pro'
}

const Index = () => {
  return (
    <div style={bodyStyle}>
      <Nav />
      <Home />
    </div>
  );
};

export default Index;
