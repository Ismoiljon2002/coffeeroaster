import React, { useState, useEffect } from 'react';

import { Container } from 'react-bootstrap';
import PageHeader from '../../components/PageHeader';
import subscribeHeaderBG from '../../assets/img/subscribe-header-bg.png'

function SubscribePage() {
    return (<>
        <Container>
            <PageHeader
                heading='Create a plan'
                text='Build a subscription plan that best fits your needs. We offer an assortment of the best artisan coffees from around the globe delivered fresh to your door.'
                img={subscribeHeaderBG}
            />
        </Container>
    </> );
}

export default SubscribePage;