import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import InstagramLogin from 'react-instagram-login';
import GoogleLogin from 'react-google-login';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            value:''
          };
    }

    responseFacebook(response) {
      console.log(response);
    }

    responseInstagram(response){
      console.log(response);
    }

    responseGoogle(response){
      console.log(response);
    }
 
    componentDidMount() {
      
      }

    handleChange(e){
        
    }

    googleLogin(){
      return (
        <GoogleLogin
            clientId={'658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com'}
            render={renderProps => (
              <a href="#" onClick={renderProps.onClick} className="login100-social-item bg2">
                <i className="fa fa-google" />    
              </a>
            )}
            onSuccess={this.responseGoogle}
            onFailure={this.responseGoogle}
          />
      )
    }

    instagramLogin(){
      return(
        <InstagramLogin
    clientId="5fd2f11482844c5eba963747a5f34556"
    buttonText="Login"
    cssClass="login100-social-item bg3"
    onSuccess={this.responseInstagram}
    onFailure={this.responseInstagram}
  >
    <i className="fa fa-instagram" />
</InstagramLogin>
      )
    }

    facebookLogin(){
      return(
        <FacebookLogin
          appId="1088597931155576"
          autoLoad={true}
          fields="name,email,picture"
          scope="public_profile,user_friends,user_actions.books"
          callback={this.responseFacebook}
          render={renderProps => (
            <a href="#" onClick={renderProps.onClick} className="login100-social-item bg1">
                  <i className="fa fa-facebook" />
            </a>
          )}
        />
      )
    }
   render() {
      return (
         <div>
             <div className="limiter">
        <div className="container-login100" style={{backgroundImage: 'url("assets/images/bg-01.jpg")'}}>
          <div className="wrap-login100 p-l-55 p-r-55 p-t-20 p-b-20">
            <form className="login100-form validate-form">
              <span className="login100-form-title p-b-49">
                Login
              </span>
              <div className="wrap-input100 validate-input m-b-23" data-validate="Username is reauired">
                <span className="label-input100">Username</span>
                <input className="input100" type="text" name="username" placeholder="Type your username" />
                <span className="focus-input100" data-symbol="" />
              </div>
              <div className="wrap-input100 validate-input" data-validate="Password is required">
                <span className="label-input100">Password</span>
                <input className="input100" type="password" name="pass" placeholder="Type your password" />
                <span className="focus-input100" data-symbol="" />
              </div>
              <div className="text-right p-t-8 p-b-20">
                <a href="#">
                  Forgot password?
                </a>
              </div>
              <div className="container-login100-form-btn">
                <div className="wrap-login100-form-btn">
                  <div className="login100-form-bgbtn" />
                  <button className="login100-form-btn">
                    Login
                  </button>
                </div>
              </div>
              <div className="txt1 text-center p-t-15 p-b-15">
                <span>
                  Or Sign In Using
                </span>
              </div>
              <div className="flex-c-m">
              {this.facebookLogin()}
              {this.instagramLogin()}
              {this.googleLogin()}
              </div>
              <div className="flex-col-c p-t-15">
                <span className="txt1 p-b-17">
                  Or Sign Up Using
                </span>
                <a href="#" className="txt2">
                  Sign Up
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
         </div>
      );
   }
}

export default Login;

