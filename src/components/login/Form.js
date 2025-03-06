import ReactDOM from "react-dom/client";
import './Form.scss';
import { Link } from "react-router-dom";

/**
 * IN THIS COMPONENT FOR LOGIN
 */

function Loginform() {
    const onSubmitHandler = (e) => {
        e.preventDefault();
        window.location.href = "/property-result";
    }
    return (
        <>
            <div className="container form-container">
                <div className="row">
                    <div className="col-md-4 offset-md-4">
                        <div className="card">
                            <div className="card-header">
                                <h3>Login</h3>
                            </div>
                            <div className="card-body">
                                <form action="/property-result" onSubmit={onSubmitHandler}>
                                    <div className="form-group mb-3">
                                        <label>Username / Email</label>
                                        <input type="text" className="form-control" placeholder="Enter your Username / Email" required />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Password</label>
                                        <input type="password" className="form-control" placeholder="Enter your password" required />
                                    </div>
                                    <div className="form-group mb-3 btn-container">
                                        <button className="btn btn-primary btn-block" type="submit">Login</button>
                                    </div>
                                    <div className="option" mb-3>or</div>
                                    <div className="form-group mb-3 btn-container">
                                        <Link to="#" className="links">Forgot Password</Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Loginform;