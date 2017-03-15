import React from 'react'
import { render } from 'react-dom'

const UserList = React.createClass({

  render(){
    return (
        <div className="users">
          <ul>
            {
              this.props.users.map((user,i) => {
                return (
                  <li style={style} key={i}><p>{user}</p></li>
                )
              })
            }
          </ul>
        </div>
    )
  }

})

module.exports = UserList;