import { StyleSheet, Text, View } from "react-native";

export default function TextSection() {
    return (
        <View style={styles.container}>
            <View style={styles.msgBox}>
                <Text style={styles.subTitle}>DJI Power 1000</Text>
                <Text style={styles.title}>Power Your World</Text>
                <Text style={styles.desc}>Buy your DJI portable power station at the official online DJI Store and enjoy up to 5 years of warranty, [6] free shipping, 1% DJI Credit back on your purchase, and more.</Text>
                <View style={styles.btns}>
                    <Text style={styles.buyBtn}>Buy Now</Text>
                    <Text style={styles.moreBtn}>Watch Video</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        height: 400,
    },
    msgBox: {
        //position: 'absolute',
        //top: 20,
        //left: 0,
        width: '100%',
    },
    subTitle: {
        color: '#000',
        fontSize: 24,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    title: {
        color: '#000',
        fontSize: 18,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 12,
    },
    desc: {
        color: '#000',
        fontSize: 14,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 12,
        paddingLeft: 12,
        paddingRight: 12,
        textAlign: 'center',
    },
    btns: {
        display: 'flex',
        justifyContent: 'center',
    },
    buyBtn: {
    },
    moreBtn: {
    }
});