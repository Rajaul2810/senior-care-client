import React, { useEffect, useState } from 'react';
import ManagePage from '../ManagePage/ManagePage';

const ManageService = () => {
    const [data, setData] = useState([]);
    console.log(data);
    useEffect(() => {
        fetch('http://localhost:4000/services')
            .then(res => res.json())
            .then(element => setData(element))
    }, [])
    return (
        <div>
            <h1>Manage service</h1>
            <div style={{ backgroundColor: 'teal', height: '550px' }}>
                <div className="ms-5 pt-5">
                    <table className="table table-striped" style={{backgroundColor:'white',width:'80%',borderRadius:'10px'}}>
                        <thead>
                            <tr>
                                <th scope="col">Service Name</th>
                                <th scope="col">Price</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        {
                            data.map(element=><ManagePage key={element._id} element={element}></ManagePage>)
                        }
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageService;