import { StyleSheet, View } from "react-native";
import TextSection from '../../components/TextSection'
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
export default function Textcss() {
    return (
        <View style={styles.container}>
            <Header></Header>
            <TextSection></TextSection>
            <Footer></Footer>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
    },
});