import React from "react";
import "./Headshot.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const Headshot = props => (
  <img src="https://storage.googleapis.com/public-1234/portfolio/thumbnail.png" class="sticky" {...props} />
  

);

export default Headshot;
