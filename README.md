<img alt="React Native Typescript Boilerplate" src="assets/logo.png" width="1050"/>

[![A lot of fundamental features with Typescript support React Native Boilerplate](https://img.shields.io/badge/-A%20lot%20of%20fundamental%20features%20with%20Typescript%20support%20React%20Native%20Boilerplate-orange?style=for-the-badge)](https://github.com/WrathChaos/react-native-typescript-boilerplate)

[![npm version](https://img.shields.io/npm/v/react-native-typescript-boilerplate.svg?style=for-the-badge)](https://www.npmjs.com/package/@freakycoder/react-native-typescript-boilerplate)
[![npm](https://img.shields.io/npm/dt/react-native-typescript-boilerplate.svg?style=for-the-badge)](https://www.npmjs.com/package/@freakycoder/react-native-typescript-boilerplate)
![Platform - Android and iOS](https://img.shields.io/badge/platform-Android%20%7C%20iOS-blue.svg?style=for-the-badge)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=for-the-badge)](https://github.com/prettier/prettier)

<p align="center">
  <img alt="React Native Typescript Boilerplate"
        src="assets/react-native-typescript-boilerplate.gif" height="850" />
</p>

# 🚀 Getting Started

## Quick Start

To create a new project using the barebone boilerplate:

```sh
git clone git@github.com:WrathChaos/react-native-typescript-boilerplate.git my-app-name
```

# What's Included?

- **Typescript**
- **Flipper Ready**
- **Navigation System**
  - React Navigation <b><i>6</i></b>
  - [React Navigation Helpers](https://github.com/WrathChaos/react-navigation-helpers)
  - Ready to use Stack and Tab Screens with navigation
- **NEW: Built-in Theme System with Hooks**
  - Light / Dark Theme Support
  - Dynamic Color Palette System
  - Custom Font Support
  - Built-in TextWrapper for better Text usage
- **Ready to use React Native Reanimated 2 Integration**
- **Native Splash Screen Integration**
  - [React Native Splash Screen](https://github.com/crazycodeboy/react-native-splash-screen)
- **Awesome React Native Helpers Integration**
  - [React Native Helpers](https://github.com/WrathChaos/react-native-helpers)
  - Noth Detection Support
  - Better Dimension Helper (Ex: ScreenWidth, ScreenHeight)
  - Cool Text Helpers
- **Built-in Localization (Multi-Language Support)**
- **HTTP Network Management**
  - Axios
  - API Service with Usage Examples
- **Built-in EventEmitter**
  - EventBus
- **Babel Plugin Module Resolver**
  - Fixing the relative path problem
  - Visit `.babelrc` to ready to use and more customization
- **Pre-commit Husky Integration**
  - Ready to command husky setup with `npm run husky:setup`
  - `commitlint` Integration for better commit linter
  - Auto prettier on pre-commit
- **Built-in Custom Font Implementation**

  - All you need to do is copy-paste the .tff files into `assets/fonts` folder
  - Run `npx react-native-asset` command

- **More and more! :)**

## Project Structure

```
├───android
├───ios
├───src
│   ├───screens
│   │   ├───detail
│   │   │   ├───DetailScreen.style.ts
│   │   │   └───DetailScreen.tsx
│   │   ├───home
│   │   │   ├───HomeScreen.style.ts
│   │   │   └───HomeScreen.tsx
│   │   └───search
│   │       ├───SearchScreen.style.ts
│   │       └───SearchScreen.tsx
│   ├───services
│   │   ├───api
│   │   │   ├───api.constant.ts
│   │   │   └───index.ts
│   │   ├───event-emitter
│   │   │   └───index.ts
│   │   ├───models
│   │   │   └───index.ts
│   │   └───navigation
│   │       └───index.tsx
│   ├───shared
│   │   ├───components
│   │   │   └───text-wrapper
│   │   ├───constants
│   │   │   └───index.ts
│   │   ├───localization
│   │   │   └───index.ts
│   │   └───theme
│   │       ├───fonts
│   │       ├───colors.ts
│   │       ├───font-size.ts
│   │       ├───index.ts
│   │       └───theme.ts
│   └───utils
│       ├───local-storage
│       │   └───index.ts
│       └───index.ts
├───.babelrc
├───.buckconfig
├───.eslintrc.js
├───.gitattributes
├───.gitignore
├───.npmignore
├───.prettierrc.js
├───.watchmanconfig
├───App.tsx
├───README.md
├───app.json
├───index.js
├───metro.config.js
├───package-lock.json
├───package.json
├───react-native.config.js
├───tsconfig.json
```

# Components

## Styles

- **TextWrapper** over default Text component
- Colors
- Fonts
- Theme
- Font Size

## Imports

Predefined **`h`** tags are usable with TextWrapper

```jsx
import Text from "@shared-components/text-wrapper/Text";

// ? Advanced Usage Example
<Text h3 bold right color="#913400" numberOfLines={1} style={{ margin: 16 }}>
  Heading 3 Bold Right Sided Custom Text
</Text>;
```

```jsx
import colors from "@colors";

<Text h1 color={colors.light.primary}>
  Heading 1 with custom color from theme
</Text>;
```

```jsx
import fonts from "@fonts";

<Text h5 fontFamily={fonts.helvetica.regular}>
  Heading 1 with custom font usage
</Text>;
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

# Step By Step Guide

## Clean-Up & Simple Run

Clean up the files from the example repository and do not forget to install the dependencies

- `rm -rf .git README.md`
- `rm -rf ./assets`
- `git init`
- `npm i`
- `npm run husky:setup`
- `npx pod-install` (iOS Only)
- `react-native run-ios/android`

**OR**

- `npm i`
- `npm run clean-up`
- `npm i && npx pod-install`
- `react-native run-ios/android`

## Husky Integration

Before doing anything else, please simply run the command to initalize the husky.

```jsx
npm run husky:setup
```

`husky:setup` will handle the initizalition, installation and ready to use `commitlint` and `prettier`.

## Rename the project: (Thanks to [react-native-name](https://github.com/junedomingo/react-native-rename))

```sh
npx react-native-rename <your-project-name>
```

> With custom Bundle Identifier (Android only. For iOS, please use Xcode)

```sj
npx react-native-rename <your-project-name> -b <bundleIdentifier>
```

### Install Pods (iOS Only)

- `npm i`
- `cd ios && pod install`
- `cd .. && react-native run-ios/android`

### Android local.properties (Android Only)

- `npm i`
- `cd android && mkdir local.properties`
- `nano local.properties
- Add: `sdk.dir=/Users/username/Library/Android/sdk` // This example is for MacOS / Linux`
- Add: `sdk.dir=C\:\\Users\\username\\AppData\\Local\\Android\\Sdk` // This example is for Windows

#### Example of MacOS Android SDK Path

Make sure that set your right path of Android **SDK**
Make sure that set your right path of Android **CMake**

##### MacOS / Linux

Replace your machine name instead of `username`

```
sdk.dir=/Users/username/Library/Android/sdk
cmake.dir=/Users/username/Library/Android/sdk/cmake/3.10.2.4988404
```

##### Windows

Replace your machine name instead of `username`

```
sdk.dir=/Users/username/Library/Android/sdk
cmake.dir=/Users/username/Library/Android/sdk/cmake/3.10.2.4988404
```

- `cd .. & react-native run-ios/android`

### Future Plans

- [x] ~~LICENSE~~
- [x] ~~Better Husky: Linter, Prettier and Commintlint~~
- [x] ~~Removal of `react-native-animated-splash-screen`~~
- [x] ~~New Theme Support with React Navigation~~
- [x] ~~Implement the native splash screen with [react-native-splash-screen](https://github.com/crazycodeboy/react-native-splash-screen)~~
- [ ] Better and separated documentation
- [ ] `Detox E2E` Integration
- [ ] `Redux` Fork Version
- [ ] `MobX State Tree` Fork Version
- [ ] Write an article about the lib on `Medium`
- [ ] Write an article about the lib on `DevTo`

## Credits

<span>Photo by <a href="https://unsplash.com/@sotti?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Shifaaz shamoon</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></span>

<span>Photo by <a href="https://unsplash.com/@jamie452?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jamie Street</a> on <a href="https://unsplash.com/s/photos/profile-picture?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></span>

## Author

FreakyCoder, kurayogun@gmail.com

## License

React Native Typescript Boilerplate is available under the MIT license. See the LICENSE file for more info.
