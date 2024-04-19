import React from "react";

class ProfilePageClass extends React.Component {
  showMessage = () => {
    alert("Followed " + this.props.user);
  };

  handleClick = () => {
    // const { user } = this.props;
    setTimeout(() => {
      this.showMessage();
      console.log(this);
    }, 3000);
  };

  render() {
    return <button onClick={() => this.handleClick()}>Follow</button>;
  }
}

export default ProfilePageClass;
