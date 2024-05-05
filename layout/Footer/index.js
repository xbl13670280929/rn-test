import { useState } from "react";
import { TouchableWithoutFeedback, StyleSheet, Text, View } from "react-native";

export default function Footer() {
    const [list, setList] = useState([{
        title: '11',
    },{
        title: '22',
    },{
        title: '33',
    }]);
    const [activeIndex, setActiveIndex] = useState(1);
    return (
        <View style={styles.container}>
            {list.map((item, index) => {
                return <View style={styles.item} key={index}>
                    <TouchableWithoutFeedback onPress={() => {
                        
                        const activeIndex2 = activeIndex;
                        setActiveIndex(activeIndex2);
                        console.log('11', index);
                    }}>
                        <View style={styles.itemTitle}><Text>{item.title}:{index}</Text></View>
                    </TouchableWithoutFeedback>

                    <View style={{
                        opacity: activeIndex === index ? 1:0
                    }}>
                        <View style={styles.subItem}><Text>aa</Text></View>
                        <View style={styles.subItem}><Text>bb</Text></View>
                    </View>
                </View>
            })}
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
    },
    subShow: {
        display: 'block',
    }
});