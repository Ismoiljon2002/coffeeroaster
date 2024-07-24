import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import PageHeader from '../../components/PageHeader';

import aboutHeaderBG from '../../assets/img/about-header-bg.jpg'

function AboutPage() {
    return (<>
        <Container>
            <PageHeader
                heading='About Us'
                text='Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from around the world. We have since been dedicated to bring the perfect cup - from bean to brew - in every shipment.'
                img={aboutHeaderBG}
            />
        </Container>
    </> );
}

export default AboutPage;