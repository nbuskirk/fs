import React, {Component} from 'react';
import styles from './styles.less'
import UserList from './UserList.jsx'

const connection_str = 'http://' + document.domain + ':' + 3700;
const io = require('socket.io-client');
const socket = io.connect(connection_str);

//http://demo3138870.mockable.io/

const Main = React.createClass({
  getInitialState(){
    return {users: []}
  },
  componentDidMount(){
    
    socket.on('message', this._handleMessage);
  },

  _handleMessage(data) {
    console.log(data);
    this.setState({
      users: data.users
    });
  },

  render() {
    return(
      <div className="container">
        <h1>Users</h1>
        <ul>{this.state.users.map(function(user,i){
          return <li key={i}>{user}</li>
        })}</ul>
      </div>
    )
  }

});

module.exports = Main;