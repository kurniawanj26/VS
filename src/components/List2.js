import React, {Component, useEffect, useState} from 'react';
import {View, StyleSheet, FlatList, Image} from 'react-native';
import {Button, LikeCounter} from './index';
import {Card, CardItem, Left, Right} from 'native-base';
import {
  likeAll,
  dislikeAll,
  resetAll,
  like,
  dislike,
} from '../redux/actions/index';
import {useDispatch, useSelector, connect} from 'react-redux';

// const List2 = (props) => {
export class List2 extends Component {
  // const dispatch = useDispatch();
  // const images = useSelector((state) => state.getImagesReducer.images);
  // const a = useSelector((state) => state.getImagesReducer.a);
  // const imagesRef = useRef(images);

  // const [data, setData] = useState([]);
  // // console.log('INITIAsL', images);
  // useEffect(() => {
  //   // setData([...images]);
  //   setData(images);
  //   if (a === images) {
  //     console.log('sama');
  //   } else {
  //     console.log('gk sama');
  //   }

  //   // imagesRef.current = images;
  // }, [images, a]);
  constructor(props) {
    super(props);

    this.state = {
      images: [],
    };
  }

  UNSAFE_componentWillMount() {
    console.log('oi');
  }

  render() {
    return (
      <FlatList
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <>
            <View style={styles.headerContainer}>
              <Button
                buttonName="Like All"
                type={styles.blueButton}
                // function={() => dispatch(likeAll(images))}
              />
              <Button
                buttonName="Reset All"
                buttonText={styles.buttonText}
                // function={() => dispatch(resetAll(images))}
              />
              <Button
                buttonName="Dislike All"
                type={styles.redButton}
                // function={() => dispatch(dislikeAll(images))}
              />
            </View>
          </>
        }
        data={this.props.images}
        extraData={this.props.images}
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
                      // function={() => dispatch(like(props.data, item.id))}
                      function={() => this.props.like(this.props.data, item.id)}
                    />
                    <Button
                      buttonName="Dislike"
                      type={styles.redButton}
                      // function={() => dispatch(dislike(props.data, item.id))}
                    />
                  </View>
                </Right>
              </CardItem>
            </Card>
          </View>
        )}
      />
    );
  }
}

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

const mapDispatchToProps = {
  likeAll,
  dislikeAll,
  resetAll,
  like,
  dislike,
};

const mapStateToProps = (state) => {
  return {
    images: state.getImagesReducer.images,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(List2);
