import './Creataccount.css';
import '../../../style.css';
import Navbar from '../../Navbar';
import Footer from '../../Footer';



const CreateAccount = () => {
  return (
    <>
    <Navbar />
      <section className="create-account-container">
        <div className="searchresults">
          <ul id="searchlist">
          </ul>
        </div>
        <div className="forms">
          <form action id="createAccountForm">
            <h3 className="title">Create an account</h3>
            <div className="create-names">
              {/* First name */}
              <div className="firstname">
                <label htmlFor="firstname">First Name</label><br />
                <input type="text" id="firstname" name="firstname" />
              </div>
              {/* Last name */}
              <div className="lastname">
                <label htmlFor="lastname">Last Name</label><br />
                <input type="text" id="lastname" name="lastname" />
              </div>
            </div>
            <div className="other-fields">
              {/* Email */}
              <div>
                <label htmlFor="email">Email</label><br />
                <input type="email" name="email" id="email" />
                <small />
              </div>
              {/* Password */}
              <div>
                <div className="create-password">
                  <label htmlFor="password">Password</label><br />
                  <i className="fa-solid fa-eye-slash" />
                  <input type="password" name="password" id="password" className="password" />
                </div>
              </div>
              {/* Confirm Password */}
              <div>
                <div className="create-password">
                  <label htmlFor="cpassword">Confirm Password</label><br />
                  <i className="fa-solid fa-eye-slash" />
                  <input type="password" name="password" id="cpassword" className="password" />
                </div>
                <div style={{width: '400px'}}>
                  <p />
                </div>
              </div>
              {/*
                    <div>
                        <label for="cpassword">Confirm Password</label><br>
                         <input type="text" name="cpassword" id="cpassword">
                        <div style="width: 400px;">
                            <p></p>
                        </div>
                    </div>
                     */}
            </div>
            {/* Create an account Submission button */}
            <div id="submit">
              <button type="submit" id="submit-btn">Create an account</button>
            </div>
            {/* Logged in users  */}
            <p className="sign-in">Already have an account? <a href="../login/login.html">Sign In</a></p>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
}
 
export default CreateAccount;