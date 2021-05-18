import React from "react";
import d3 from "d3-3";
import Bar from "./Bar";

class SortGraph extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let paddingBottom = 20;
    let height = 450;
    let data = this.props.data;
    let dataV = data.map((v) => {
      return v.v;
    });
    let min = Math.min(...dataV);
    let max = Math.max(...dataV);

    let linear = d3.scale
      .linear()
      .domain([0, max])
      .range([0, height - paddingBottom - 15]);
    let w = 60;
    let dom = data.map((value, i) => {
      let h = linear(value.v);
      let x = i * (w + 5);
      let y = height - h - paddingBottom;
      return (
        <g key={i}>
          <Bar x={x} y={y} width={w} height={h} fill={value.color} />
          <text x={x} y={y - 2} dx={w / 2} textAnchor="middle">
            {value.v}
          </text>
        </g>
      );
    });
    var width = (w + 5) * data.length;
    return (
      <svg
        height={height}
        width={width}
        style={{ paddingTop: "20px" }}
        className="center-align"
      >
        <g>{dom}</g>
      </svg>
    );
  }
}

export default SortGraph;
