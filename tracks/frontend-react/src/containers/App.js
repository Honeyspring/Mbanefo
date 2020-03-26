import React ,{Component}from 'react';
import './App.css';
import Logo from '../components/Logo/Logo';
import SignIn from '../components/SignIn/SignIn';

const initialState={
  IsUserLoggedIn:false,
  route:'SignIn'
}
class App extends Component {
  constructor(){
    super();
    this.state= initialState;
  }
  onRouteChange(route){
    if(route ==='SignIn'){
      this.setState({initialState});
    }/* else if(route ==="Home"){
      this.setState({IsUserLoggedIn:true});
    }else{
      this.setState({route:route});
    } */
  }

  render(){
    return (
      <div className="container">
        <Logo/>
        
       <SignIn onRouteChange={this.onRouteChange}/>
      </div>
    );
  }
 
}

export default App;
