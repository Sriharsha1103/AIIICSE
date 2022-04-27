import { Component } from "react";
import "./myStyle.css";
class StudentList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      regdNo: 0,
      name: "",
      student: []
    };
  }
  handleClick = (e) => {
      e.preventDefault()
      const myStudent = {regdNo: this.state.regdNo, 
        name: this.state.name}
        //console.log(myStudent.regdNo, myStudent.name)
    this.setState(prevState => ({
         student: [...prevState.student,myStudent]
    }))
    console.log(this.state.student)
  }
  handleChange = (e) => {
    const value = e.target.value
    switch(e.target.id){
        case 'regdNo': this.setState({regdNo:value})
            break
        default: this.setState({name: value})
            break
    }
   
  };

  render() {
    return (
      <div>
        <h1>Student List</h1>
        <div className="container">
          <label className="myLabel">Enter Regd. No</label>
          <input
            type="text"
            id='regdNo'
            onChange={this.handleChange}
            value={this.state.regdNo}
          />
          <label className="myLabel">Enter Name</label>
          <input
            type="text"
            id='name'
            onChange={this.handleChange}
            value={this.state.name}
          />
          <br />
          <input type="button" value="Add" 
          onClick={this.handleClick}/>
        </div>
        <div>
          <table border="1">
            <tr>
              <td>Regd.No.</td>
              <td>Name</td>
            </tr>
           {
             
               this.state.student.map((row,index)=>
                   (
                    <tr>
                    <td>{row.regdNo}</td>
                    <td>{row.name}</td>
                    </tr>

                   )

               )
           }
            
          </table>
        </div>
      </div>
    );
  }
}
export default StudentList;
