import React, { useEffect, useState } from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import Cards from '../Cards/Cards';
import './Services.css';

const Services = () => {
    const [ services, setServices ] = useState([ ]);
    useEffect( ()=>{
        fetch('./service.JSON')
        .then(res => res.json())
        .then (data => setServices(data))
    },  [])
    return (
        <CardGroup>
    <Card className="main-card">
    {
        services.map(serve => <Cards
         key = {serve.name}
         serve = {serve}
        ></Cards>)
    }
      </Card>
</CardGroup>
    );
};

export default Services;