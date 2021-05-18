import React from "react";
import d3 from "d3-3";

class Bar extends React.Component {
  render() {
    return (
      <rect
        x={this.props.x}
        y={this.props.y}
        width={this.props.width}
        height={this.props.height}
        fill={this.props.fill}
      ></rect>
    );
  }
}

export default Bar;
