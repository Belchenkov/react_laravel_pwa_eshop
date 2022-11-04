import { Col, Container, Row, Card } from 'react-bootstrap';

const FeaturedProducts = () => {
    return (
        <>
            <Container className='text-center' fluid={true}>
                <div className='section-title text-center mb-55'>
                    <h2>FEATURED PRODUCT</h2>
                    <p>Some of our exclusive collection, you may like</p>
                </div>
                <Row>
                   <Col className='p-1' xl={2} lg={2} md={2} sm={4} xs={6}>
                        <Card className='image-box card'>
                            <img
                                className='center'
                                src="https://ir.ozone.ru/s3/multimedia-b/wc1000/6410185019.jpg"
                                alt="Image"
                            />
                            <Card.Body>
                                <p className='product-name-on-card'>Смартфон Apple iPhone 14 Pro 128 ГБ, Space Black</p>
                                <p className='product-price-on-card'>Price: $1500</p>
                            </Card.Body>
                        </Card>
                   </Col>
                </Row>
            </Container>
        </>
    );
};

export default FeaturedProducts;