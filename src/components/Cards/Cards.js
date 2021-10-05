import React from 'react';
import './Cards.css';
import { Card } from 'react-bootstrap';

const Cards = (props) => {
    const { img, name, fees, duration, course } =props.serve;
    return (
        <div className="cards-style">
    <Card.Img variant="top" src={img}/>
            <Card.Body>
      <Card.Title>Name: {name}</Card.Title>
      <Card.Text>Fees: {fees}</Card.Text> 
      <Card.Text>Duration: {duration}</Card.Text> 
      <Card.Text>course: {course}</Card.Text> 
      
      </Card.Body>
        </div>
    );
};

export default Cards;