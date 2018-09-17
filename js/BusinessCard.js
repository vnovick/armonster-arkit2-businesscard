'use strict';

import React, { Component } from 'react';

import {StyleSheet} from 'react-native';

import {
  ViroARScene,
  ViroBox,
  ViroConstants,
  ViroARTrackingTargets,
  ViroARImageMarker,
  ViroAmbientLight,
  ViroARPlane,
  ViroDirectionalLight,
  ViroNode,
  Viro3DObject,
  ViroQuad
} from 'react-viro';

export class HelloWorldSceneAR extends Component {

  state = {
    isTracking: false,
    initialized: false
  }

  getNoTrackingUI(){
    const { isTracking, initialized } = this.state;
    return (
      <ViroText text={
        initialized ? 'Initializing AR...' 
          : "No Tracking"
      }/>
    )
  }


  getARScene() {
    return (
      <ViroARImageMarker target={"businessCard"} >
          <ViroNode key="monster">
              <ViroDirectionalLight color="#777777"
                direction={[0, -1, 0]}
                shadowOrthographicPosition={[0, 8, -5]}
                shadowOrthographicSize={10}
                shadowNearZ={2}
                shadowFarZ={9}
                lightInfluenceBitMask={2}
                castsShadow={true} 
              />
              <Viro3DObject
                source={require('./res/monster.vrx')}
                resources={[
                  require('./res/Mutant_diffuse.png'),
                  require('./res/Mutant_normal.png')
                ]}
                scale={[0.0002, 0.0002, 0.0002 ]}
                type="VRX"
                animation={{name:'mixamo.com',
                  run:true,
                  loop:true
                }}
              />
              <ViroQuad
                position={[0,0,0]}
                rotation={[-90, 0, 0]}
                height={2} 
                width={2}
                arShadowReceiver={true}
              />
            </ViroNode>
        </ViroARImageMarker>
    )
  }

  render() {
    return (
      <ViroARScene onTrackingUpdated={this._onInitialized} >
        { this.state.isTracking && this.getNoTrackingUI() || this.getARScene() }
      </ViroARScene>
    );
  }

  _onInitialized = (state, reason) => {
    if (state == ViroConstants.TRACKING_NORMAL) {
      isTracking: true
    } else if (state == ViroConstants.TRACKING_NONE) {
      isTracking: false
    }
  }
}

var styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',  
  },
});

ViroARTrackingTargets.createTargets({
  "businessCard" : {
    source : require('./res/Logo.png'),
    orientation : "Up",
    physicalWidth : 0.05 // real world width in meters
  },
});

module.exports = HelloWorldSceneAR;
