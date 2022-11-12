import React, { PureComponent } from "react";

export default class PureComponentTut extends PureComponent {
    constructor(props) {
      super(props)
    
      this.state = {
         count : 0
      }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({count:this.state.count});
            console.log("state updated")
        },5000)
    }
    
  render() {
     console.log("comp rendered");
    return (
      <div>
        {this.state.count}
      </div>
    )
  }
}
