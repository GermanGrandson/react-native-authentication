import React, {Component} from 'react';
import {View} from 'react-native';
import firebase from 'firebase';
import {Header, Button, Spinner} from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = {loggedIn: null}

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

    firebase.auth().onAuthStateChanged((user) => {
      if(user){
        this.setState({loggedIn: true})
      } else {
        this.setState({loggedIn: false})
      }
    });
  }

  renderContent(){
    switch(this.state.loggedIn){
      case true:
        return(
          <Button onPress={() => firebase.auth().signOut()}>
            Log Out
          </Button>
        )
      case false:
        return <LoginForm />
      default:
        return <Spinner size="large" />
    }
  }

  render(){
    return(
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    )
  }
}

export default App;
