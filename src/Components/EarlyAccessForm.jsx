import React, {Component} from 'react';
import '../Css/EarlyAccessForm.css';
import Card from 'react-bootstrap/Card'
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class EarlyAccessForm extends Component {
    render() {
        return (
            <div className={'earlyAccessFormContainer'}>
                <Card className={'earlyAccessFormCard'}>
                    <Card.Body>
                        <h4> Get early access today </h4>
                        <p> It only takes a minute to sign up and our free starter tier is extremely generous. If you
                            have any questions, our support team would be happy to help you.</p>
                        <div className={'formContainer'}>
                            <Container>
                                <Row className={'formRow'}>

                                        <Col sm={8}>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Control className={'formInput'} type="email" placeholder="Enter email"/>
                                            </Form.Group>
                                        </Col>
                                        <Col sm={4}>
                <Button className={'formSubmitButton'}> Get Started</Button>

                                        </Col>
                                </Row>
                            </Container>

                        </div>


                    </Card.Body>
                </Card>
            </div>
        );
    }
}

EarlyAccessForm.propTypes = {};

export default EarlyAccessForm;
