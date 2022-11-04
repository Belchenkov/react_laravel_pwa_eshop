import { Card, Col, Container, Row } from 'react-bootstrap';

const Collection = () => {
    return (
        <>
            <Container className='text-center' fluid={true}>
                <div className='section-title text-center mb-55'>
                    <h2>PRODUCT COLLECTION</h2>
                    <p>Some of our exclusive collection, you may like</p>
                </div>
                <Row>
                    <Col className='p-0' xl={3} lg={3} md={3} sm={6} xs={6}>
                        <Card className='image-box card w-100'>
                            <img
                                src="https://ir.ozone.ru/s3/multimedia-j/wc1000/6348969979.jpg"
                                alt="Product"
                                className="center w-75"
                            />
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Collection;