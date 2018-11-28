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
  
  export class MuscleList extends Component {
    constructor(props) {
      super(props);
  
      // bind renderRow function to get the correct props
      this.renderRow = this.renderRow.bind(this);
    }
  
    getMuscle() {
      return require('../assets/muscle.json');
    }
  
    // defines the UI of each row in the list
    renderRow(muscle) {
      const { navigateTo } = this.props;
  
      return (
        <TouchableOpacity onPress={() => navigateTo({
          screen: ext('MuscleDetails'),
          props: { muscle }
        })}>
          <ImageBackground styleName="large-banner" source={{ uri: muscle.image &&
          muscle.image.url ? muscle.image.url : undefined }}>
            <Tile>
              <Title>{muscle.name}</Title>
            </Tile>
          </ImageBackground>
        </TouchableOpacity>
      );
    }
  
    render() {
      return (
        <Screen>
          <NavigationBar title="MUSCLE" />
          <ListView
            data={this.getMuscle()}
            renderRow={muscle => this.renderRow(muscle)}
          />
        </Screen>
      );
    }
  }
  
  // connect screen to redux store
  export default connect(
    undefined,
    { navigateTo }
  )(MuscleList);