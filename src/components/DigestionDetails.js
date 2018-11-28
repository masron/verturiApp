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
  
  export default class DigestionDetails extends Component {
    render() {
      const { digestion } = this.props;
  
      return (
        <ScrollView style = {{marginTop:-70}}>
          <ImageBackground styleName="large-portrait" source={{ uri: digestion.image &&
          digestion.image.url ? digestion.image.url : undefined }}>
            <Tile>
              <Title>{digestion.name}</Title>
            </Tile>
          </ImageBackground>
  
          <Row>
            <Text>{digestion.description}</Text>
          </Row>
  
        </ScrollView>
      );
    }
  }