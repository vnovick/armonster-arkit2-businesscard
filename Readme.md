# ViroMedia AR Monster demo on business card

##  Sample for ARKit 2 continuos image tracking behavior



- Clone the repo

- Go to this link and install Xcode 10 Beta: <https://developer.apple.com/xcode/downloads/>

- Install iOS 12 on your device

- Install react viro **2.9.0**

  - Download zipped version to app directory:

    | Version          | Date     | Link                                                         |
    | :--------------- | -------- | ------------------------------------------------------------ |
    | react-viro 2.9.0 | 08/14/18 | <https://s3-us-west-2.amazonaws.com/viro/ViroBeta/react-viro-2.9.0.tgz> |

  - `npm install ./react-viro-2.9.0.tgz`

- `yarn` or `npm install`

- ```bash
  yarn
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

  * ![Kiku](js/res/Logo.png)

    If you are not able to print it in color, change the marker image to black and white in `js/res/Logo.png`



    Point app to business card and get a monster standing on it



#### Troubleshooting

if you have config.h build error - 

`cd ./node_modules/react-native/third-party/glog-0.3.4 && ../../scripts/ios-configure-glog.sh` (based on https://github.com/facebook/react-native/issues/19774)