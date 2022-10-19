import React from "react";
import Footer from "../../Footer";
import Navbar from "../../Navbar";
import "./Login.css";
import "../../../style.css";

export const Login = () => {
	return (
		<>
			<Navbar />
			<div className='login-container'>
				<div className='searchresults'>
					<ul id='searchlist'></ul>
				</div>
				<form className='login-form' action>
					<h3>Login</h3>
					<div className='form-group'>
						<label htmlFor='email'>Email</label>
						<input id='loginemail' type='email' name='email' />
					</div>
					<div className='form-group password'>
						<i className='fa-solid fa-eye' />
						<label htmlFor='password'>Password</label>
						<input id='loginpassword' type='password' name='password' />
					</div>
					<button className='login-btn' type='submit'>
						Submit
					</button>
					<p>
						Don't have an account?
						<a href='../createaccount/createaccount.html'>Sign up</a>
					</p>
				</form>
			</div>
			<Footer />
		</>
	);
};
