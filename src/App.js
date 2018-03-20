import React, {Component} from 'react';
import {View} from 'react-native';
import firebase from 'firebase';
import {Header} from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  // LifeCycle Methods are automatically invoked
  componentWillMount(){
    firebase.initializeApp({
      apiKey: "AIzaSyDciaJLiSheE9SXkp991JyLaNZVYDDz7Tg",
      authDomain: "authyauth.firebaseapp.com",
      databaseURL: "https://authyauth.firebaseio.com",
      projectId: "authyauth",
      storageBucket: "authyauth.appspot.com",
      messagingSenderId: "966589366075"
    })
  }

  render(){
    return(
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    )
  }
}

export default App;
