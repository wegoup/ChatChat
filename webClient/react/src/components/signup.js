/**
 * Created by ben on 15/11/15.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import AppDispatcher from '../dispatcher/appDispatcher.js';

export default class Signup extends React.Component {

    render() {
        AppDispatcher.showTest();

        return (
            <div className="container login-body">
                <form className="form-signin">
                    <h2 className="form-signin-heading">ChatChat</h2>
                    <div className="login-wrap">
                        <input type="text" className="form-control" placeholder="UserName" autofocus name="username"/>
                        <input type="password" className="form-control" placeholder="Password" name="password"/>
                        <button className="btn btn-lg btn-login btn-block" type="submit">Sign Up</button>
                    </div>
                </form>
            </div>
        );
    }
}
