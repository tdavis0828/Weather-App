/* eslint-disable max-len */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import logo from './Logo.png';
import { GlobalStyle } from './App';

const StyledDiv = styled.div`
  height: 83.7vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fff;
  font-size: 1.5rem;
  & a {
    color: #fff;
  }
`;

// # Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed. Error boundaries catch errors during rendering, in lifecycle methods, and in component constructors full the whole tree below them.
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  // ? MUST return an updated state object and MUST NOT trigger side effects
  static getDerivedStateFromError(error) {
    return { error };
  }

  // ? CAN trigger side effects; commonly used to log out any errors
  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    const { error } = this.state;
    const { children } = this.props;

    if (error) {
      return (
        <>
          <GlobalStyle />
          <Navbar>
            <img src={logo} alt="logo" />
          </Navbar>
          <StyledDiv>
            <h1>Oops!</h1>
            <p>
              Looks like there was an issue on our end. Scooch on back
              to the home page while we get things worked out.
            </p>
            <a href="index.html" alt="home">
              {' '}
              Home{' '}
            </a>
          </StyledDiv>
          <Footer />
        </>
      );
    }

    return children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ErrorBoundary;
