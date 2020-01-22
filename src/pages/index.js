import React from "react";
import MediaQuery from 'react-responsive';
import Home from "../components/Home/Home";
import Nav from '../components/Nav/Nav';
import MobileNav from '../components/Nav/MobileNav';

const globalStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(12, 1fr)',
  background: 'rgb(34, 34, 34)',
  fontFamily: 'Source Sans Pro'
}

const Index = () => {
  return (
    <div style={globalStyle}>
      <MediaQuery minWidth={1000}>
        <Nav />
      </MediaQuery>
      <MediaQuery maxWidth={999}>
        <MobileNav />
      </MediaQuery>
      <Home />
    </div>
  );
};

export default Index;
