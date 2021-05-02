import React, { Component } from "react";
import ConfirmData from "./ConfirmData";
import FormOtherDetails from "./FormOtherDetails";
import SuccessM from "./SuccessM";
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
    const { step } = this.state;
    const {
      name,
      agreement,
      mobile,
      email,
      occupation,
      comment,
      facebook,
    } = this.state;
    const values = {
      name,
      agreement,
      mobile,
      email,
      occupation,
      comment,
      facebook,
    };
    switch (step) {
      case 1:
        return (
          <UserFormInfo
            nextStep={this.nextStep}
            handelChange={this.handelChange}
            values={values}
          />
        );
      case 2:
        return (
          <FormOtherDetails
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handelChange={this.handelChange}
            values={values}
          />
        );
      case 3:
        return (
          <ConfirmData
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            values={values}
          />
        );
      case 4:
        return <SuccessM/>;
    }
  }
}

export default UserForm;
