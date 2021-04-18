import React from 'react';

const CarePage = ({care}) => {
    return (
        <div className="col-md-4 d-flex align-items-center shadow p-3 mb-5 bg-body rounded">
            <div>
                <img style={{height:'50px'}} src={care.icon} alt=""/>
            </div>
            <div className="ms-3">
                <h5 className="text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, earum!</h5>
            </div>
            
        </div>
    );
};

export default CarePage;