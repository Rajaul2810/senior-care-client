import React from 'react';

const Contact = () => {
    return (
       <section className="pb-5" style={{backgroundColor:'#EEE'}}>
            <h1 className="text-center pt-3">Contact Us</h1>
            <p className="text-secondary text-center">Join our movement to make the world a better place for seniors.</p>
            <div className="d-flex justify-content-center">
               
            <div className="w-75 ">
                <div className="mb-3">
                    <label  className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Email"/>
                </div>
                <div className="mb-3">
                    <label  className="form-label">Your Message</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button className="btn btn-info">Send Massage</button>
            </div>
            </div>
       </section>
    );
};

export default Contact;