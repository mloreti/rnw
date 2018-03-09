import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return(
      <View style={styles.header}>
        <Link to={`/`}><Text>🐶</Text></Link>
        {this.getRoutes()}
      </View>
    );
  }

  getRoutes() {
    return this.props.routes.map(route => (
      <Link to={route}>
        <Text style={styles.child}>{route}</Text>
      </Link>
    ));
  }
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    padding: 30,
  },
  child: {
    fontSize: 30,
    width: 'auto',
    marginLeft: 10,
    height: 50,
  }
});
