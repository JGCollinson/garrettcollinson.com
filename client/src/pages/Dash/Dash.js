import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import Stats from "../../components/Plotly";
import BQ from "../../pages/BQ";
import "./Dash.css";
// import {BigQuery} from '@google-cloud/bigquery';

class Dash extends Component {
  state = {
      data: [
      {
        x: [1, 2, 3],
        y: [2, 6, 3],
        type: 'bar',
        mode: '',
        marker: {color: '#C8A2C8', line:{ width: 2.5}},
      },
      {
      type: 'bar',
        x: [1, 2, 3],
        y: [2, 5, 3]
      },
    ], 
      layout: { title: 'Stat Flex', 
      font:{ color: "white"},  
      autosize: true, 
      paper_bgcolor:"#272B30",  
      plot_bgcolor: "#272B30", 
      color: "#272B30" },
      useResizeHandler: true,
    style: {width: "100%"}, 
      frames: [], 
      config: {},
      cheerios: {}
  };


  // bullProfile() {
  //   request("https://www.linkedin.com/in/j-garrett-collinson/", function(error, response, html) {
  //   var results = {};

  //   $("#ember1403 > div.pv-entity__summary-info.pv-entity__summary-info--background-section.mb2 > div > h4.pv-entity__date-range.t-14.t-black--light.t-normal > span:nth-child(2)").each(function(i, element) {
  //     var span = $(element).text();
  //     results.SetState({cherrios: {span: span}});
  //   })
  //   console.log(results);
  // });
  // }
  // #ember1403 > div.pv-entity__summary-info.pv-entity__summary-info--background-section.mb2 > div > h4.pv-entity__date-range.t-14.t-black--light.t-normal > span:nth-child(2)

  componentDidMount() {
    // this.bullProfile();
    
  };
  
  render() {
    return (
      <div>
      <Container fluid>
<Row>
<Col size="lg-1"/>
        <Col size="lg-10">
    <Stats data={this.state.data} layout={this.state.layout}  frames={this.state.frames} 
  config={this.state.config} style={this.state.style} useResizeHandler={true}/>
  <BQ></BQ>
        </Col>
        </Row>
      </Container>
     </div>
        );
  }
}

export default Dash;
