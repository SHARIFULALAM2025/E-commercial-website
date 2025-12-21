import React from 'react';
import Navbar from '../../Header/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../Footer/Footer';
import Container from '../../Container/Container';

const Root = () => {
    return (
      <div>
        <Container>
          <Navbar></Navbar>
          <Outlet></Outlet>
          <Footer></Footer>
        </Container>
      </div>
    )
};

export default Root;