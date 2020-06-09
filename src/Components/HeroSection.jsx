import React, {Component} from 'react';
import Image from "react-bootstrap/Image";
import heroImage from '../images/illustration-intro.png'
import '../Css/HeroSection.css'
import Button from "react-bootstrap/Button";

class HeroSection extends Component {
    render() {
        return (
            <div className={'heroSectionContainer'}>
                <Image src={heroImage}/>
                <div className={'heroText'}>
                <h2>All your files in one secure location, </h2>
                <h2>accesible anywhere.</h2>
                <p>
                    CloudS stores all your most imporant files in one secure location.
                    Access them wherever you need, share and collaborate with
                    friends family, and co-workers.
                </p>
                <Button className={'getStartedButton'}> Get Started</Button>
                </div>
            </div>
        );
    }
}

HeroSection.propTypes = {};

export default HeroSection;
