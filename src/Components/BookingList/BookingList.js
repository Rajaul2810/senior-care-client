import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import BookingListPage from '../BookingListPage/BookingListPage';

const BookingList = () => {
    const [books, setBooks] =useState([]);
     console.log(books)

      const [loggedInUser,setLoggedInUser] =useContext(UserContext);

        useEffect(()=>{
            fetch('https://fathomless-journey-02312.herokuapp.com/orderBook?email='+loggedInUser.email)
            .then(res=>res.json())
            .then(data =>setBooks(data))
        },[])
      
    

    return (
        <div>
            <h1>Booking List</h1>
            <div style={{ backgroundColor: 'teal', height: '550px' }}> 
                <div className="ms-5 pt-5 d-flex justify-content-center">
                     {
                        books.map(book => <BookingListPage key={book._id} book={book}></BookingListPage>)
                     }
                </div>
            </div>
        </div>
    );
};

export default BookingList;