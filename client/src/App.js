import React from "react";
import HttpsRedirect from 'react-https-redirect';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contact from "./pages/Contact";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Jumbotron from "./components/Jumbotron";
import Detail from "./pages/Detail"
import Portfolio from "./pages/Portfolio"
import Call from "./pages/Call"


const App = () => (
  <HttpsRedirect>
    <Router>
      <div>
        <Nav />
        <Jumbotron />
        <Switch>
          <Route exact path="/" component={Detail} />
          <Route exact path="/Portfolio" component={Portfolio} />
          <Route exact path="/Contact" component={Contact} />
          <Route exact path="/Resume" component={Contact} />
          <Route exact path="/Call" component={Call} />
          {/* <Route exact path="/Dash" component={Dash} /> */}
          <Route component={NoMatch} />
        </Switch>
      <Footer />
      </div>
    </Router>
  </HttpsRedirect>
);

export default App;
