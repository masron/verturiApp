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
  
  export default class MuscleDetails extends Component {
    render() {
      const { muscle } = this.props;
  
      return (
        <ScrollView style = {{marginTop:-70}}>
          <ImageBackground styleName="large-portrait" source={{ uri: muscle.image &&
          muscle.image.url ? muscle.image.url : undefined }}>
            <Tile>
              <Title>{muscle.name}</Title>
            </Tile>
          </ImageBackground>
  
          <Row>
            <Text>{muscle.description}</Text>
          </Row>
  
        </ScrollView>
      );
    }
  }