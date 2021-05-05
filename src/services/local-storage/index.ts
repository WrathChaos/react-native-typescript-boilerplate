import MMKVStorage from "react-native-mmkv-storage";
// ? Initialization
const LocalStorage: MMKVStorage.API = new MMKVStorage.Loader().initialize();
export default LocalStorage;
