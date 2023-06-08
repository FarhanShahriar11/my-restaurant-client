import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';
import Swal from "sweetalert2";

const Register = () => {
    const { createUser } = useContext(AuthContext);
   
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [photo, setPhoto] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");


    const HandleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        console.log(name, email, password, photo);
        if(!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(password)) {
            setError("***Password minimum 6 characters long, at least one letter and one number***");
            return;
        }

        if(name, email, photo, password) {
            createUser(email, password)
            .then(result => {
                console.log(result.user);
                navigate(from, { replace: true });
                Swal.fire(
                    "Success!",
                    "Registration Successful!",
                    "success"
                  );
            })
            .catch(error => {
                console.log(error);
            })
        }
    }
    return (
        <div className="hero py-6">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left lg:ps-5">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                    <p className="py-6">Create a new account for explore auth master the coding universe for learn something.</p>
                </div>
                <div className=" flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 p-5 rounded-3xl">
                    <form className="card-body pb-1" onSubmit={HandleSignUp}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Your name" name='name' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Enter email</span>
                            </label>
                            <input type="email" placeholder="example@gmail.com" name='email' className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Choose Your Photo</span>
                            </label>
                            <input type="text" placeholder="Your photo" name='photo' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your password</span>
                            </label>
                            <input type='password' placeholder="Password" name='password' className="relative input input-bordered" required />
                        </div>
                        <small className='text-red-600'>{error}</small>
                        <div className="form-control mt-4">
                            <button className="btn bg-orange-400 border-0">Register</button>
                        </div>
                    </form>
                    <label className="p-10">
                        <p className='text-center'>Already have an account ? <Link to="/login" className="text-blue-400 link link-hover">Login Now!</Link></p>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Register;