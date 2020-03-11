import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

class Login extends Component {
    constructor(props){
        super(props);

        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = ({
            email: '',
            password: ''
        })
     

    }

    handleChangeEmail(e){
        e.preventDefault();

        this.setState({
            email: e.target.value
        })
    }
    handleChangePassword(e){
        e.preventDefault();

        this.setState({
            password: e.target.value
        })
    }
    handleSubmit(e){
        e.preventDefault();
        console.log(`Email: ${this.state.email}`)
        console.log(`Password: ${this.state.password}`)
        this.setState({
            email:'',
            password:''
        })
        console.log(this.state);
    }
    render() {
  
        return (
            <div style={{marginTop: 40}}>
                
                    <h3>Simple Login</h3>
                    <form onSubmit={this.handleSubmit} >
                        <div className="form-group">
                            <label>Email: </label>
                            <input type="text"
                            className="form-control"
                            value={this.state.email}
                            onChange={this.handleChangeEmail}/>

                        </div>
                        <div className="form-group">
                            <label>Password: </label>
                            <input type="password"
                            className="form-control"
                            value={this.state.password}
                            onChange={this.handleChangePassword}
                            />

                        </div>
                        <div className="form-group">
                            <input type="submit" value="Login" className="btn btn-primary"/>
                        </div>
                        </form>
                        </div>
        )
    }
}
export default Login;