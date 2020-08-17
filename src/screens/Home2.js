import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {getImages} from '../redux/actions/index';
import {connect} from 'react-redux';
import {List2} from '../components/index';

export class Home2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [],
    };
  }

  componentDidMount() {
    try {
      this.props.getImages();
      // this.setState({images: this.props.images});
    } catch (error) {
      alert(error);
    }
  }

  render() {
    // console.warn(this.props.images);
    return (
      <View>
        {/* <Text> {this.state.image} </Text> */}
        <List2 data={this.props.images} />
      </View>
    );
  }
}

const mapDispatchToProps = {
  getImages,
};

const mapStateToProps = (state) => {
  return {
    images: state.getImagesReducer.images,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home2);
