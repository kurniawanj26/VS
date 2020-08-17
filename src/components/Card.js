import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {Button, LikeCounter} from '../components';
import {Card, CardItem, Left, Right} from 'native-base';
import {useDispatch, useSelector} from 'react-redux';
import {like, dislike} from '../redux/actions/index';

const CardImage = (props) => {
  const dispatch = useDispatch();
  // const images = useSelector((state) => state.getImagesReducer.images);
  return (
    // <View>
    <Card style={{borderRadius: 10}}>
      <CardItem cardBody style={{borderRadius: 10}}>
        <Image source={{uri: props.image.download_url}} style={styles.image} />
      </CardItem>
      <CardItem style={{borderRadius: 10}}>
        <Left>
          {/* <LikeCounter like={props.image.like} /> */}
          <LikeCounter like={props.image.like} />
        </Left>
        <Right>
          <View style={styles.rightButton}>
            <Button
              buttonName="Like"
              type={styles.blueButton}
              function={() => dispatch(like(props.payload, props.image.id))}
            />
            <Button
              buttonName="Dislike"
              type={styles.redButton}
              function={() => dispatch(dislike(props.payload, props.image.id))}
            />
          </View>
        </Right>
      </CardItem>
    </Card>
    // </View>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    color: 'black',
  },
  redButton: {
    backgroundColor: 'red',
  },
  blueButton: {
    backgroundColor: 'blue',
    marginRight: 5,
  },
  rightButton: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
  },
  image: {
    height: 200,
    width: 100,
    flex: 1,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
});

export default CardImage;
