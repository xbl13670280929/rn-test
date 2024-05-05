import { StyleSheet, Text, View } from "react-native";
import TextSection from '../../components/TextSection'
export default function Textcss() {
    return (
        <View style={styles.container}>
            <TextSection></TextSection>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
    },
});