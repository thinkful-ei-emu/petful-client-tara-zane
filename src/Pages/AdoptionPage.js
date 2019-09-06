import React from 'react';
import Header from '../PageComponents/LandingPagesComps/Header';
import CatServices from '../services/catservice';
import DogServices from '../services/dogsservice';
import Pets from '../PageComponents/AdoptionPagesComps/Pets';
import UserServices from '../services/usersservice';
import UserQueue from '../PageComponents/UserQueue/UserQueue';

export default class AdoptionPage extends React.Component {
  state = {
    cats: [],
    dogs: [],
    users: []
  };

  componentDidMount() {
    CatServices.getCat().then((res) =>
      this.setState({ cats: res }, () => {
        console.log(this.state);
      })
    );
    DogServices.getDog().then((res) => this.setState({ dogs: res }));
    UserServices.getUser().then((res) => this.setState({ users: res }));

    this.interval = setInterval(() => {
      this.switchUser();
    }, 10000);
  }

  switchUser() {
    UserServices.switchUser().then((res) => this.setState({ users: res }));
  }
  removeDog = (e) => {
    DogServices.deleteDog();
    let oneLess = [...this.state.dogs];
    oneLess.shift();
    console.log(this.switchUser);
    this.switchUser();

    this.setState({ dogs: oneLess });
  };

  removeCat = (e) => {
    CatServices.deleteCat();
    let oneLess = [...this.state.cats];
    oneLess.shift();
    this.switchUser();

    this.setState({ cats: oneLess });
  };

  render() {
    if (this.state.cats !== null) {
      return (
        <div>
          {' '}
          <Header />
          <div className="pet-container">
            <section>
              <h2>Cats</h2>
              <Pets animals={this.state.cats} adopt={this.removeCat} />
            </section>
            <section>
              <h2>Dogs</h2>
              <Pets animals={this.state.dogs} adopt={this.removeDog} />
            </section>
          </div>
          <section className="usersection">
            <UserQueue users={this.state.users} />
          </section>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}
