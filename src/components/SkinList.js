import React, {
    Component
  } from 'react';
  
  import {
    TouchableOpacity,
  } from 'react-native';
  
  import {
    ImageBackground,
    ListView,
    Tile,
    Title,
    Subtitle,
    Overlay,
    Screen
  } from '@shoutem/ui';
  
  import { NavigationBar } from '@shoutem/ui/navigation';
  import { navigateTo } from '@shoutem/core/navigation';
  import { ext } from '../const';
  import { connect } from 'react-redux';
  
  export class SkinList extends Component {
    constructor(props) {
      super(props);
  
      // bind renderRow function to get the correct props
      this.renderRow = this.renderRow.bind(this);
    }
  
    getSkin() {
      return require('../assets/skin.json');
    }
  
    // defines the UI of each row in the list
    renderRow(skin) {
      const { navigateTo } = this.props;
  
      return (
        <TouchableOpacity onPress={() => navigateTo({
          screen: ext('SkinDetails'),
          props: { head }
        })}>
          <ImageBackground styleName="large-banner" source={{ uri: skin.image &&
          skin.image.url ? skin.image.url : undefined }}>
            <Tile>
              <Title>{skin.name}</Title>
            </Tile>
          </ImageBackground>
        </TouchableOpacity>
      );
    }
  
    render() {
      return (
        <Screen>
          <NavigationBar title="SKIN" />
          <ListView
            data={this.getSkin()}
            renderRow={skin => this.renderRow(skin)}
          />
        </Screen>
      );
    }
  }
  
  // connect screen to redux store
  export default connect(
    undefined,
    { navigateTo }
  )(SkinList);