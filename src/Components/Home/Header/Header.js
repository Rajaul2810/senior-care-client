import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../Navbar/Navbar';

const Header = () => {
    return (
       <div style={{backgroundColor:'#EEE'}}>
           <Navbar></Navbar>
           <HeaderMain></HeaderMain>
       </div>
    );
};

export default Header;