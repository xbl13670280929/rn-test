import { StyleSheet, Text, View } from "react-native";

export default function Index() {
    return (
        <View style={styles.container}>
            <Text style={styles.text1}>index1</Text>
            <Text>index2</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    text1: {
        color: 'red',
        fontSize: 20,
        padding: 20,
    },
});