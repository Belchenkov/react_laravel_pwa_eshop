import { createRef } from 'react';
import { Card, Container, Row } from 'react-bootstrap';
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NewArrival = () => {
    const customSlider = createRef();

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 3000,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const previousSlide = () => {
        customSlider.current.slickPrev()
    };

    const nextSlide = () => {
        customSlider.current.slickNext()
    };

    return (
        <>
            <Container className='text-center' fluid={true}>
                <div className='section-title text-center mb-55'>
                    <h2>
                        <span>NEW ARRIVAL</span> &nbsp;
                        <a 
                            href="#" 
                            className="btn btn-sm ml-2 site-btn"
                            onClick={previousSlide}
                        >
                            <i className="fa fa-angle-left"></i>
                        </a> &nbsp;
                        <a 
                            href="#" 
                            className="btn btn-sm ml-2 site-btn"
                            onClick={nextSlide}
                        >
                            <i className="fa fa-angle-right"></i>
                        </a>
                    </h2>
                    <p>Some of our exclusive collection, you may like</p>
                </div>
                <Row>
                    <Slider {...settings} ref={customSlider}>
                        <div>
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
                        </div>
                        <div>
                            <h3>2</h3>
                        </div>
                        <div>
                            <h3>3</h3>
                        </div>
                        <div>
                            <h3>4</h3>
                        </div>
                        <div>
                            <h3>5</h3>
                        </div>
                        <div>
                            <h3>6</h3>
                        </div>
                        <div>
                            <h3>7</h3>
                        </div>
                        <div>
                            <h3>8</h3>
                        </div>
                    </Slider>
                </Row>
            </Container>
        </>
    );
};

export default NewArrival;