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
  
  export class HeadList extends Component {
    constructor(props) {
      super(props);
  
      // bind renderRow function to get the correct props
      this.renderRow = this.renderRow.bind(this);
    }
  
    getHead() {
      return require('../assets/head.json');
    }
  
    // defines the UI of each row in the list
    renderRow(head) {
      const { navigateTo } = this.props;
  
      return (
        <TouchableOpacity onPress={() => navigateTo({
          screen: ext('HeadDetails'),
          props: { head }
        })}>
          <ImageBackground styleName="large-banner" source={{ uri: head.image &&
          head.image.url ? head.image.url : undefined }}>
            <Tile>
              <Title>{head.name}</Title>
            </Tile>
          </ImageBackground>
        </TouchableOpacity>
      );
    }
  
    render() {
      return (
        <Screen>
          <NavigationBar title="HEAD" />
          <ListView
            data={this.getHead()}
            renderRow={head => this.renderRow(head)}
          />
        </Screen>
      );
    }
  }
  
  // connect screen to redux store
  export default connect(
    undefined,
    { navigateTo }
  )(HeadList);