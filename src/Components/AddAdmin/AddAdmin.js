import React, { useState } from 'react';

const AddAdmin = () => {
    const [admin, setAdmin] = useState({
        email:''
    })
    const handleBlur = (e) => {
        const newAdmin = {...admin};
        newAdmin[e.target.name] = e.target.value;
        setAdmin(newAdmin);
    }
    console.log(admin);
    const handleAdmin = () =>{
        const newAdmin = {...admin};
        console.log(newAdmin);
        fetch('https://fathomless-journey-02312.herokuapp.com/addAdmin',{
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify(newAdmin)
        })
        .then(res => res.json())
        .then(data =>{
            if(data){
                alert("admin add Successfully");
            }
        })
    }
    return (
        <div >
            <h2>Add Admin</h2>
           <div className="mb-5" style={{backgroundColor:'teal', height:'550px'}}>
               <div className="ms-5 pt-5">

               <div className=""  style={{backgroundColor:'white', height:'200px',width:'80%', borderRadius:'10px'}}>
                    
                    <div className="input-group mb-3 ">
                        <input style={{width:'50%'}} type="text" onBlur={handleBlur} name="email" className=" mt-5 ms-3" placeholder="email" />
                        <button onClick={handleAdmin} className="btn btn-info mt-5" type="button" id="button-addon2">Submit</button>
                    </div>
                    
               </div>

               </div>
           
           </div>

         </div>
    );
};

export default AddAdmin;