import React from 'react';
import header from '../../../images/header.jpg';

const HeaderMain = () => {
    return (
        <section className="">
            <div className="d-flex justify-content-center">
                <div className="row w-75 ms-5 pt-5 pb-5" >
                    <div className="col-md-6">
                        <h1>Senior Care, Respite <br /> And Advanced Care Needs</h1>
                        <h6 className="mt-3 mb-3"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro maiores quae labore modi esse.</h6>
                        <button className="btn btn-info">Learn More</button>
                    </div>
                    <div className="col-md-6">
                        <img src={header} className="img-fluid" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeaderMain;