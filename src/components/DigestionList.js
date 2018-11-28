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
  
  export class DigestionList extends Component {
    constructor(props) {
      super(props);
  
      // bind renderRow function to get the correct props
      this.renderRow = this.renderRow.bind(this);
    }
  
    getDigestion() {
      return require('../assets/digestion.json');
    }
  
    // defines the UI of each row in the list
    renderRow(digestion) {
      const { navigateTo } = this.props;
  
      return (
        <TouchableOpacity onPress={() => navigateTo({
          screen: ext('DigestionDetails'),
          props: { digestion }
        })}>
          <ImageBackground styleName="large-banner" source={{ uri: digestion.image &&
          digestion.image.url ? digestion.image.url : undefined }}>
            <Tile>
              <Title>{digestion.name}</Title>
            </Tile>
          </ImageBackground>
        </TouchableOpacity>
      );
    }
  
    render() {
      return (
        <Screen>
          <NavigationBar title="DIGESTION" />
          <ListView
            data={this.getDigestion()}
            renderRow={digestion => this.renderRow(digestion)}
          />
        </Screen>
      );
    }
  }
  
  // connect screen to redux store
  export default connect(
    undefined,
    { navigateTo }
  )(DigestionList);