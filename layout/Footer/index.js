import { StyleSheet, Text, View } from "react-native";

export default function Footer() {
    return (
        <View style={styles.container}>
            <View style={styles.item}>
                <View style={styles.itemTitle} onPress={() => {
                    Alert.alert('你点击了按钮！');
                }}><Text>11</Text></View>
                <View style={styles.sub}>
                    <View style={styles.subItem}><Text>22</Text></View>
                    <View style={styles.subItem}><Text>22</Text></View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        width: 'auto',
        textAlign: 'center',
        backgroundColor: '#fff',
        paddingTop: 20,
    },
    itemTitle: {
        paddingLeft: 24,
        paddingRight: 24,
    },
    sub: {
        display: 'none',
    }
});