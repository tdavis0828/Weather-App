/* eslint-disable max-len */
import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// import PropTypes from 'prop-types';

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
    // eslint-disable-next-line react/prop-types
    const { children } = this.props;

    if (error) {
      return (
        <>
          <Navbar />
          <h1>Oops!</h1>
          <p>
            Looks like there was an issue on our end. Scooch on back
            to the home page while we get things worked out.
          </p>
          <Footer />
        </>
      );
    }

    return children;
  }
}

// ErrorBoundary.propTypes = {
//   children: PropTypes.node.isRequired,
// };

export default ErrorBoundary;
