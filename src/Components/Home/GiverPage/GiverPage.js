import React from 'react';

const GiverPage = ({giver}) => {
    return (
        <div className="col-md-4 text center shadow p-3 mb-5 bg-body rounded text-center">
            <img className="img-fluid" style={{height:'200px'}} src={giver.img} alt=""/>
            <h4>{giver.name}</h4>
            <h5 className="text-secondary">{giver.title}</h5>
        </div>
    );
};

export default GiverPage;