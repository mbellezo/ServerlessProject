import React from 'react';


import  RootNavigation from './src/Navigation/RootNavigation.js';

import { Auth } from 'aws-amplify'
import { withAuthenticator } from 'aws-amplify-react-native';

import MainScreen from './src/Components/MainScreen';

class App extends React.Component {
  state = {
    username: '',
    password: '',
    phone_number: '',
    email: '',
    authCode: '',
    user: {}
  }
  async signUp() {
    const { username, password, email, phone_number } = this.state
    await Auth.signUp({
      username,
      password,
      attributes: { email, phone_number }
    })
    console.log('sign up successful!')
  }
  async confirmSignUp() {
    const { username, authCode } = this.state
    await Auth.configSignignUp(username, authCode)
    console.log('confirm sign up successful!')
  }
  async signIn() {
    const { username, password  } = this.state
    const user = await Auth.signIn(username, password)
    this.setState({ user })
    console.log('sign in successful!')
  }
  async confirmSignIn() {
    const { user, authCode } = this.state
    await Auth.configSignignIn(user, authCode)
    console.log('user now successfully signed in to the app!!')
  }

  render(){
    return (
      <RootNavigation />
    );
  };
};



export default withAuthenticator(App)
