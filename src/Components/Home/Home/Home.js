import React from 'react';
import Blog from '../Blog/Blog';
import Care from '../Care/Care';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Giver from '../Giver/Giver';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <Care></Care>
            <Testimonial></Testimonial>
            <Giver></Giver>
            <Blog></Blog>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;