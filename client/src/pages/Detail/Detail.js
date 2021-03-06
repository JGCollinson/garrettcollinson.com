import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
// import Stats from "../../components/Plotly";

import "./Detail.css";
import TimeAgo from 'react-timeago'
            
class Detail extends Component {
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
      paper_bgcolor:"#242a2e",  
      plot_bgcolor: "#242a2e", 
      color: "#242a2e" },
      useResizeHandler: true,
    style: {width: "100%"}, 
      frames: [], 
      config: {}
  };
  
  render() {
    return (
      <div>
      <Container fluid>
<Row>
<Col size="lg-1"/>
        <Col size="lg-10">
    {/* <Stats data={this.state.data} layout={this.state.layout}  frames={this.state.frames} 
  config={this.state.config} style={this.state.style} useResizeHandler={true}/> */}
              <ul class="nav nav-tabs">
  <li class="nav-item">
    <a class="nav-link active show" data-toggle="tab" href="#home">Brand Statement</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" data-toggle="tab" href="#profile">Profile</a>
  </li>
</ul>
<div id="myTabContent" class="tab-content">
  <div class="tab-pane fade active show" id="home">
  <h2>Brand Statement:</h2>
    <p> Garrett Collinson is a jr. web-developer, database architect,
                  and data scientist rolled into a <span class="antiClock">fun</span> and friendly package that began working in data operations and programming&nbsp;
                  <TimeAgo date='Jun 5, 2014' />.</p>   
                <img id="resume" src="https://storage.googleapis.com/public-1234/portfolio/BannerGarrettcollinson2.png" alt="" />

  </div>
  <div class="tab-pane fade" id="profile">
  <h2>GarrettCollinson.com:</h2>
  <p>
                  
  If your organization needs a passionate consultant for creating
                  persistent systems that automatically provide intelligence
                  about crucial business operations with minimal set up and
                  oversight,&nbsp;
                  <a
                    target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/j-garrett-collinson/"
                  >
                    click here to connect with me on linkedIn. 
                  </a>
                  </p>
                  <h3>Personal Note:</h3>
    <p>
    Dear Reader,
    <p>When I began consulting in Data Science <TimeAgo date='Jun 5, 2014' /> I realized that I have a passion for designing sustainable systems that help make peoples lives easier and more purposeful. Working as a data developer I'll have that thought in mind when creating reports, knowledge graphs, databases, and deployment that quickly and accurately describe the reality of our efforts together. In web development I'll strive to deliver well documented, tested, and purpose-built code as if I were designing for the Louvre.</p>


<p>I am a dedicated, flexible Data Analyst and Full Stack Web Developer with a founder’s mindset and a passion for high performance. I am very agile with my project and work styles, and I need minimal resources to perform at my highest potential. I am used to non-normal hours and will take every opportunity to excel at my job. </p>
	<p>I have continued my pursuit of personal growth by continuing my education. I spend much of my time learning new and useful skills that specifically relate to the automation of data analytics and reporting. I graduated from the University of Tennessee, Knoxville with a degree in Business Analytics and after that from The Georgia Institute Of Technology (Georgia-Tech) with a certification in Full Stack Web Development. I consider this an extension in my Data Analytics education in that Web Development is the presentation, manipulation, and acquisition of data and Business Analytics is the analysis and action on conclusions made from assumptions based on data through statistics and data science.</p>
	<p>I love working with marketing data simply because there is so much of it.</p>
<blockquote class="blockquote text-center">
  <p class="mb-0">	“The larger the sample size, the more reliable are your averages. <br/>
			The n’s justify the means.”
			</p>
  <footer class="blockquote-footer">u/porichoygupto <cite title="Source Title">r/dadjokes</cite></footer>

	</blockquote>	
<p>
In this case Google and Adobe Analytics allow us to perform robust statistical analytics that drive ROI and prove out the beauty of long term strategic thinking and data driven decision making. Efficiency and high performance systems are exciting to me. Our KPIs will be dollars-and-cents-driven with a healthy perspective on total impact to the organization. Almost everyone inside a business can benefit from having the right information at the right time and that requires a strong understanding of the people and the goals of the business.</p>

-Garrett</p>
        <img id="personal" src="https://storage.googleapis.com/public-1234/portfolio/Fishing.jpg" alt="" />
                <img id="personal" src="https://storage.googleapis.com/public-1234/portfolio/CanadianRockies.jpg" alt="" />
  </div>
</div>
        </Col>
        </Row>
      </Container>
        <img id="resumeSmall" src="https://storage.googleapis.com/public-1234/portfolio/BannerGarrettcollinson2.png" alt="" />
    </div>
        );
  }
}

export default Detail;
