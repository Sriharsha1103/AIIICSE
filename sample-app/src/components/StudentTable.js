import React, { Component } from "react";
import Login, { Welcome } from "./Login";

//Stateless Components
//Pure Component

/* class StudentTable extends Component{

    constructor(props) {
      super(props)
        
     
    }
    
    render(){
        return (
          
        );
    }
} */

function StudentTable(props) {
    console.log(props.list, props.title)
  return (
    <>
      <table border="1">
        <tr>
          <td>S.No.</td>
          <td>Name</td>
        </tr>
        {props.list.map((item, index) => {
          return (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.name}</td>
            </tr>
          );
        })}
      </table>
    </>
  );
}

export default StudentTable;
