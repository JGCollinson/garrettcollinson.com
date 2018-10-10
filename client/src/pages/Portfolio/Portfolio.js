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
<h1 class="card-header">You-Goal</h1>
<div class="card-body">
    <h5 class="card-title">Rate your favorite fifa players!</h5>
        <span class="badge badge-pill badge-light">React</span>     <span class="badge badge-pill badge-light">NodeJS</span>     <span class="badge badge-pill badge-light">Bootstrap</span>     <span class="badge badge-pill badge-light">MongoDB</span>     <span class="badge badge-pill badge-light">Mongoose</span>     <span class="badge badge-pill badge-light">Material Design React</span>  <span class="badge badge-pill badge-light">Axios</span>
</div>
<a
        	target="_blank"
            href="https://you-goal.herokuapp.com/"
            >
			<img src="https://storage.googleapis.com/public-1234/portfolio/FIFA.jpg"/>
			</a>
			
<div class="card-body">
<button type="button" class="btn btn-info"><a href="https://you-goal.herokuapp.com/" class="card-link">Demo</a></button>
    <button type="button" class="btn btn-info"><a href="https://github.com/JGCollinson/YoUGoal" class="card-link">GitRepo</a></button>
</div>
<div class="card-footer text-muted">
    Solo Build
</div>
</div>
<div class="card lg-3">
<h1 class="card-header">Gif Search App</h1>
<div class="card-body">
    <h5 class="card-title">Search Giphy and create quick search buttons</h5>    <span class="badge badge-pill badge-light">Bootstrap</span>     <span class="badge badge-pill badge-light">JQuery</span>     <span class="badge badge-pill badge-light">Ajax</span>     <span class="badge badge-pill badge-light">Giphy API</span>
</div>
<a
        	target="_blank"
            href="https://jgcollinson.github.io/Jiftastic/"
            >
			<img src="https://vignette.wikia.nocookie.net/logopedia/images/1/18/Jif_logo.svg/revision/latest/scale-to-width-down/408?cb=20101021195050"/>
			</a>
<div class="card-body">
<button type="button" class="btn btn-info"><a href="https://jgcollinson.github.io/Jiftastic/" class="card-link">Demo</a></button>
    <button type="button" class="btn btn-info"><a href="https://github.com/JGCollinson/Jiftastic" class="card-link">GitRepo</a></button>
</div>
<div class="card-footer text-muted">
    Solo Build
</div>
</div>
<div class="card lg-3">
<h1 class="card-header">Crystal Game</h1>
<div class="card-body">
    <h5 class="card-title">Play My Crystal-Math Brain Teaser its addicting</h5>
        <span class="badge badge-pill badge-light">NodeJS</span>     <span class="badge badge-pill badge-light">Express.js</span>     <span class="badge badge-pill badge-light">Bootstrap</span>     <span class="badge badge-pill badge-light">JQuery</span>     <span class="badge badge-pill badge-light">Font-Awesome</span>     <span class="badge badge-pill badge-light">Body-Parser</span>
</div>
<a
        	target="_blank"
            href="https://jgcollinson.github.io/week-4-game/"
            >
			<img src="http://www.g33kwatch.com/wp-content/uploads/2011/02/rpg.jpg"/>
			</a>
			
<div class="card-body">
<button type="button" class="btn btn-info"><a href="https://jgcollinson.github.io/week-4-game/" class="card-link">Demo</a></button>
    <button type="button" class="btn btn-info"><a href="https://github.com/JGCollinson/week-4-game" class="card-link">GitRepo</a></button>
</div>
<div class="card-footer text-muted">
    Solo Build
</div>
</div>
</Col>
<Col size="lg-3">
		<div class="card lg-3">
<h1 class="card-header">ShopList App</h1>
<div class="card-body">
    <h5 class="card-title">Benchmark your shopping list against Wal-Marts prices</h5>
	<span class="badge badge-pill badge-light">Plotly.js</span>
    <span class="badge badge-pill badge-light">Wal-Mart API</span>
    <span class="badge badge-pill badge-light">Bootstrap</span>
    <span class="badge badge-pill badge-light">JQuery</span>
    <span class="badge badge-pill badge-light">Google Maps API</span>
