import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import '../Css/Footer.css';
import CloudSLogo from '../images/logo.png';
import phoneIcon from '../images/icon-phone.svg';
import mailIcon from '../images/icon-email.svg';
import pinIcon from '../images/icon-location.svg';
import facebookIcon from '../images/favicon-32x32.png'
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons"


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



class Footer extends Component {
    render() {
        return (
            <div className={'footer'}>
                <Container className={'footerContainer'}>
                    <Row>
                        <Col className={'leftFooterColumn'}
                             sm={12}
                             md={6}
                        >
                            <Col className={''}
                                 sm={12}
                                 md={7}
                            >
                                <Image className={'footerLogo'} src={CloudSLogo}/>
                                <p className={'footerLogoText'}>
                                    <img src={pinIcon}/> Lorem ipsum dolor sit amet, conssctetur adipiscing elit sed de
                                    eioudsmod tempor incididunt
                                    ut labore et dolore magna aliqua
                                </p>
                            </Col>
                            <Col className={''}
                                       sm={12}
                                       md={5}
                        >
                            <p><img src={phoneIcon}/> +1-543-123-4567 </p>
                            <p><img src={mailIcon}/> example@CloudS.com</p>
                        </Col>
                        </Col>
                        <Col className={'footerLinkContainer'}
                             sm={12}
                             md={6}
                        >
                            <Col   className={''}
                                 sm={12}
                                 md={3}
                            >
                                <a href={'#'}>  <p> About Us </p></a>
                                <a href={'#'}>   <p> Jobs </p></a>
                                <a href={'#'}>  <p> Press </p></a>
                                <a href={'#'}><p> Blog </p></a>

                            </Col>
                            <Col className={''}
                                 sm={12}
                                 md={3}
                            >
                                <a href={'#'}>  <p> Contact Us </p></a>
                                <a href={'#'}>  <p> Terms </p></a>
                                <a href={'#'}>  <p> Privacy </p></a>


                            </Col>
                            <Col className={'footerIconLinks'}
                                 sm={12}
                                 md={6}
                            >
                                <a href={'#'}>    <FontAwesomeIcon icon={faFacebook} /></a>
                                <a href={'#'}>   <FontAwesomeIcon icon={faTwitter} /></a>
                                <a href={'#'}>   <FontAwesomeIcon icon={faInstagram} /></a>

                            </Col>

                        </Col>

                    </Row>

                </Container>
            </div>
        );
    }
}

Footer.propTypes = {};

export default Footer;
