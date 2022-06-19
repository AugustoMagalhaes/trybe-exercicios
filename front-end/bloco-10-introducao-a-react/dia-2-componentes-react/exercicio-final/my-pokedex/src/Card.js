import React, {Component} from 'react';
import data from './data.js';

class Card extends Component {
  render() {
    /* const {id, name, type, averageWeight, image} = data; */
    return (
      <div>
          <>
          <p>{this.props.name}</p>
          <p>{this.props.type}</p>
          <p>{this.props.averageWeight.value} {this.props.averageWeight.measure}</p>
          <img src={this.props.image} alt="pokemon"> </img>
          </>
      </div>
    )
  }
}

export default Card;