</div>
<a
        	target="_blank"
            href="https://jgcollinson.github.io/ShopList/"
            >
			<img src="https://storage.googleapis.com/public-1234/portfolio/shoplist.png"/>
			</a>
<div class="card-body">
    <button type="button" class="btn btn-info"><a href="https://jgcollinson.github.io/ShopList/" class="card-link">Demo</a></button>
    <button type="button" class="btn btn-info"><a href="https://github.com/JGCollinson/ShopList" class="card-link">GitRepo</a></button>
</div>
<div class="card-footer text-muted">
    Partner Build
</div>
</div>
<div class="card lg-3">
<h1 class="card-header"> Firebase Train App</h1>
<div class="card-body">
    <h5 class="card-title">Manage train arrival times with MomentJS and Firebase</h5>
        <span class="badge badge-pill badge-light">Firebase</span>     <span class="badge badge-pill badge-light">Express.js</span>     <span class="badge badge-pill badge-light">Bootstrap</span>     <span class="badge badge-pill badge-light">JQuery</span>     <span class="badge badge-pill badge-light">Font-Awesome</span>     <span class="badge badge-pill badge-light">Body-Parser</span>
</div>
<a
        	target="_blank"
            href="https://jgcollinson.github.io/TrainScheduler/"
            >
			<img src="http://img1.svstatic.com/voyage/sri-lanka-prendre-le-train_9315_w620.jpg"/>
			</a>
<div class="card-body">    
<button type="button" class="btn btn-info"><a href="https://jgcollinson.github.io/TrainScheduler/" class="card-link">Demo</a></button>
    <button type="button" class="btn btn-info"><a href="https://github.com/JGCollinson/TrainScheduler" class="card-link">GitRepo</a></button>
</div>
<div class="card-footer text-muted">
    Solo Build
</div>
</div>
</Col>
<Col size="lg-3">
<div class="card lg-3">
<h1 class="card-header"> Friend Finder App</h1>
<div class="card-body">
    <h5 class="card-title">Fill out the Quiz and find your friendship match</h5>
    <span class="badge badge-pill badge-light">NodeJS</span>
    <span class="badge badge-pill badge-light">Express.js</span>
    <span class="badge badge-pill badge-light">Bootstrap</span>
    <span class="badge badge-pill badge-light">JQuery</span>
    <span class="badge badge-pill badge-light">Font-Awesome</span>
    <span class="badge badge-pill badge-light">Body-Parser</span>
</div>
<a
        	target="_blank"
            href="https://fryndfynder.herokuapp.com/"
            >
			<img src="https://storage.googleapis.com/public-1234/portfolio/Untitled-design-2-1-796x417.png"/>
			</a>

<div class="card-body">
    <button type="button" class="btn btn-info"><a href="https://fryndfynder.herokuapp.com/" class="card-link">Demo</a></button>
    <button type="button" class="btn btn-info"><a href="https://github.com/JGCollinson/friendfinder" class="card-link">GitRepo</a></button>
</div>
<div class="card-footer text-muted">
    Solo Build
</div>
</div>
<div class="card lg-3">
<h1 class="card-header">Star Wars Game</h1>
<div class="card-body">
    <h5 class="card-title">Play My Star Wars Trivia Game</h5>
        <span class="badge badge-pill badge-light">NodeJS</span>     <span class="badge badge-pill badge-light">Express.js</span>     <span class="badge badge-pill badge-light">Bootstrap</span>     <span class="badge badge-pill badge-light">JQuery</span>     <span class="badge badge-pill badge-light">Font-Awesome</span>     <span class="badge badge-pill badge-light">Body-Parser</span>
</div>
<a
        	target="_blank"
            href="https://jgcollinson.github.io/TriviaGame/#"
            >
			<img src="http://starwarsblog.starwars.com/wp-content/uploads/2016/06/Screen-Shot-2016-06-09-at-12.29.41-PM-1536x864-479438850004.jpg"/>
			</a>
