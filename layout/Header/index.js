import { ImageBackground, StyleSheet, Text, View } from "react-native";

const image = { uri: 'https://legacy.reactjs.org/logo-og.png' };
export default function Header() {
    return (
        <View style={styles.container}>
            <View style={styles.boxL}>
                <Text>1</Text>
            </View>
            <View style={styles.boxC}>
                {/* <ImageBackground source={image} resizeMode="cover" style={styles.logoImg}>
                </ImageBackground> */}
            </View>
            <View style={styles.boxR}>
                <Text>2</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        width: 'auto',
        height: 50,
        textAlign: 'center',
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'row',
    },
    boxL: {
        width: 54,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    boxR: {
        width: 54,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    boxC: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoImg: {
        width: 32,
        height: 32,
        borderRadius: 32,
        overflow: 'hidden',
    }
});