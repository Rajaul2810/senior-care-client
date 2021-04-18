import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import Payment from '../Payment/Payment';

const Book = () => {
    const {_id} = useParams();
    const [book,setBook] = useState({})
  const [loggedInUser,setLoggedInUser] = useContext(UserContext);

    console.log(_id , book);

    useEffect(()=>{
            fetch(`https://fathomless-journey-02312.herokuapp.com/service/${_id}`)
            .then(res =>res.json())
            .then(data =>setBook(data[0]))
    },[_id])
     
    const handlePay = (id)=>{
        const newOrder = {email:loggedInUser.email,name:loggedInUser.displayName,PaymentId:id, book:book,date:new Date()}
        console.log(newOrder);
        
      fetch('https://fathomless-journey-02312.herokuapp.com/addBook',{
        method:'POST',
        headers:{'content-type':'application/json'},
        body:JSON.stringify(newOrder)
      })
      .then(res=>res.json())
      .then(result=>{
         if(result){
           alert("Your Order Payment Successfully..");
         }
      })

    }
   

    return (
        <div>
            <h1>Book</h1>
            <div style={{backgroundColor:'teal', height:'550px'}}>
                <div className="ms-5 pt-5">
                    <form action="" className="ps-3 pt-3 pe-3 pb-3"  style={{backgroundColor:'white', height:'80%',width:'80%', borderRadius:'10px'}}>
                        <label >Name:</label>
                        <input type="text" className="form-control" defaultValue={loggedInUser.displayName} name="name"/><br/>
                        <label >Email:</label>
                        <input type="email" className="form-control" defaultValue={loggedInUser.email}  name="email"/><br/>
                        <label>service name:</label>
                        <input type="text" className="form-control" defaultValue={book.title} name="service"/><br/>
                        <label >Price:</label>
                        <input type="text" className="form-control" defaultValue={book.price}  name="price"/><br/>
                    </form>
                   
                </div>
                <div className=" ms-5 pt-3 pb-3 ps-3 mt-2" style={{backgroundColor:'white', width:'80%',borderRadius:'10px'}}>
                    <p>Pay with Credit Card</p>
                        <Payment handlePay={handlePay}></Payment>
               </div>
            </div>
        </div>
    );
};

export default Book;