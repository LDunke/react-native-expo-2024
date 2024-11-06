import { router } from "expo-router"
import { Button, StyleSheet, Text, View } from "react-native"

export default function maintense() {
    return 
    <View style={styles.container}>
        <View style={styles.contentButtons}>
        <Text style={styles.title}>Manutenção do Banco de Dados</Text>
        <Button title="Zerar"  />
        <Button title="Importar Usuários" />
        <Button title="Importar Pagamentos"  />
        <Button title="Voltar" onPress={() => {router.back()}} />
        </View>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
    },
    contentButtons: {
        margin: 20,
        gap: 10,
    },
})