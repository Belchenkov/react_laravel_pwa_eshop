import { Col, Container, Row, Card } from 'react-bootstrap';

const Categories = () => {
    return (
        <>
            <Container>
                <Container className='text-center' fluid={true}>
                    <div className='section-title text-center mb-55'>
                        <h2>CATEGORIES</h2>
                        <p>Some of our exclusive collection, you may like</p>
                    </div>
                </Container>
                <Row>
                    <Col xl={6} lg={6} md={2} sm={12} xs={12} key={1}>
                        <Row>
                            <Col className='p-0' xl={3} lg={3} md={3} sm={6} xs={6} key={1}>
                                <Card className="h-100 w-100 text-center">
                                    <Card.Body>
                                        <img
                                            src="https://ir.ozone.ru/s3/cms/76/t92/wc400/1doodle_2.png"
                                            alt="Category"
                                            className="center image-box"
                                        />
                                        <h5 className='category-name mt-3'>Mobile</h5>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Categories;