import React, {
    Component
  } from 'react';
  
  import {
    ScrollView,
  } from 'react-native';
  
  import {
    Row,
    Text,
    Title,
    ImageBackground,
    Tile,
  } from '@shoutem/ui';
  
  export default class HeadDetails extends Component {
    render() {
      const { head } = this.props;
  
      return (
        <ScrollView style = {{marginTop:-70}}>
          <ImageBackground styleName="large-portrait" source={{ uri: head.image &&
          head.image.url ? head.image.url : undefined }}>
            <Tile>
              <Title>{head.name}</Title>
            </Tile>
          </ImageBackground>
  
          <Row>
            <Text>{head.description}</Text>
          </Row>
  
        </ScrollView>
      );
    }
  }