import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Contact.css';

const Contact = () => {
    return (
        <div>
             <Header></Header>
        <div className=" container d-flex bg-light">
           
         
            <div className="bg-primary text-white p-5 m-5">
                <h3>Dhaka Address</h3>
                <p>
                Uttar Purba Badda <br/>
            Kazi Bari Masjid, Kuril,<br/>
             Bishwa Road · 01683-774414
                </p>
            </div>
            <div className="bg-warning text-white p-5 m-5">
                <h3>Khulna Address</h3>
                <p> Gollamari main road <br/>
            Opposite of puraton green road<br/>
            Phone:01321-774414</p>
            </div>
            
            </div>
            <Footer></Footer>
              </div>
    );
};

export default Contact;