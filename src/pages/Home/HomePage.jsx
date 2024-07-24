import React, { useState, useEffect } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import PageHeader from '../../components/PageHeader';

// images
import homeHeaderBG from '../../assets/img/home-header-bg.png';
import expresso from "../../assets/img/expresso.png";
import ourCollection from '../../assets/img/our-collection.png';

import coffee from '../../assets/img/coffee-bean.svg';
import truck from '../../assets/img/truck.svg';
import giftBox from '../../assets/img/gift-box.svg';



import './styles/HomePage.css'


function HomePage() {
    return (
        <Container>
            <PageHeader
                heading='Great coffee made simple.'
                text='Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule.'
                img={homeHeaderBG}
                button={true}
            />

            <section className="collection">
                <img src={ourCollection} alt="our collection" className="our-collection" />
                <Row>

                    {
                        collection.map(item => <Col md="3" className='text-center' key={item.id}>
                            <div className="collection-item">
                                <img src={item.img} alt={item.title} />
                                <h4>{item.title}</h4>
                                <p>{item.description}</p>
                            </div>
                        </Col>)
                    }

                </Row>
            </section>


            <section className="advantages text-center">
                <h2>Why choose us?</h2>
                <p>
                    A large part of our role is choosing which particular coffees will be featured
                    in our range. This means working closely with the best coffee growers to give
                    you a more impactful experience on every level.
                </p>

                <div className="d-flex justify-content-center">
                    {
                        advantages.map(advantage => <Card className="advantage">
                            <Card.Body>
                                <img src={advantage.img} alt="icon" />
                                <h4>{advantage.title}</h4>
                                <p>{advantage.text}</p>
                            </Card.Body>
                        </Card>

                        )
                    }
                </div>
            </section>


        </Container>


    );
}

export default HomePage;


const advantages = [
    {
        id: 1,
        img: coffee,
        title: 'Best quality',
        text: "Discover an endless variety of the world’s best artisan coffee from each of our roasters."
    }, {
        id: 2,
        img: giftBox,
        title: 'Exclusive benefits',
        text: "Special offers and swag when you subscribe, including 30% off your first shipment."
    }, {
        id: 3,
        img: truck,
        title: 'Free shipping',
        text: "We cover the cost and coffee is delivered fast. Peak freshness: guaranteed."
    },
]

const collection = [
    {
        id: 1,
        img: expresso,
        title: 'Gran Espresso',
        description: "Light and flavorful blend with cocoa and black pepper for an intense experience",
    }, {
        id: 2,
        img: expresso,
        title: 'Planalto',
        description: "Brazilian dark roast with rich and velvety body, and hints of fruits and nuts",
    }, {
        id: 3,
        img: expresso,
        title: 'Picollo',
        description: "Mild and smooth blend featuring notes of toasted almond and dried cherry",
    }, {
        id: 4,
        img: expresso,
        title: 'Dance',
        description: "Ethiopian hand-harvested blend densely packed with vibrant fruit notes",
    },
]