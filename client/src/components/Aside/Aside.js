import React from "react";
import "./Aside.css"

const Nav = () => (
  <aside>
				<a id="underline" href="#" onclick="Calendly.showPopupWidget('https://calendly.com/jgarrettcollinson');return false;">
			<h1> Connect with Me
				<hr size="5"/>
			</h1>
			</a>
			<a target="_blank" href="https://www.linkedin.com/in/j-garrett-collinson-26491a55" target="_blank">
				<img src="assets\images\linkedin-64.png"/>
			</a>
			<a target="_blank" href="https://github.com/JGCollinson" target="_blank">
				<img href="" src="assets\images\github2-64.png"/>
			</a>
			<a>
				<img href="" style="height: 64px; width: 64px;" onclick="Calendly.showPopupWidget('https://calendly.com/jgarrettcollinson');return false;"
				    src="https://financesonline.com/uploads/2017/08/calel.png"/>
			</a>
		</aside>
);

export default Nav;
