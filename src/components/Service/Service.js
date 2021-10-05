import React, { useEffect, useState } from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import Student from '../Student/Student';

const Service = () => {
    const [ service, setService ] = useState([ ]);
    useEffect( ()=>{
        fetch('./data.JSON')
        .then(res => res.json())
        .then(data => setService(data))
    },[ ])
    return (
        <div>
                <CardGroup>
                  <Card className="card">
                  {
                    service.map(str => <Student
                    key = {str.name}
                    ser = {str}
                    ></Student> )
                  }
                    </Card>
            </CardGroup>
        </div>
    );
};

export default Service;    