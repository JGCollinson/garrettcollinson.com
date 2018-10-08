import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import Headshot from "../../components/Headshot";
import "./Portfolio.css";
class Portfolio extends Component {
  state = {
    Contact: {}
  };
  render() {
    return (
<Container fluid>
        <h1>Portfolio</h1>
<Row>
	<Col size="lg-3">
		<div class="card lg-3">
  <h3 class="card-header"> Friend Finder App</h3>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <h6 class="card-subtitle text-muted">Support card subtitle</h6>
  </div>
  <a
        	target="_blank"
            href="https://fryndfynder.herokuapp.com/"
            >
			<img src="https://via.placeholder.com/275x200"/>
			</a>
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Cras justo odio</li>
    <li class="list-group-item">Dapibus ac facilisis in</li>
    <li class="list-group-item">Vestibulum at eros</li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
  <div class="card-footer text-muted">
    2 days ago
  </div>
</div>
</Col>
<Col size="xs-1"/>
<Col size="lg-3">
		<div class="card lg-3">
  <h3 class="card-header">ShopList App</h3>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <h6 class="card-subtitle text-muted">Support card subtitle</h6>
  </div>
  <a
        	target="_blank"
            href="https://jgcollinson.github.io/ShopList/"
            >
			<img src="https://via.placeholder.com/275x200"/>
			</a>
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Cras justo odio</li>
    <li class="list-group-item">Dapibus ac facilisis in</li>
    <li class="list-group-item">Vestibulum at eros</li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
  <div class="card-footer text-muted">
    2 days ago
  </div>
</div>
</Col>
<Col size="lg-3">
		<div class="card lg-3">
  <h3 class="card-header">Express.js/ORM/Handlebars Burger Builder</h3>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <h6 class="card-subtitle text-muted">Support card subtitle</h6>
  </div>
  <a
        	target="_blank"
            href="https://protected-plains-15458.herokuapp.com/"
            >
			<img src="https://via.placeholder.com/275x200"/>
			</a>
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Cras justo odio</li>
    <li class="list-group-item">Dapibus ac facilisis in</li>
    <li class="list-group-item">Vestibulum at eros</li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
  <div class="card-footer text-muted">
    2 days ago
  </div>
</div>
</Col>
<Col size="xs-1"/>
<Col size="lg-3">
		<div class="card lg-3">
  <h3 class="card-header">Gif Search App</h3>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <h6 class="card-subtitle text-muted">Support card subtitle</h6>
  </div>
  <a
        	target="_blank"
            href="https://jgcollinson.github.io/Jiftastic/"
            >
			<img src="https://vignette.wikia.nocookie.net/logopedia/images/1/18/Jif_logo.svg/revision/latest/scale-to-width-down/408?cb=20101021195050"/>
			</a>
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Cras justo odio</li>
    <li class="list-group-item">Dapibus ac facilisis in</li>
    <li class="list-group-item">Vestibulum at eros</li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
  <div class="card-footer text-muted">
    2 days ago
  </div>
</div>
</Col>
		</Row>
		<Row>
	<Col size="lg-3">
		<div class="card lg-3">
  <h3 class="card-header"> Firebase Train App</h3>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <h6 class="card-subtitle text-muted">Support card subtitle</h6>
  </div>
  <a
        	target="_blank"
            href="https://jgcollinson.github.io/TrainScheduler/"
            >
			<img src="http://img1.svstatic.com/voyage/sri-lanka-prendre-le-train_9315_w620.jpg"/>
			</a>
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Cras justo odio</li>
    <li class="list-group-item">Dapibus ac facilisis in</li>
    <li class="list-group-item">Vestibulum at eros</li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
  <div class="card-footer text-muted">
    2 days ago
  </div>
</div>
</Col>
<Col size="xs-1"/>
<Col size="lg-3">
		<div class="card lg-3">
  <h3 class="card-header">NodeJS API App</h3>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <h6 class="card-subtitle text-muted">Support card subtitle</h6>
  </div>
  <a
        	target="_blank"
            href="https://github.com/JGCollinson/liri_bot_JS"
            >
			<img src="https://via.placeholder.com/275x200"/>
			</a>
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Cras justo odio</li>
    <li class="list-group-item">Dapibus ac facilisis in</li>
    <li class="list-group-item">Vestibulum at eros</li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
  <div class="card-footer text-muted">
    2 days ago
  </div>
</div>
</Col>
<Col size="lg-3">
		<div class="card lg-3">
  <h3 class="card-header">Star Wars Game</h3>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <h6 class="card-subtitle text-muted">Support card subtitle</h6>
  </div>
  <a
        	target="_blank"
            href="https://jgcollinson.github.io/TriviaGame/#"
            >
			<img src="http://starwarsblog.starwars.com/wp-content/uploads/2016/06/Screen-Shot-2016-06-09-at-12.29.41-PM-1536x864-479438850004.jpg"/>
			</a>
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Cras justo odio</li>
    <li class="list-group-item">Dapibus ac facilisis in</li>
    <li class="list-group-item">Vestibulum at eros</li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
  <div class="card-footer text-muted">
    2 days ago
  </div>
</div>
</Col>
<Col size="xs-1"/>
<Col size="lg-3">
		<div class="card lg-3">
  <h3 class="card-header">Crystal Game</h3>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <h6 class="card-subtitle text-muted">Support card subtitle</h6>
  </div>
  <a
        	target="_blank"
            href="https://jgcollinson.github.io/week-4-game/"
            >
			<img src="http://www.g33kwatch.com/wp-content/uploads/2011/02/rpg.jpg"/>
			</a>
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Cras justo odio</li>
    <li class="list-group-item">Dapibus ac facilisis in</li>
    <li class="list-group-item">Vestibulum at eros</li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
  <div class="card-footer text-muted">
    2 days ago
  </div>
</div>
</Col>
		</Row>
    </Container>
    );
  }
}

export default Portfolio;
