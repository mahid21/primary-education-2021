import React from 'react';
import './Student.css';
import { Card } from 'react-bootstrap';

const Student = (props) => {
    const { img, name, fess, duration, course } =props.ser;
    return (
        <div className="Student-style">
    <Card.Img variant="top" src={img}/>
            <Card.Body>
      <Card.Title>Name: {name}</Card.Title>
      <Card.Text>Fees: {fess}</Card.Text> 
      <Card.Text>Duration: {duration}</Card.Text> 
      <Card.Text>Course: {course}</Card.Text> 
      </Card.Body>
        </div>
    );
};

export default Student;