import React, { Component } from "react";
import UserFormInfo from "./UserFormInfo";


export class UserForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      step: 1,
      name: "",
      agreement: "",
      mobile: "",
      email: "",
      occupation: "",
      facebook: "",
      comment: "",
    };
  }
  //Next Step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };
  //Back Step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  //Handle input Change

  handelChange = (input) => (e) => {
    this.setState({
      [input]: e.target.value,
    });
  };

  render() {
      const {step} = this.state
      const {name, agreement, mobile, email, occupation, comment, facebook } = this.state
      const values = {name, agreement, mobile, email, occupation, comment, facebook }
   switch(step) {
       case 1:
       return(
           <UserFormInfo
           nextStep={this.nextStep}
           handelChange={this.handelChange}
           values={values}
           />
       )
        case 2 : 
        return <h1>Personal Data</h1>
        case 3:
            return <h1>Confirm</h1>
            case 4: 
            return <h1> Success</h1>
   }
  }
}

export default UserForm;
