import React from 'react';
import { Link } from 'react-router-dom';
import './ServicePage.css';


const ServicePage = ({service}) => {
    return (
    //    <Link to="/admin">
            <Link to={`/admin/book/${service._id}`} style={{textDecoration:'none'}} className="col-md-4 text-center img shadow p-3 mb-5 bg-body rounded">
             <div className="animation">
             <img src={service.image} alt=""/>
             </div>
            <h5>{service.title}</h5>
            <h5 style={{color:'tomato'}}>{service.price}</h5>
            <p className="text-secondary">{service.description}</p>
        </Link>
    //    </Link>
    );
};

export default ServicePage;