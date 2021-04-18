import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './Config';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';

if (!firebase.apps.length) {    
   firebase.initializeApp(firebaseConfig);
 }else {
    firebase.app(); 
 }

const Login = () => {
  
    const [user,setUser] = useState({});

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const provider = new firebase.auth.GoogleAuthProvider();

    const handleGoogle = () =>{
        firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            const newUser = result.user;
            setUser(newUser);
            setLoggedInUser(newUser);
            history.replace(from);
               
        }).catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
            console.log(errorCode,errorMessage);
        });
    }

    return (
       <div className="mt-5 d-flex justify-content-center">
             
            <div className="text-center pt-5" style={{backgroundColor:'#EEE',height:'300px', width:'75%'}}>
                <h1 style={{color:'teal'}}>Senior-Care</h1>
                <h1>Login</h1>
                <button onClick={handleGoogle} className="btn btn-info" type="submit">login with google</button>
            </div>
       </div>
    );
};

export default Login;