import { Component } from "react";

class ClassComponent extends Component {
  render() {
    return (
      <div>
        <h2>SOY UN {this.props.titulo} </h2>
      </div>
    );
  }
}

export default ClassComponent;
