import React, { Component } from 'react'
import MemoComponent from './MemoComponent';
class MemoCompState extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count : 0
      }
    }
    componentDidMount(){
        setInterval(() => this.setState({ count: this.state.count }), 1000);
    }
    
    render() { 
        console.log("component rendered!!! class")
        return (
            <MemoComponent count = {this.state.count}/>
        );
    }
}
 
export default MemoCompState;