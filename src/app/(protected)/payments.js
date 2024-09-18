import { router } from "expo-router";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function Payment() {
    const [valor, setValor] = useState("0,00");

    return (
        <View style={styles.content}>
            <View>
                <TextInput placeholder="Valor" keyboardType="decimal-pad" 
                style={styles.inputValor}
                value={valor}
                onChangeText={setValor}
                />
            </View>
            <View>
                <TextInput style={styles.inputView} placeholder="Usuário" />
            </View>
            <View>
                <TextInput style={styles.inputView} placeholder="Data" />
            </View>
            <View>
                <TextInput style={styles.contentButtons} placeholder="Observações" />
            </View>
            <View>
                <Button title="Salvar" />
                <Button title="Continuar" />
                <Button title="Cancelar" onPress={()=> router.back()} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    inputView:{
        borderColor: "black",
        borderWidth: 1,
        width: "100%",
        margin: 10,
    },
    contentButtons: {
        flexDirection: "row",
        gap: 10,
        justifyContent: "space-around",
    },
    inputValor: {
        textAlign: "right",
        padding: 10,
    }
})
