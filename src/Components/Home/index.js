import React from 'react';
import { Figure, Image, Container, Row, Col } from 'react-bootstrap';

// Importing Sass with Bootstrap CSS
import '../../Saas/App.scss';

function Home(){
    return(
        <div>
            <Container>
                <Row>
                    <Col xs={3} md={3}>
                        <Image height="140" width="92" src={require("../../Images/servidor-mastercard.png")} rounded />
                    </Col>
                    <Col xs={3} md={3}>
                        <Image height="140" width="92" src={require("../../Images/servidor-visa.png")} rounded />
                    </Col>
                    <Col xs={3} md={3}>
                        <Image height="140" width="92" src={require("../../Images/servidor-jpos.png")} rounded />
                    </Col>
                    <Col xs={3} md={3}>
                        <Image height="140" width="92" src={require("../../Images/servidor-tecban.png")} rounded />
                    </Col>
                </Row>

                <Row>
                    <Col xs={3} md={3}>
                        <Figure>
                            <Figure.Image
                                width={92}
                                height={140}
                                alt="140x92"
                                src={require("../../Images/servidor-jpos.png")}
                            />
                            <Figure.Caption>
                                JPOS01
                            </Figure.Caption>
                        </Figure>
                    </Col>
                    <Col xs={3} md={3}>
                        <Figure>
                            <Figure.Image
                                width={92}
                                height={140}
                                alt="140x92"
                                src={require("../../Images/servidor-jpos.png")}
                            />
                            <Figure.Caption>
                                JPOS03
                            </Figure.Caption>
                        </Figure>
                    </Col>
                    <Col xs={3} md={3}>
                        <Figure>
                            <Figure.Image
                                width={92}
                                height={140}
                                alt="140x92"
                                src={require("../../Images/servidor-jpos.png")}
                            />
                            <Figure.Caption>
                                JPOS02
                            </Figure.Caption>
                        </Figure>
                    </Col>
                    <Col xs={3} md={3}>
                        <Figure>
                            <Figure.Image
                                width={92}
                                height={140}
                                alt="140x92"
                                src={require("../../Images/servidor-jpos.png")}
                            />
                            <Figure.Caption>
                                JPOS04
                            </Figure.Caption>
                        </Figure>
                    </Col>
                </Row>




            </Container>
        </div>
    );
}

export default Home;