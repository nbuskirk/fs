import React, {Component} from 'react';
import styles from './styles.less'
import MessageList from './messagelist.jsx';

//http://demo3138870.mockable.io/

export default class Main extends React.Component {
 
  constructor(props, context) { 
    super(props, context)
    this.state = {
      msgs: [{'text':'loading'}]
    }
  }

  componentDidMount(){
    fetch('http://demo3138870.mockable.io/fs')
      .then((resp) => resp.json())
      .then((data) => {
        this.setState({
          msgs: data.msgs
        })
      })
  }

  render() {
    return(
      <MessageList msgs={this.state.msgs} />
    )
  }

}