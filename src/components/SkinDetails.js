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
  
  export default class SkinDetails extends Component {
    render() {
      const { skin } = this.props;
  
      return (
        <ScrollView style = {{marginTop:-70}}>
          <ImageBackground styleName="large-portrait" source={{ uri: skin.image &&
          skin.image.url ? skin.image.url : undefined }}>
            <Tile>
              <Title>{skin.name}</Title>
            </Tile>
          </ImageBackground>
  
          <Row>
            <Text>{skin.description}</Text>
          </Row>
  
        </ScrollView>
      );
    }
  }