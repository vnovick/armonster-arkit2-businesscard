##  Sample for ARKit 2 continuos image tracking behavior

![business_card](./business_card.gif)

- Clone the repo

- `yarn` or `npm install`

- npm start

- open ViroMedia [testbed app](https://docs.viromedia.com/docs/develop-with-viro)
and run project from it.


## Developing with XCode


  ```bash
  cd ios
  pod install
  ```

- #### Update RCTWebSocket Project

  - Open Xcode Workspace.
  - RCTWebSocket Target -> Build Phases -> Link Binary With Libraries and replace the unresolved `libfishhook.a` with the correct one under RCTWebSocket.xcodeproj -> Products

  from: <https://github.com/facebook/react-native/issues/19569>


* #### Running an  app

  * Open workspace in Xcode and build for device

  * Update signing for correct team

  * Build with Xcode with physical device connected (with ARKit 2 support)

  * Print the following image:

  * ![business-card](js/res/business_card.png)

    If you are not able to print it in color, change the marker image to black and white in `js/res/businss_card.png`

    Point app to business card and get additional AR Content.


#### Troubleshooting

if you have config.h build error - 

`cd ./node_modules/react-native/third-party/glog-0.3.4 && ../../scripts/ios-configure-glog.sh` (based on https://github.com/facebook/react-native/issues/19774)