import React from 'react';
import { Card } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Service from '../Service/Service';
import './Home.css';

const Home = () => {
    return (
        <div>
               <Header></Header>
               <Service></Service>
               <Card></Card>
               <Footer></Footer>
        </div>
    );
};

export default Home;