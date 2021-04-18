import React from 'react';

const TastimonialPage = ({review}) => {
    return (
    <div className="col-md-4 text-center img shadow p-3 mb-5 bg-body rounded">
       <h5>{review.name}</h5>
       <h5 style={{color:'tomato'}}>{review.email}</h5>
       <p className="text-secondary">{review.description}</p>
   </div>
    );
};

export default TastimonialPage;