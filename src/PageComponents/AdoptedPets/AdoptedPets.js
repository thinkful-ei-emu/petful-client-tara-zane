import React from 'react';
import './AdoptedPets.css';

class AdoptedPets extends React.Component {
  render() {
      const animals = this.props.animals.map((animal, index) => {
        return (
          <div key={index} className="adoptedAnimal">
            <h3>{animal.name}</h3>
            <img className="adopted-animal-pic" src={animal.imageURL} alt={animal.imageDescription}></img>
            <p>{animal.story}</p>
            <p>Congrats to {animal.name} for finding {animal.sex === 'Male' ? "his" : "her"} forever home!</p>
          </div>
        )
      })
      return <div>{animals}</div>
    

  }
}

export default AdoptedPets;

