import { useState } from "react";
import { Image, StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import PagerView from "react-native-pager-view";
import { router } from "expo-router";


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
                        source={require("../../assets/loratadina.png")}
                        style={styles.image}
                        resizeMode="contain"
                    />
                </View>
                <View key="2" style={styles.page}>
                    <Image
                        source={require("../../assets/paracetamol.png")}
                        style={styles.image}
                        resizeMode="contain"
                    />
                </View>
                <View key="3" style={styles.page}>
                    <Image
                        source={require("../../assets/ibupril.png")}
                        style={styles.image}
                        resizeMode="contain"
                    />
                </View>
            </PagerView>
            <View style={styles.bulletContent}>
                <View style={[styles.bullet, page === 0 && styles.activeBullet]}></View>
                <View style={[styles.bullet, page === 1 && styles.activeBullet]}></View>
                <View style={[styles.bullet, page === 2 && styles.activeBullet]}></View>
            </View>
            <Text style={styles.textPrincipal}> Remédios </Text>
            <View style={{ justifyContent: 'center', alignItems: 'flex-end', backgroundColor: '#e0f2f1' }}>

                <Image
                    source={require("../../assets/atenolol.png")}
                    style={styles.image2}
                    resizeMode="contain"
                />
                <Text style={{ fontFamily: 'monospace', fontSize: 16, color: 'green', marginHorizontal: 10, marginBottom: 20, alignItems: 'flex-end' }}>
                    Informações sobre o medicamento: Atenolol
                    Excipientes: carbonato de magnésio, amido, gelatina, laurilsulfato de sódio,
                    amidoglicolato de sódio e estearato de magnésio.
                    Cada comprimido de atenolol 50 mg contém: atenolol
                </Text>

            </View>




            {/* <TouchableOpacity onPress={() => router.push("/bulas")} style={styles.button}>
                <Text style={styles.textbutton}>Bulas</Text>
            </TouchableOpacity>  */}
            {/* CTRL+K+C PARA COMENTAR */}
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
        width: 700,
        height: 250,
        marginBottom: 5,
    },
    image2: {
        width: 700,
        height: 250,
    },
    button: {
        backgroundColor: 'green',
        padding: 10,
        borderRadius: 5,
        alignSelf: 'center',
        margin: 5,
        width: 200,
    },
    textbutton: {
        color: 'white',
        alignSelf: 'center',
    },
    textPrincipal: {
        fontSize: 24,
        fontWeight: "bold",
        color: "green",
        fontFamily: 'monospace',
        marginBottom: 10,
        alignSelf: 'center',
    },
});
