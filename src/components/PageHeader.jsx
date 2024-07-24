import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';

import './styles/PageHeader.css'
import { Link } from 'react-router-dom';


function PageHeader({ heading = '', text = '', img = '', button = false }) {
    return ( 
        <section className='header text-white' style={{backgroundImage: `url("${img}")`}}>
            
            <h1>{heading}</h1>
            <p>{text}</p>

            {button && <Link to={'/subscribe'}> <Button>Create your plan</Button> </Link>}

        </section>
     );
}

export default PageHeader;