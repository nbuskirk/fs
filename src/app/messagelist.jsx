import React, {Component} from 'react';

export default class MessageList extends React.Component {
 
  constructor(props, context) { 
    super(props, context)
    this.state = {
      msgs: this.props.msgs
    }
  }

  render() {
    return(
      <ul className="msglist">{this.props.msgs.map(function(data,index){
        return ( <li key={index}><p>{data.text}</p></li> )
      })}</ul>
    )
  }

}