import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';
import Swal from "sweetalert2"
const Login = () => {
    const { logInUser, auth, googleLogin, githubLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    console.log("Login page location", location);

    const from = location.state?.from?.pathname || '/';

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");




    const handleLogin=event=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log( email, password);

        if(email, password) {
            logInUser(email, password)
            .then((result) => {
                console.log(result.user);
                navigate(from, { replace: true })
                Swal.fire(
                    "Success!",
                    "Login Successful.",
                    "success"
                );
            })
            .catch(error => {
                console.log(error);
                setError("Incorrect Email or Password");
            })
        }
    }
    const handleGoogleLogin = () => {
        googleLogin()
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            navigate(from, { replace: true })
            Swal.fire(
                "Success!",
                "Login Successful!",
                "success"
            );
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Login your profile for continue your draft course and finished as soon as possible</p>
                </div>
                <div className=" flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 p-5 rounded-3xl">
                    <form className="card-body pb-1" onSubmit={handleLogin}>
                    <div>
                            <p className='text-red-500'>{error}</p>
                        </div>
                       
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Enter email</span>
                            </label>
                            <input type="email" placeholder="example@gmail.com" name='email' className="input input-bordered" required />
                        </div>

                       
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your password</span>
                            </label>
                            <input type='password' placeholder="Password" name='password' className="relative input input-bordered" required />
                        </div>
                        <div className="form-control mt-4">
                            <button className="btn bg-orange-400 border-0">Login</button>
                        </div>
                    </form>
                    
                    <label className="p-8 pt-1">
                        <p className='text-center'>New in this site ? <Link to="/register" className="text-blue-400 link link-hover">Register Now!</Link></p>
                    </label>

                    <div className='text-center mb-5 -mt-6 flex w-full justify-between px-10 items-center'>
                        <div className="line w-5/12 border h-0 bg-gray-400"></div>
                        <div className="line">or</div>
                        <div className="line w-5/12 border h-0 bg-gray-400"></div>
                    </div>

                    <div className="form-control flex flex-row -mt-3 justify-center pb-4">

                        <Link><img className='mx-2 cursor-pointer hover:-mt-1 duration-300' onClick={handleGoogleLogin} style={{ width: '40px' }} src="https://raw.githubusercontent.com/mdmahfuzrp/futurehub-img/main/Icons/google.png" alt="" /></Link>

                        <Link><img className='mx-2 cursor-pointer hover:-mt-1 duration-300'  style={{ width: '40px' }} src="https://raw.githubusercontent.com/mdmahfuzrp/futurehub-img/main/Icons/github.png" alt="" /></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;