//Functional Components
//Class Components

import React, { Component } from "react"
//Stateful Components
export class Welcome extends Component{

    constructor(props) {
      super(props)
    
      this.state = {
         textValue:'',
         name: props.name,
      }
    }
    handleChange = (e) => {
        //console.log(e.target.value)
        this.setState({textValue: e.target.value})
    }
    
    handleClick = (event) => {
        //console.log('Clicked on Button',event.target)
        console.log(this.state.textValue)
    }
    
    render() {
        return (
            <div>
                <h1> Hi, Hello {this.state.name}</h1>
             <label>Enter some text</label>
             <input type="text" id="input1" value={this.state.textValue} onChange={this.handleChange}
                 />
             <br/>
             
             
             <input type="button" value='Click' onClick={this.handleClick}/>
        </div>
        )
    }
}
//Stateless Components
function Login (){
    return (
        <div>
            <hr/>
             <label>Enter some text</label>
             <input type="text" id="input1" />
             <br/>
             <label id="label2"></label>
             <hr/>
             <input type="button" value='Click'/>
        </div>
    )
}
export default Login

