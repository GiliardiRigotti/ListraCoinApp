import AsyncStorage from '@react-native-async-storage/async-storage';

const clear = async () => {
    await AsyncStorage.clear()
}

const set = async (name: string, value: Object) => {
    try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem(`@ListraCoins:${name}`, jsonValue);
    } catch (e) {
        console.error(e)
    }
};

const get = async (name: string) => {
    try {
        const jsonValue = await AsyncStorage.getItem(`@ListraCoins:${name}`);
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        console.error(e)
    }
};

export const store = {
    clear,
    get,
    set
}