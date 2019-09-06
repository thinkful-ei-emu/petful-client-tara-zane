import React from 'react';
import './UserQueue.css'

class UserQueue extends React.Component {

  renderUsers() {
    const usersarray = this.props.users.map((user, index) => {
      return <div key={index} className={`user ${index===0 && "active-user"}`}>{user.name}</div>
    })

    return usersarray;
  }
  render() {
    if(this.props.users.length > 0) {
      return (
      <section>
        <h2>Users in line to adopt:</h2>
        <div className="userqueue">{this.renderUsers()}</div>
        </section>)
    }
    else {
      return <></>
    }
  }
}

export default UserQueue;