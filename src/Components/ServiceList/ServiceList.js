import React, { useEffect, useState } from 'react';
import ServiceListPage from '../ServiceListPage/ServiceListPage';

const ServiceList = () => {
    const [books, setBooks] =useState([]);
    console.log(books)
   useEffect(()=>{
       fetch('http://localhost:4000/orderBookAll')
       .then(res=>res.json())
       .then(data =>setBooks(data))
   },[])
    return (
        <div>
             <h1>Order Service list</h1>
             <div style={{ backgroundColor: 'teal', height: '550px' }}>
                 <div className="ms-5 pt-5">
                 <table className="table table-striped" style={{backgroundColor:'white',width:'80%',borderRadius:'10px'}}>
                        <thead>
                            <tr>
                                <th scope="col"> Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Service Name</th>
                                <th scope="col">Price</th>
                                <th scope="col">status</th>
                            </tr>
                        </thead>
                        {
                            books.map(element=><ServiceListPage key={element._id} element={element}></ServiceListPage>)
                        }
                    </table>
                 </div>
             </div>
        </div>  
    );
};

export default ServiceList;