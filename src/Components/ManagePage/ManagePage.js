import React from 'react';

const ManagePage = ({ element }) => {
    const handleDelate= (id)=>{
        console.log("click")
        fetch(`https://fathomless-journey-02312.herokuapp.com/delete/${id}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(result=>{
            if(result){
                alert("Service Delete Successfully");
            }
        })
    }
    return (
        
            <tbody>
                <tr>
                    <td>{element.title}</td>
                    <td>{element.price}</td>
                    <td><button onClick={()=>handleDelate(element._id)} className="btn btn-info">delete</button></td>
                </tr>
         </tbody>
    );
};

export default ManagePage;