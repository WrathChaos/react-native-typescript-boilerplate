<img alt="React Native Typescript Boilerplate" src="assets/logo.png" width="1050"/>

[![A lot of fundamental features with Typescript support React Native Boilerplate](https://img.shields.io/badge/-A%20lot%20of%20fundamental%20features%20with%20Typescript%20support%20React%20Native%20Boilerplate-orange?style=for-the-badge)](https://github.com/WrathChaos/react-native-typescript-boilerplate)

[![npm version](https://img.shields.io/npm/v/react-native-typescript-boilerplate.svg?style=for-the-badge)](https://www.npmjs.com/package/@freakycoder/react-native-typescript-boilerplate)
[![npm](https://img.shields.io/npm/dt/react-native-typescript-boilerplate.svg?style=for-the-badge)](https://www.npmjs.com/package/@freakycoder/react-native-typescript-boilerplate)
![Platform - Android and iOS](https://img.shields.io/badge/platform-Android%20%7C%20iOS-blue.svg?style=for-the-badge)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=for-the-badge)](https://github.com/prettier/prettier)

<p align="center">
  <img alt="React Native Typescript Boilerplate"
        src="assets/react-native-typescript-boilerplate.gif" height="650" width="325" />
</p>

# 🥳 Version 3.5 is here 😍

We're proudly announce that `Version 3.5` is here!

- Native Splash Screen
- New React Native Architecture Ready **(RN 0.71+)** 🍻
- Awesome Theme Support for both Light / Dark Mode 🌙
- Latest `React` and `React Native` Dependencies 🌟
- All Dependencies are Upgraded
- New GIF with the Project Example for Theming
- Much Better Documentation
- Detailed Roadmap

# 🐶 What's Included?

- **Typescript**
- **Flipper Ready**
- **Navigation System**
  - [React Navigation 6](https://reactnavigation.org/blog/2021/08/14/react-navigation-6.0/)
  - [React Navigation Helpers](https://github.com/WrathChaos/react-navigation-helpers)
  - Ready to use Stack and Tab Screens with navigation
- **NEW: Built-in Theme System with Hooks**
  - ☀️ Light Theme Support
  - 🌙 Dark Theme Support
  - Dynamic Color Palette System
  - Custom Font Support
  - Built-in Better `Text` Component
- **Ready to use [React Native Reanimated 2](https://docs.swmansion.com/react-native-reanimated/) Integration**
- **Native Splash Screen Integration**
  - [React Native Splash Screen](https://github.com/crazycodeboy/react-native-splash-screen)
- **Awesome [React Native Helpers](https://github.com/WrathChaos/react-native-helpers) Integration**
  - Noth Detection Support
  - Better Dimension Helper (Ex: ScreenWidth, ScreenHeight)
  - Cool Text Helpers
- **React Native Vector Icons**
  - [React Native Vector Icons](https://github.com/oblador/react-native-vector-icons)
  - [React Native Dynamic Vector Icons](https://github.com/WrathChaos/react-native-dynamic-vector-icons)
- **[Localization](https://github.com/stefalda/ReactNativeLocalization) (Multi-Language Support)**
- **HTTP Network Management**
  - [Axios](https://github.com/axios/axios)
  - [Axios Hooks](https://github.com/simoneb/axios-hooks)
  - API Service with Usage Examples
- **Built-in EventEmitter**
  - [EventBus](https://github.com/browserify/events#readme)
- **Babel Plugin Module Resolver**
  - Fixing the relative path problem
  - Visit `.babelrc` to ready to use and more customization
- **Pre-commit Husky Integration**
  - Ready to command husky setup with `npm run husky:setup`
  - `commitlint` Integration for better commit linter
  - Auto prettier on pre-commit
  - Awesome ESLint Integration
- **Built-in Custom Font Implementation**
  - All you need to do is copy-paste the .tff files into `assets/fonts` folder
  - Run `npx react-native-asset` command

- **More and more! :)**

# 🚀 Getting Started

## Quick Start

To create a new project using the barebone boilerplate:

```sh
git clone https://github.com/WrathChaos/react-native-typescript-boilerplate.git my-app-name
```

# 🎯 Step By Step Guide

## Clean-Up & Simple Run

Clean up the files from the example repository and do not forget to install the dependencies
There is a good example by default on `HomeScreen`. You can delete the all screens.

- `npm i`
- `npm run clean-up`
- `npm i && npx pod-install`
- `react-native run-ios/android`

**OR**

- `rm -rf .git README.md`
- `rm -rf ./assets`
- `git init`
- `npm i`
- `npm run husky:setup`
- `npx pod-install` (iOS Only)
- `react-native run-ios/android`

## Husky Integration

Before doing anything else, please simply run the command to initalize the husky. If you do not run clean-up part you should run the husky setup by yourself

```jsx
npm run husky:setup
```

`husky:setup` will handle the initialization, installation and ready to use `commitlint`, `prettier` and `eslint`.

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
- `nano local.properties`

#### Example of MacOS Android SDK Path

Make sure that set your right path of Android **SDK**

##### MacOS / Linux

Replace your machine name instead of `username`

```
sdk.dir=/Users/username/Library/Android/sdk
```

##### Windows

Replace your machine name instead of `username`

```
sdk.dir=/Users/username/Library/Android/sdk
```

- `cd .. & react-native run-ios/android`

# 📃 Documentations

- [Components](./docs/components.md)
- [Axios Hooks](./docs/axios-hooks.md)
- [Event Emitter Usage](./docs/event-emitter.md)
- [Project Structure](./docs/project-structure.md)

# 🔮 Roadmap

- [x] ~~LICENSE~~
- [x] ~~Better Husky: Linter, Prettier and Commintlint~~
- [x] ~~Removal of `react-native-animated-splash-screen`~~
- [x] ~~New Theme Support with React Navigation~~
- [x] ~~Implement the native splash screen with [react-native-splash-screen](https://github.com/crazycodeboy/react-native-splash-screen)~~
- [x] ~~Better and separated documentation~~
- [x] ~~Axios Hooks~~
- [x] ~~React Native New Architecture~~
- [ ] `Babel Plugin Module Resolver` Documentation with Example
- [ ] `Navigation Service` Documentation with Example
- [ ] `Localization` Documentation with Example
- [ ] `Theme` Documentation with Example
- [ ] `FAQ` Documentation
- [ ] `Website` for the boilerplate
- [ ] Splash Screen Documentation
- [ ] `Detox E2E` Integration Fork Version
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
