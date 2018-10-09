import React from 'react';
import { Col, Row } from "../../components/Grid";
import "./page-footer.css";
import { SocialIcon } from 'react-social-icons';


class FooterPage extends React.Component {
render(){
    return(
    <footer class="footer">
    <div class="footer">
            <Row>
                <Col size="lg-6">
                    <div class="footer-desc text-center">
                        <img src="https://storage.googleapis.com/public-1234/portfolio/logoAnalytics.png" alt=""/>
                        <p> Get help unlocking your company's potential <a href="/about/">Learn More</a>
                        </p>
                    </div>
                </Col>
                <Col size="lg-6">
                    <ul class="social">
                        <li><SocialIcon url="https://www.facebook.com/garrettcollinson" color="#891DB8" class="nav-link" style={{height: 35, width:35}}/></li>
                        <li><SocialIcon url="https://github.com/JGCollinson" color="#891DB8" class="nav-link" style={{height: 35, width:35}}/></li>
                        <li><SocialIcon url="https://twitter.com/Smashing_Joe" color="#891DB8" class="nav-link" style={{height: 35, width:35}}/></li>
                        <li><SocialIcon url="https://www.linkedin.com/in/j-garrett-collinson/" color="#891DB8" class="nav-link" style={{height: 35, width:35}}/></li>
                        <li><SocialIcon url="https://www.instagram.com/garrettcollinson/" color="#891DB8" class="nav-link" style={{height: 35, width:35}}/></li>
                        <li><SocialIcon network="email" url="mailto:jgarrettcollinson@outlook.com" color="#891DB8" class="nav-link" style={{height: 35, width:35}}/></li>
                    </ul>
                </Col>
            </Row>  
        </div>  
    <Row>
        <Col size="lg-3"/>
    <Col size="lg-6">
    <div class="footer-bottom">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/Portfolio">Portfolio</a></li>
                    <li><a href="/Contact">Message</a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://storage.googleapis.com/public-1234/Josef%20Garrett%20Collinson%20Resume.pdf">Resume</a></li>
                    <li><a href="/Call">Schedule Call</a></li>
                </ul> 
            <p> &copy; {(new Date().getFullYear())} Copyright: <a href="https://garrettcollinson.com"> GarrettCollinson.com </a></p>
        </div>
        </Col>
        </Row>
</footer>
);
}
}

export default FooterPage;