import React, {Component} from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import '../Css/IconOverviewSection.css';
import computerIcon from '../images/icon-access-anywhere.svg';
import Image from "react-bootstrap/Image";
import securityIcon from "../images/icon-security.svg";
import collaborationIcon from "../images/icon-collaboration.svg";
import fileIcon from "../images/icon-any-file.svg";

class IconOverviewSection extends Component {
    render() {
        return (

            <div className={'iconOverviewSectionContainer'}>
                <Container className={'iconOverviewContainer'}>
                    <Row>
                        <Col className={'iconOverviewColumn'}
                            sm={12}
                            md={6}
                        >
                            <Image src={computerIcon}/>
                            <h5>  Access your files, anywhere </h5>
                            <p>
                                The ability to use a smartphone, tablet, or computer to access your account means
                                your files follow you everywhere.
                            </p>
                        </Col>
                        <Col className={'iconOverviewColumn'}
                            sm={12}
                            md={6}
                        >
                            <Image src={securityIcon}/>
                             <h5>  Security you can trust </h5>
                            <p>
                                2-factor authentication and user-controlled encryption are just a couple of the secuirty
                                features we allow to help secure your files.
                            </p>
                        </Col>

                    </Row>
                    <Row>
                        <Col className={'iconOverviewColumn'}
                            sm={12}
                            md={6}
                        >
                            <Image src={collaborationIcon}/>
                             <h5>  Real-time collaboration </h5>
                            <p>
                                Securely share files and folders with friends,
                                family and colleagues for live collaboration. No email attachments required.
                            </p>
                        </Col>
                        <Col className={'iconOverviewColumn'}
                            sm={12}
                            md={6}
                        >
                            <Image src={fileIcon}/>
                             <h5>  Store any type of file </h5>
                            <p>
                                Whether you're sharing holidays photos or work documents, CloudS has you covered allowing for all
                                types to be securely stored and shared.
                            </p>
                        </Col>

                    </Row>
                </Container>
            </div>
        );
    }
}

IconOverviewSection.propTypes = {};

export default IconOverviewSection;
