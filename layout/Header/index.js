import { StyleSheet, Text, View } from "react-native";

export default function Header() {
    return (
        <View style={styles.container}>
            <View style={styles.boxL}>
                <Text>1</Text>
            </View>
            <View style={styles.boxC}><Text>Header</Text></View>
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
    }
});