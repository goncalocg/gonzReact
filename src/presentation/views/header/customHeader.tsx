import * as React from "react";

class CustomHeader extends React.Component {
  render() {
    return (
      <div className="topBar">
        <h1> CustomHeader </h1>
      </div>
    );
  }
}
export default CustomHeader;

class LeftActions extends React.Component {
  render() {
    return <div className="leftActions" />;
  }
}

class MiddleActions extends React.Component {
  render() {
    return <div className="middleActions" />;
  }
}

class RightActions extends React.Component {
  render() {
    return <div className="rightActions" />;
  }
}
