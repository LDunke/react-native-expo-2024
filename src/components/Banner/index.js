import { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import PagerView from "react-native-pager-view";

export function Banner() {
    const [page, setPage] = useState(0);

    const onPageSelected = (e) => {
        setPage(e.nativeEvent.position);
    };

    return (
        <View style={styles.container}>
            <PagerView
                initialPage={0}
                style={styles.content}
                onPageSelected={onPageSelected}
            >
                <View key="1" style={styles.page}>
                <Image 
                        source={{ uri: 'https://cdn.ultrafarma.com.br/static/produtos/134908/large-638545839550907523-134908_1.jpg' }} 
                        style={styles.image} 
                    />
                    <Text style={styles.text}>Banner 1</Text>
                </View>
                <View key="2" style={styles.page}>
                <Image 
                        source={{ uri: 'https://cdn.ultrafarma.com.br/static/produtos/772338/large-637202403852182997-772338_2.png' }} 
                        style={styles.image2} 
                    />
                    <Text style={styles.text}>Banner 2</Text>
                </View>
                <View key="3" style={styles.page}>
                <Image 
                        source={{ uri: 'https://paguemenos.vtexassets.com/arquivos/ids/647014/ibupril-400mg-10-capsulas-principal.jpg?v=638008105714370000' }} 
                        style={styles.image3} 
                    />
                    <Text style={styles.text}>Banner 3</Text>
                </View>
            </PagerView>
            <View style={styles.bulletContent}>
                <View style={[styles.bullet, page === 0 && styles.activeBullet]}></View>
                <View style={[styles.bullet, page === 1 && styles.activeBullet]}></View>
                <View style={[styles.bullet, page === 2 && styles.activeBullet]}></View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#e0f2f1",
    },
    content: {
        marginTop: 20,
        height: 150,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        borderRadius: 10,
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
    },
    page: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        padding: 15,
    },
    bulletContent: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
    },
    bullet: {
        width: 12,
        height: 12,
        borderRadius: 6,
        margin: 8,
        backgroundColor: "#ccc",
    },
    activeBullet: {
        backgroundColor: "green",
    },
    text: {
        fontSize: 22,
        fontWeight: "bold",
        color: "green",
    },
    image: {
        width: 120,
        height: 70,
        marginBottom: 10,
    },
    image2: {
        width: 40,
        height: 70,
        marginBottom: 10,
    },
    image3: {
        width: 80,
        height: 40,
        marginBottom: 10,
    },
});
