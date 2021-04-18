import React, { useState } from 'react';

const ServiceListPage = ({ element }) => {
    const {price,title} = element.book;
    const [stats, setStats] = useState('');
    const handleSubmit =(e)=>{
        console.log(e.target.value);
    }
    return (
        <tbody>
            <tr>
                <td>{element.name}</td>
                <td>{element.email}</td>
                <td>{title}</td>
                <td>{price}</td>
                <td><select style={{color:'blue'}}>
                 <option onChange={handleSubmit} value="Pending">Pending</option>
                 <option onChange={handleSubmit} value="On going">On going</option>
                 <option onChange={handleSubmit} value="Done">Done</option>
                </select>
                </td>
            </tr>
        </tbody>
    );
};

export default ServiceListPage;