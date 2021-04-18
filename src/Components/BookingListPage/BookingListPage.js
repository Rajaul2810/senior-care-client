import React from 'react';

const BookingListPage = ({ book }) => {
    const { price, title, description, image } = book.book;
    return (
        <div className="card" style={{width:'18rem'}}>
            <img style={{height:'70px',width:'70px'}} src={image} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <h5>{price}</h5>
                    <p className="card-text">{description}</p>
                </div>
        </div>
    );
};

export default BookingListPage;