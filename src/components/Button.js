import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

const Button = (props) => {
  return (
    <TouchableOpacity
      style={[styles.defaultButton, props.type]}
      onPress={props.function}>
      <Text style={[styles.buttonText, props.buttonText]}>
        {props.buttonName}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  defaultButton: {
    backgroundColor: 'white',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 5,
    borderWidth: 0.3,
    borderColor: 'grey',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '500',
  },
});

export default Button;
