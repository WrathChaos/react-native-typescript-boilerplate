<img alt="React Native Pure Boilerplate" src="https://github.com/WrathChaos/react-native-pure-boilerplate/blob/master/assets/logo.png" width="1050"/>

[![React Native Pure BoilerPlate](https://img.shields.io/badge/-React%20Native%20pure%20Boilerplate-lightgrey?style=for-the-badge)](https://github.com/WrathChaos/react-native-pure-boilerplate)

[![npm version](https://img.shields.io/npm/v/react-native-pure-boilerplate.svg?style=for-the-badge)](https://www.npmjs.com/package/@freakycoder/react-native-pure-boilerplate)
[![npm](https://img.shields.io/npm/dt/react-native-pure-boilerplate.svg?style=for-the-badge)](https://www.npmjs.com/package/@freakycoder/react-native-pure-boilerplate)
![Platform - Android and iOS](https://img.shields.io/badge/platform-Android%20%7C%20iOS-blue.svg?style=for-the-badge)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=for-the-badge)](https://github.com/prettier/prettier)

<p align="center">
  <img alt="React Native Pure Boilerplate"
        src="assets/RN-Pure-Boilerplate.gif" height="650" />
</p>

# Installation

You can simply clone the project and start with your barebone project

```sh
git clone git@github.com:WrathChaos/react-native-pure-boilerplate.git my-app-name
```

### Clean-Up & Simple Run

Clean up the files from the example repository and do not forget to install the dependencies

```sh
rm -rf .git README.md
npm i 
react-native run-ios/android
```

# What's Included?

- React Navigation V5
- API Usage Service
- Ready to use Styles
- Built-in Theme System
- Build-in Animated Splash Screen
- Local Storage Utils Functions
- HTTP Network Management (Axios)
- Built-in EventEmitter (EventBus)
- Ready to see Stack and Tab Screens with navigation
- Babel Plugin Module Resolver to fix the relative path problem (visit .babelrc)

# Step By Step Guide

## Rename the project: (Thanks to [react-native-name](https://github.com/junedomingo/react-native-rename))

```sh
npx react-native-rename <your-project-name>
```

> With custom Bundle Identifier (Android only. For iOS, please use Xcode)

```sj
npx react-native-rename <your-project-name> -b <bundleIdentifier>
```

### Install Pods (iOS Only)

- npm i
- cd ios && pod install
- cd .. && react-native run-ios/android

### Android local.properties (Android Only)

- npm i
- cd android && mkdir local.properties
- nano local.properties

#### Example of MacOS Android SDK Path

Make sure that set your right path of Android SDK

```
ndk.dir=/Users/your-name/Library/Android/sdk/ndk-bundle
sdk.dir=/Users/your-name/Library/Android/sdk
```

- cd .. & react-native run-ios/android

# Components

## Styles

- colors
- fonts
- theme
- font-size

## Imports

```jsx
import colors from "@colors";
```

```jsx
import fonts from "@fonts";
```

```jsx
import fontSize from "@font-size";
```

```jsx
import theme from "@theme";
```

if you want to call them all at once

```js
import { theme, fonts, colors, spacing, fontSize } from "@shared-styles/index";
```

### Future Plans

- [x] ~~LICENSE~~
- [ ] MobX State Tree Fork Version
- [ ] Write an article about the lib on Medium

## Credits

<span>Photo by <a href="https://unsplash.com/@aznbokchoy?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Lucas Benjamin</a> on <a href="/?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>

## Author

FreakyCoder, kurayogun@gmail.com

## License

React Native Pure Boilerplate is available under the MIT license. See the LICENSE file for more info.
