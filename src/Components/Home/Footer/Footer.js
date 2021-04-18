import React from 'react';

const Footer = () => {
    return (
        <footer className="" style={{backgroundColor:'grey', color:'white'}}>
            <div className="row ps-5 pt-5 pb-5">
            <div className="col-md-3">
                <h4>Contact Info</h4><hr/>
                <h6>256, Victory Street, New York</h6>
                <h6>City, AZ 550067</h6>
                <h6>Email :info@senior-care.com</h6>
            </div>
            <div className="col-md-3">
                <h4>Compony</h4><hr/>
                <h6>about</h6>
                <h6>Project</h6>
                <h6>Our Giver</h6>
                <h6>Terms and Conditions</h6>
            </div>
            <div className="col-md-3">
               <h4>Quick Link</h4> <hr/>
               <h6>Our Blog</h6>
               <h6>Contact</h6>
               <h6>Sales</h6>
            </div>
            <div className="col-md-3">
                <h4>About Us</h4> <hr/>
                <h6> Senior-Care Giver dolor sit amet consectetur adipisicing <br/> elit Cupiditate porro quos iure rerum mollitia </h6>
            </div>
            </div>
            <p className="text-center"><small>© Copyright Senior-Care <span>2021</span>. All right reserved.</small></p>
        </footer>
    );
};

export default Footer;