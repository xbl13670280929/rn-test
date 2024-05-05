import { StyleSheet, Text, View } from "react-native";

export default function Footer() {
    return (
        <View style={styles.container}>
            <Text>Footer</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        width: 'auto',
        textAlign: 'center',
    },
});