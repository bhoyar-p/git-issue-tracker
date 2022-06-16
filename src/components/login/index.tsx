import React, { useState, useEffect, useContext } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";


const Login = () => {
    return (<div>
        Login
    </div>);
    // const dispatch = useDispatch();
    // const [data, setData] = useState({ errorMessage: "", isLoading: false });

    // useEffect(() => {
    //     // After requesting Github access, Github redirects back to your app with a code parameter
    //     const url = window.location.href;
    //     const hasCode = url.includes("?code=");

    //     // If Github API returns the code parameter
    //     if (hasCode) {
    //         const newUrl = url.split("?code=");
    //         window.history.pushState({}, null, newUrl[0]);
    //         setData({ ...data, isLoading: true });

    //         const requestData = {
    //             code: newUrl[1]
    //         };

    //         console.log("insode");

    //         // // Use code parameter and other parameters to make POST request to proxy_server
    //         // fetch(`https://github.com/login/oauth/access_token`, {
    //         //     method: "POST",
    //         //     body: JSON.stringify(requestData)
    //         // })
    //         //     .then(response => response.json())
    //         //     .then(data => {
    //         //         dispatch({
    //         //             type: "LOGIN",
    //         //             payload: { user: data, isLoggedIn: true }
    //         //         });
    //         //     })
    //         //     .catch(error => {
    //         //         setData({
    //         //             isLoading: false,
    //         //             errorMessage: "Sorry! Login failed"
    //         //         });
    //         //     });
    //     }
    // }, [dispatch, data]);

    // // if (state.isLoggedIn) {
    // //     // return <Navigate to="/" />;
    // // }
    // return (
    //     <div>
    //         <h1>Welcome </h1>
    //         <span> Super amazing app </span>
    //         <span> {data.errorMessage} </span>
    //         <div className="login-container" >
    //             {
    //                 data.isLoading ? (
    //                     <div className="loader-container" >
    //                         <div className="loader"> </div>
    //                     </div>
    //                 ) : (
    //                     <>
    //                         {
    //                             // Link to request GitHub access
    //                         }
    //                         < a className="login-link"
    //                             href={`https://github.com/login/oauth/authorize?scope=user&client_id=Iv1.7418bd0d921ed0cd&redirect_uri=http://localhost:3000/login`}
    //                             onClick={() => {
    //                                 setData({ ...data, errorMessage: "" });
    //                             }}
    //                         >
    //                             <span>Login with GitHub </span>
    //                         </a>
    //                     </>
    //                 )}
    //         </div>
    //     </div>
    // )
};

export default Login;
