import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    users: [
      { username: "Delman", bio: "I like butter" },
      { username: "Delman", bio: "I hate spiders" },
      { username: "Delman", bio: "I love to chew gum" },
      { username: "Delman", bio: "I go to the gym" }
    ]
  };

  changeNameHandler = (event) => {
    const users = this.state.users.map(user => {return {username: event.target.value, bio: user.bio}});

    this.setState({
      users: [
        ...users
      ]
    });
  }


  render() {
    const users = this.state.users;
    const headerStyle = {
      color: "#fff"
    }

    return (
      <div className="App">
        <h1 style={headerStyle}>The Base Syntax Assign</h1>
        <UserInput change={this.changeNameHandler} name={this.state.users[0].username} />
        {users.map((user) => <UserOutput username={user.username} bio={user.bio} />)}   
      </div>
    );
  }
}

export default App;
