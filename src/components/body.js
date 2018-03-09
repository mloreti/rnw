import React, { Component } from "react";
import { View, Button, StyleSheet } from "react-native";

export default class Body extends Component {
  render() {
    return (
      <View style={styles.body}>
        <Button
          onPress={this.onPressLearnMore}
          title="Hello world"
          color="palevioletred"
          style={{textAlign: 'center'}}
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }

  onPressLearnMore() {
    console.log('hello world');
  }
}

const styles = StyleSheet.create({
 body: {
    width: 100,
 }
});
