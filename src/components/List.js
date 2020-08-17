import React, {useEffect, useState} from 'react';
import {View, StyleSheet, FlatList, Image} from 'react-native';
import {Button, LikeCounter} from '../components';
import {Card, CardItem, Left, Right} from 'native-base';
import {
  likeAll,
  dislikeAll,
  resetAll,
  like,
  dislike,
} from '../redux/actions/index';
import {useDispatch, useSelector} from 'react-redux';

const List = () => {
  const dispatch = useDispatch();
  const images = useSelector((state) => state.getImagesReducer.images);
  const a = useSelector((state) => state.getImagesReducer.a);
  // const imagesRef = useRef(images);

  // const [data, setData] = useState([]);
  // // console.log('INITIAsL', images);
  // useEffect(() => {
  //   // setData([...images]);
  //   setData(images);
  //   if (a === images) {
  //     console.log('equal');
  //   } else {
  //     console.log('not equal');
  //   }

  //   // imagesRef.current = images;
  // }, [images, a]);

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={
        <>
          <View style={styles.headerContainer}>
            <Button
              buttonName="Like All"
              type={styles.blueButton}
              function={() => dispatch(likeAll(images))}
            />
            <Button
              buttonName="Reset All"
              buttonText={styles.buttonText}
              function={() => dispatch(resetAll(images))}
            />
            <Button
              buttonName="Dislike All"
              type={styles.redButton}
              function={() => dispatch(dislikeAll(images))}
            />
          </View>
        </>
      }
      data={images}
      extraData={a}
      renderItem={({item}) => (
        <View>
          {/* <Card url={item.download_url} like={item.like} id={item.id} /> */}
          {/* <Card payload={images} image={item} /> */}
          <Card style={styles.border}>
            <CardItem cardBody style={styles.border}>
              <Image source={{uri: item.download_url}} style={styles.image} />
            </CardItem>
            <CardItem style={styles.border}>
              <Left>
                <LikeCounter like={item.like} />
              </Left>
              <Right>
                <View style={styles.rightButton}>
                  <Button
                    buttonName="Like"
                    type={styles.blueButton}
                    function={() => dispatch(like(images, item.id))}
                  />
                  <Button
                    buttonName="Dislike"
                    type={styles.redButton}
                    function={() => dispatch(dislike(images, item.id))}
                  />
                </View>
              </Right>
            </CardItem>
          </Card>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  redButton: {
    backgroundColor: '#cf4a3e',
  },
  blueButton: {
    backgroundColor: '#5cb1f2',
    marginRight: 5,
  },
  buttonText: {
    color: 'brown',
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
  border: {
    borderRadius: 10,
  },
});

export default List;
