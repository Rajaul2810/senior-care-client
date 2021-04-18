import React from 'react';

const BlogPage = ({blog}) => {
    return (
        <div className="col-md-4 shadow p-3 mb-5 bg-body rounded">
            <img style={{height:'200px'}} src={blog.img} alt=""/>
            <h5 className="text-secondary">{blog.date}</h5>
            <h4>{blog.title}</h4>
            <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, vitae!</p>
            <button className="btn btn-info">See More..</button>
            
        </div>
    );
};

export default BlogPage;