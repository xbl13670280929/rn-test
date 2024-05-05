import { useEffect, useState } from "react";
import { TouchableWithoutFeedback, StyleSheet, Text, View } from "react-native";

export default function Footer() {
    const [list, setList] = useState([]);
    const [activeIndex, setActiveIndex] = useState(null);
    useEffect(() => {
        const fn1 = async () => {
            const res = await fetch('http://api.aiwoman1.com/website/nav-footer/tree');
            const data = await res.json();
            
            if(data.code === '0') {
                setList(data.data || []);
            }
        }
        fn1();
    }, [])
    return (
        <View style={styles.container}>
            {list.map((item, index) => {
                return <View style={styles.item} key={index}>
                    <TouchableWithoutFeedback onPress={() => {
                        if(activeIndex === index) {
                            setActiveIndex(null);
                        }else {
                            setActiveIndex(index);
                        }
                    }}>
                        <View style={styles.itemTitle}><Text>{item.title}</Text></View>
                    </TouchableWithoutFeedback>

                    {activeIndex === index && <View>
                        <View style={styles.subItem}><Text>aa</Text></View>
                        <View style={styles.subItem}><Text>bb</Text></View>
                    </View>}
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