import React, { useState } from 'react';
import axios from 'axios';

const AddService = () => {
    const [service, setService] = useState({
        title:'',
        description:'',
        price:'',
        image:''
    });
    console.log(service);
    const handleBlur = (e) => {
         const newService ={...service};
          newService[e.target.name] = e.target.value;
          setService(newService);
    }
    const handleImg = (e) =>{
        console.log(e.target.files[0])
        const imgData = new FormData();
        imgData.set('key','803371b69ea6c18a1d2df5afafa762be');
        imgData.append('image', e.target.files[0])
        
        axios.post('https://api.imgbb.com/1/upload', 
           imgData)
          .then(function (response) {
            const newService = { ...service };
            newService[e.target.name] = response.data.data.display_url;
            setService(newService);
            console.log(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    const handleService = (e)=>{
        const newService ={...service};
        fetch('http://localhost:4000/addService',{
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify(newService)
        })
        .then(res =>res.json())
        .then(result =>{
            if(result){
                alert("Service Add Successfully..");
            }
            
        })
        e.preventDefault();
    }

    return (
        <div >
            <h1>Add Service</h1>
            <div style={{backgroundColor:'teal', height:'550px'}}>
            <div className="ms-5 pt-5">
                <form action="" className="ps-3 pt-3 pe-3 pb-3"  style={{backgroundColor:'white', height:'80%',width:'80%', borderRadius:'10px'}}>
                    <label htmlFor="">Service title:</label>
                    <input type="text" className="form-control" onBlur={handleBlur} name="title"/><br/>
                    <label htmlFor="">Description:</label>
                    <input type="text" className="form-control" onBlur={handleBlur} name="description"/><br/>
                    <label htmlFor="">Price:</label>
                    <input type="text" className="form-control" onBlur={handleBlur} name="price"/><br/>
                    <label htmlFor="">Photo:</label>
                    <input type="file" className="form-control" onChange={handleImg} name="image"/><br/>
                    <button type="submit" onClick={handleService} className="btn btn-info">Add Service</button>
                </form>
             </div>
            
        </div>
        </div>
    );
};

export default AddService;