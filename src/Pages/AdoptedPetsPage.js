import React from 'react';
import adoptedservice from '../services/adoptedservice';
import AdoptedPets from '../PageComponents/AdoptedPets/AdoptedPets';

class AdoptedPetsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animals: []
    }
  }

componentDidMount() {
  adoptedservice.getAdopted().then(res => {this.setState({animals: res})});
}

render() {
  return <div className="adopted-pets">
    <AdoptedPets animals={this.state.animals}/>
  </div>
}
}

export default AdoptedPetsPage;