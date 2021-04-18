import React from 'react';
import BlogPage from '../BlogPage/BlogPage';
import blogImg from '../../../images/happy.jpg';
import blogImg1 from '../../../images/header.jpg';


const blogData = [
    {
        title:'Top 5 Tips for Caregivers During the Holidays',
        img:blogImg,
        id:1,
        date:'Jan 01, 2021'
    },
    {
        title:'Caregiving Checklist for a New Year',
        img:blogImg1,
        id:2,
        date:'Oct 28, 2020'
    },
    {
        title:'Our Experts Answer Your Questions About Dementia Care',
        img:blogImg,
        id:3,
        date:'June 30, 2020'
    }
]

const Blog = () => {
    return (
        <section id="blog" className="">
            <div className="text-center pt-5 pb-5">
                <h1>OUR BLOGS</h1>
                <h5 className="text-secondary">CareGiver Community Reviews..</h5>
            </div>
            <div className="d-flex justify-content-center">
                <div className="row w-75">
                    {
                        blogData.map( blog => <BlogPage key={blog.id} blog={blog}></BlogPage>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Blog;