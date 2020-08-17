import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const LikeCounter = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.like} Likes</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
  text: {
    fontSize: 12,
    fontWeight: '500',
    color: 'brown',
  },
});

export default LikeCounter;
