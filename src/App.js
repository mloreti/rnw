import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/header';
import Body from './components/body';

const routes = ['Home', 'About', 'Contact'];

const Home = props => {
  return (
    <View>
      <Text>{props.text.toUpperCase()}</Text>
    </View>
  )
}

const getRoutes = () => {
  return routes.map(route => (
    <Route path={`/${route}`} render={() => (
      <Home text={route} />
    )} />
  ));
}

class App extends Component {
  render() {
    return (
      <Router>
        <View style={styles.app}>
          <Header routes={routes} />
          <Route exact={true} path="/" component={Body} />
          {getRoutes()}
        </View>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
  }
});

export default App;
