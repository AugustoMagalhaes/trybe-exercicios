import React from 'react';
import PropTypes from 'prop-types';

class Greeting extends React.Component {
  render() {
    /* const {name, lastName} = this.props.info; */
    return (<h1>Hello, {this.props.name} {this.props.lastName}</h1>);
  }
}

Greeting.propTypes = {
  name: PropTypes.string,
  lastName: PropTypes.string.isRequired,
};

export default Greeting;