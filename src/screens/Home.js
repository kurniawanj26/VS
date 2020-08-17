import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {List} from '../components';
import {useDispatch} from 'react-redux';
import {getImages} from '../redux/actions/index';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getImages());
  });

  return (
    <View style={styles.container}>
      <List />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: '5%',
    paddingRight: '5%',
    paddingTop: '10%',
    flex: 1,
  },
});

export default Home;
