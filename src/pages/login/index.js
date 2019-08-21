import './style.scss'
import React from 'react';
import Controller from './controller';
import { withRouter } from 'react-router-dom'
import Input from './../../components/Input'

class Login extends Controller {
    render() {
        return (
            <div className="background-login">
                <div className="col-12">
                    <div className="row justify-content-end">
                        <div className="col-4 align-self-center mt-4">
                            <div className="card login-page-card">
                                <div className={`card-body ${this.state.styleCard}`}>
                                    <h5 className="login-title text-center">Login</h5>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-12 login-page-input-div-username mb-4">
                                                <Input placeholder="Email" type="text" value={this.state.username} className="login-page-input" onChange={(e) => this.onChangeInput('username', e)} />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 login-page-input-div mb-4">
                                                <Input placeholder="Password" type="password" value={this.state.password} className="login-page-input" onChange={(e) => this.onChangeInput('password', e)} />
                                            </div>
                                        </div>
                                        <div className="row mb-5">
                                            <div className="col-12 login-page-button-div text-center">
                                                <button onClick={() => this.onClick(this.state.username, this.state.password)} className="btn btn-primary login-padding-button">Login</button>
                                            </div>
                                            {
                                                this.state.error ?
                                                <div className="col-12 text-center mt-2">
                                                    <span className="text-danger">This username or password incorrect</span>
                                                </div>
                                                    :
                                                    null
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Login)
