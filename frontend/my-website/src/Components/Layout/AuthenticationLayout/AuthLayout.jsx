import React from 'react';
import Navbar from '../../Header/Navbar/Navbar';
import { Outlet } from 'react-router';
import Container from '../../Container/Container';

const AuthLayout = () => {
    return (
      <div>
        <Container>
          <Navbar></Navbar>
          <Outlet></Outlet>
        </Container>
      </div>
    )
};

export default AuthLayout;