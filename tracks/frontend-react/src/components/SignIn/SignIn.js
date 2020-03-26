import React,{Component} from 'react';
 import './SignIn.css'
 import  password from '../icons/password.png'
class SignIn extends Component {
    constructor(props){
        super( props);
          this.state={
           SignInEmail:'',
           SignInPassword:'',
        
          }
        
    }
    onEmailChange=(event)=>{
        this.setState({SignInEmail:event.target.value});
        console.log(event.target.value);
        
    }
    onPasswordChange=(event)=>{
        this.setState({SignInPassword:event.target.value});
        console.log(event.target.value);
    }

    passwordReset=()=>{
        console.log('password reset clicked');
    }
    onSubmitSignIn=()=>{

     console.log('signIn button clicked');
 
    }
    render(){
        //const {onRouteChange}= this.props;
    return(
 
        <article className="ma4 br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className=" pa4 black-80">  
        <div className=" measure centre">
        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
        <legend className="f2 fw6 ph0 mh0">Welcome Back!</legend>
        <div className="mt3 ">
            <label className="db fw6 lh-copy f6"  htmlFor="email-address">Email Address</label>
            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" onChange={this.onEmailChange}  name="email-address"  id="email-address" required="required"/>
        </div>
        <div className="mv3 ">
            <label className="db fw6 lh-copy f6 "  htmlFor="password" >Password </label>
            <div className="left">
            <img className="dib mb1-ns h2 w2 icon"  src={password} alt="password lock "/>
            </div>
            <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password"  onChange={this.onPasswordChange} name="password"  id="password" required="required" />
            <div className="left">  
        <a href="#0" className="f6 link dim black db right icon" onClick={()=> this.props.onRouteChange('ResetPassword')}>Forgot your password?</a>
        </div>
        </div>
       
        </fieldset>
        <div className="">
        <input className="b ph3 pv2 input-reset ba b--black  grow pointer f6 dib btn" onClick={this.onSubmitSignIn}type="submit" value="SignIn"/>

        </div>
        <div className="lh-copy mt3">
        <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib btn" onClick={()=> this.props.onRouteChange('SignUp')}type="submit" value="SignUp"/>

        </div>
        
            </div>
            </main>
     </article> 
    
      );
    }
}
export default SignIn;