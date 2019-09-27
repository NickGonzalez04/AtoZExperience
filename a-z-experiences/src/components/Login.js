import React from 'react';
import { axiosWithAuth } from '../utilities/axiosWithAuth';
import axios from 'axios';

// Need to style Login in form
class Login extends React.Component{
 state = {
     credentials: {
         username: '',
         password: ''
     }
 };


 handleChange = e => {
     this.setState({
         credentials: {
             ...this.state.credentials,
             [e.target.name]: e.target.value
         }
     });
 };

login = e => {
    e.preventDefault();
    axios
        .post('https://a2zexperiences.herokuapp.com/api/users/login', this.state.credentials)
        .then(res => {
            console.log(res);
            localStorage.setItem('token', JSON.stringify(res.data));
            console.log(localStorage.getItem('token'))
            this.props.history.push('/Dashboard');
        })
        .catch(err => console.log(err));
}

render(){
    return(
        <div>
             <form onSubmit={this.login}>
          <input
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <button>Log in</button>
        </form>
    </div>
    );
    }
}


export default Login;