import React, { useState } from 'react';

const Review = () => {
    const [review , setReview]  = useState({
        name:'',
        email:'',
        description:''
    })
    console.log(review);
    const handleBlur = (e) =>{
        const newReview = {...review};
        newReview[e.target.name] = e.target.value;
        setReview(newReview);
    }
    const handleReview = (e) =>{
        const newReview = {...review};
        fetch('https://fathomless-journey-02312.herokuapp.com/addReview',{
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify(newReview)
        })
        .then(res =>res.json())
        .then(result =>{
            if(result){
                alert("Review Add Successfully..");
            }
            
        })
        e.preventDefault();
    }
    return (
       <div>
           <h1>Review</h1>
            <div style={{backgroundColor:'teal', height:'550px'}}>
               <div className="ms-5 pt-5">
                    <form action="" className="ps-3 pt-3 pe-3 pb-3"  style={{backgroundColor:'white', height:'80%',width:'80%', borderRadius:'10px'}}>
                        <label htmlFor="">Name:</label>
                        <input type="text" className="form-control" onBlur={handleBlur} name="name"/><br/>
                        <label htmlFor="">Email:</label>
                        <input type="email" className="form-control" onBlur={handleBlur} name="email"/><br/>
                        <label htmlFor="">Description:</label>
                        <input type="text" className="form-control" onBlur={handleBlur} name="description"/><br/>
                        <button type="submit" onClick={handleReview} className="btn btn-info">Send Review</button>
                    </form>
                 </div>
            </div>
       </div>
    );
};

export default Review;