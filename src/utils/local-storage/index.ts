import AsyncStorage from "@react-native-community/async-storage";

export const storeLocalStorage = (key: string, data: any) =>
  new Promise(async (resolve, reject) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(data));
      resolve(true);
    } catch (e) {
      // saving error
      console.log("Store Data in AsyncStorage Error!");
      reject(false);
    }
  });

export const fetchLocalStorage = (key: string) =>
  new Promise(async (resolve, reject) => {
    try {
      const value = await AsyncStorage.getItem(key, undefined);
      if (value !== null) {
        // value previously stored
        resolve(JSON.parse(value));
      }
      reject(null);
    } catch (e) {
      reject(null);
    }
  });
