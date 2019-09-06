import React from 'react';
import '../../CSS/Pets.css';

export default class Pets extends React.Component {
  state = {
    index: 0,
  }

  next = () => {
    this.setState({
      index: this.state.index + 1
    })
  }

  back = () => {
    this.setState({
      index: this.state.index -1
    })
  }
  render() {
    let animals = this.props.animals;
  
    if (animals.length > 0) {
      return (
        <div>
            <img
              className="adopted-animal-pic"
              src={animals[this.state.index].imageURL}
              alt={animals[this.state.index].imageDescription}
            />
  
            <p>Name: {animals[this.state.index].name}</p>
            <p>Sex: {animals[this.state.index].sex}</p>
            <p>Breed: {animals[this.state.index].breed}</p>
            <p>Age: {animals[this.state.index].age}</p>
            <p>Story: {animals[this.state.index].story}</p>
            {this.state.index===0 && <button onClick={() => this.props.adopt()}>Adopt!</button>}
            {this.state.index!==0 && <button onClick={this.back}>Previous animal!</button>}
            {this.state.index<animals.length-1 && <button onClick={this.next}>Next animal!</button>}
        </div>
      );
    } else {
      return (
        <div>
          <h1>Good Job! All of our animals Have Homes!</h1>
        </div>
      );
    }
  }
 
}
