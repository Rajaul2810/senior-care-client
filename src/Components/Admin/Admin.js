import React, { useContext, useEffect, useState } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { UserContext } from '../../App';
import AddAdmin from '../AddAdmin/AddAdmin';
import AddService from '../AddService/AddService';
import Book from '../Book/Book';
import BookingList from '../BookingList/BookingList';
import Home from '../Home/Home/Home';
import ManageService from '../ManageService/ManageService';
import Review from '../Review/Review';
import ServiceList from '../ServiceList/ServiceList';

const Admin = () => {
    const [admin, setAdmin] = useState({});


    console.log(admin);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch('https://fathomless-journey-02312.herokuapp.com/getAdmin?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setAdmin(data[0]))
    }, [])

    return (
        <main >

            <div className="mt-5">
                <p style={{ color: 'white', backgroundColor: 'teal', width: '250px', height: '30px' }} className="ms-5">name:{loggedInUser.displayName}</p>
                <div className="row">
                    <div className="col-md-3 " >
                        <nav className="navbar navbar-expand-lg ">
                            <div className="ms-5">
                                <Link style={{ color: 'teal', fontSize: '30px' }} className="navbar-brand" to="/home">Senior-Care</Link>
                                <div className="" id="navbarNav">
                                    <ul className="">
                                        { admin && <div>
                                        <li className="nav-item">

                                            <Link className="nav-link active" aria-current="page" to="/admin/serviceList">Order Service List</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/admin/addService">Add Service</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/admin/addAdmin">Add Admin</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/admin/manageService">Manage Service</Link>
                                        </li>
                                        </div>
                                        }
                                        
                                            <div>
                                                <li className="nav-item">
                                                    <Link className="nav-link" to="/admin/book">Book</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link className="nav-link" to="/admin/booking-list">Booking List</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link className="nav-link" to="/admin/review">Review</Link>
                                                </li>

                                            </div>
                                        


                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                    <div className="col-md-9" >
                        <Switch>
                            <Route path="/home">
                                <Home></Home>
                            </Route>
                            <Route path="/admin/serviceList">
                                <ServiceList></ServiceList>
                            </Route>
                            <Route path="/admin/addService">
                                <AddService />
                            </Route>
                            <Route path="/admin/addAdmin">
                                <AddAdmin></AddAdmin>
                            </Route>
                            <Route path="/admin/manageService">
                                <ManageService></ManageService>
                            </Route>
                            <Route path="/admin/book/:_id">
                                <Book />
                            </Route>
                            <Route path="/admin/booking-list">
                                <BookingList></BookingList>
                            </Route>
                            <Route path="/admin/review">
                                <Review></Review>
                            </Route>
                        </Switch>
                    </div>
                </div>
            </div>

        </main>
    );
};

export default Admin;