import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import InstagramLogin from 'react-instagram-login';
import GoogleLogin from 'react-google-login';
import {API_BASE_URL} from '../../constants';

class SocialLogin extends Component {
    constructor(props){
        super(props);
        this.state = {
            value:''
          };
          console.log(API_BASE_URL)
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

      render() {
        return (
            <div>
                 <div className="flex-c-m">
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

          <InstagramLogin
          clientId="5fd2f11482844c5eba963747a5f34556"
          buttonText="Login"
          cssClass="login100-social-item bg3"
          onSuccess={this.responseInstagram}
          onFailure={this.responseInstagram}
        >
          <i className="fa fa-instagram" />
        </InstagramLogin>
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
   </div>
   </div>
        )
    }

}

export default SocialLogin;