<div class="card-body">
<button type="button" class="btn btn-info"><a href="https://jgcollinson.github.io/TriviaGame/#" class="card-link">Demo</a></button>
    <button type="button" class="btn btn-info"><a href="https://github.com/JGCollinson/TriviaGame" class="card-link">GitRepo</a></button>
</div>
<div class="card-footer text-muted">
    Solo Build
</div>
</div>
		
</Col>
<Col size="lg-3">
<div class="card lg-3">
<h1 class="card-header">Burger Builder</h1>
<div class="card-body">
    <h5 class="card-title">Simple ORM burger listing app</h5>
        <span class="badge badge-pill badge-light">Express.js</span>     <span class="badge badge-pill badge-light">ORM</span>     <span class="badge badge-pill badge-light">Handlebars</span>     <span class="badge badge-pill badge-light">JQuery</span>     <span class="badge badge-pill badge-light">MySQL</span>     <span class="badge badge-pill badge-light">Body-Parser</span>
</div>
<a
        	target="_blank"
            href="https://protected-plains-15458.herokuapp.com/"
            >
			<img src="https://storage.googleapis.com/public-1234/portfolio/bobsburger.jpg"/>
			</a>
<div class="card-body">
<button type="button" class="btn btn-info"><a href="https://protected-plains-15458.herokuapp.com/" class="card-link">Demo</a></button>
    <button type="button" class="btn btn-info"><a href="https://github.com/JGCollinson/burgertime_today" class="card-link">GitRepo</a></button>
</div>
<div class="card-footer text-muted">
    Solo Build
</div>
</div>
		<div class="card lg-3">
<h1 class="card-header">NodeJS API CLI App</h1>
<div class="card-body">
    <h5 class="card-title">Make Tweets, Get Movie Info, and Get Spotifiy Artist Info all from the command line</h5>
        <span class="badge badge-pill badge-light">NodeJS</span>     <span class="badge badge-pill badge-light">Express.js</span>     <span class="badge badge-pill badge-light">Bootstrap</span>     <span class="badge badge-pill badge-light">JQuery</span>     <span class="badge badge-pill badge-light">Font-Awesome</span>     <span class="badge badge-pill badge-light">Body-Parser</span>
</div>
<a
        	target="_blank"
            href="https://github.com/JGCollinson/liri_bot_JS"
            >
			<img src="https://storage.googleapis.com/public-1234/portfolio/nodeJSCLI.png"/>
			</a>
<div class="card-body">
<button type="button" class="btn btn-info"><a href="https://github.com/JGCollinson/liri_bot_JS" class="card-link">Demo</a></button>
    <button type="button" class="btn btn-info"><a href="https://github.com/JGCollinson/liri_bot_JS" class="card-link">GitRepo</a></button>
</div>
<div class="card-footer text-muted">
    Solo Build
</div>
</div>
		
		<div class="card lg-3">
<h1 class="card-header"> Online Store Command Line Applet</h1>
<div class="card-body">
    <h5 class="card-title">Inventory Control with MySQL and NodeJS</h5>
    <span class="badge badge-pill badge-light">Express.js</span>
    <span class="badge badge-pill badge-light">InquirerJS</span>
    <span class="badge badge-pill badge-light">MySQL</span>
    <span class="badge badge-pill badge-light">NodeJS</span>
    <span class="badge badge-pill badge-light">NodeJSCLI</span>
    <span class="badge badge-pill badge-light">Express.js</span>

</div>
<a
        	target="_blank"
            href="https://github.com/JGCollinson/bamazon"
            >
			<img src="https://storage.googleapis.com/public-1234/portfolio/BamazonCLI.png"/>
			</a>
<div class="card-body">
<button type="button" class="btn btn-info"><a href="https://github.com/JGCollinson/bamazon" class="card-link">Demo</a></button>
    <button type="button" class="btn btn-info"><a href="https://github.com/JGCollinson/bamazon" class="card-link">GitRepo</a></button>
</div>
<div class="card-footer text-muted">
    Solo Build
</div>
</div>
</Col>
		</Row>
    </Container>
    );
}
}

export default Portfolio;
