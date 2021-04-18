import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
// import health from '../../../images/healthcare.png';
// import medical from '../../../images/medicine.png';
// import nurse from '../../../images/nurse.png';
import ServicePage from '../ServicePage/ServicePage';


// const serviceData = [
//     {
//         icon:health,
//         title:'Personal Care',
//         price:'$120'
        
//     },
//     {
//         icon:medical,
//         title:'Medical Care',
//         price:'$200'
    
//     },
//     {
//         icon:nurse,
//         title:'24Hr/7 Days Support',
//         price:'$300'
       
//     }
// ]

const Services = () => {
    const [serviceData,setServiceData] = useState([]);
    useEffect(()=>{
          fetch('https://fathomless-journey-02312.herokuapp.com/services')
          .then(res => res.json())
          .then(data =>setServiceData(data));
    },[])
    return (
        <section className="text-center mt-5">
            <h2 className="mb-5"> OUR BEST SERVICES</h2>
           <div className="d-flex justify-content-center">
           <div className="row w-75">
                {
                     serviceData.map(service => <ServicePage key={service._id} service={service}></ServicePage>)
                }
            </div>
           </div>
        </section>
    );
};

export default Services;