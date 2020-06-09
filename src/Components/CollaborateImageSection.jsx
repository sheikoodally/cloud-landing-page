import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import stayProductiveImage from '../images/illustration-stay-productive.png'
import '../Css/CollaborateImageSection.css'

class CollaborateImageSection extends Component {
    render() {
        return (
            <div className={'collaborateSection'}>
                <Container className={'collaborateSectionContainer'}>
                    <Row>
                        <Col
                            sm={12}
                            md={12}
                            lg={6}
                            xl={6}
                        >
                            <Image src={stayProductiveImage}/>
                        </Col>
                        <Col
                            className={'collaborateTextContainer'}
                            sm={12}
                            md={12}
                            lg={6}
                            xl={6}
                        >
                            <h1> Stay productive, wherever you are </h1>
                            <p>
                                Never let location be an issue when accessing your files. CloudS has you
                                covered for all of your file storage needs.
                            </p>
                            <p>
                               Securely share files and folders with friends, family and colleageus for live collaboration.
                                No email attachments required.
                            </p>
                        </Col>

                    </Row>
                </Container>
            </div>
        );
    }
}

CollaborateImageSection.propTypes = {};

export default CollaborateImageSection;
