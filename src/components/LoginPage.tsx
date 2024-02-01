import React from 'react'
import './LoginPage.css'
import { FaUserAlt } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";

class LoginPage extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            uname: '',
            password: ''
        };
    }
    handleSubmit() {
        const { uname, password } = this.state;
        alert(uname + " " + password)
    }
    render() {
        return (
            <div className='Wrapper'>
                <form action="" onSubmit={this.handleSubmit}>
                    <h1>Login</h1>
                    <div className="input-box">
                        <FaUserAlt className='icon' />
                        <input type="text" id='uname' placeholder='Username' onChange={(e) => this.setState({ uname: e.target.value })} />
                    </div>
                    <div className="input-box">
                        <RiLockPasswordLine className='icon' />
                        <input type="password" id='pass' placeholder='Password' onChange={(e) => this.setState({ password: e.target.value })} />
                    </div>
                    <div className="forget">
                        <a href="#">Forget password?</a>
                    </div>
                    <button type='submit'>Login </button>
                    <div className="register-link">
                        <p>Don't have an account? <a href="">Register</a></p>
                    </div>
                </form>

            </div>
        )
    }
}
export default LoginPage
