import React from "react";
import Plot from 'react-plotly.js';


export const Stats = props => (
  <Plot
  data={props.data}
  layout={props.layout}
  frames={props.frames}
  config={props.config}
  style={props.style}
  useResizeHandler={props.useResizeHandler}
/>
);


export default Stats;