import { router } from "expo-router";
import { ActivityIndicator, Alert, Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useMaintenanceDatabase } from "../database/useMaintenanceDatabase";
import { useState } from "react";

export default function Maintenance() {
    const { resetDatabase, importUsers, importPayments } = useMaintenanceDatabase() // Hook to reset the database
    const [loadingUsers, setLoadingUsers] = useState(false);
    const [loadingPayments, setLoadingPayments] = useState(false);
    const handleReset = async () => {
        /**
         * Função assincrona para resetar o banco de dados
         * 
         */

        try {
            await resetDatabase();
            Alert.alert("Sucesso", "Banco de dados zerado com sucesso!");
        } catch (error) {
            Alert.alert("Erro", "Erro ao zerar o banco de dados.");
        }
    }

    const handleImportUsers = async () => {
        // Implementar a lógica para importar usuários
        try {
            // Lógica para importar usuários
            setLoadingUsers(true)
            await importUsers(); // Chame a função que importa os usuários
            Alert.alert("Sucesso", "Usuários importados com sucesso!");
        } catch (error) {
            Alert.alert("Erro", "Erro ao importar usuários.");
        } finally {
            setLoadingUsers(false)
        }
    }
    const handleImportPayments = async () => {
        // Implementar a lógica para importar usuários
        try {
            // Lógica para importar usuários
            setLoadingPayments(true)
            await importPayments(); // Chame a função que importa os usuários
            Alert.alert("Sucesso", "Pagamentos importados com sucesso!");
        } catch (error) {
            Alert.alert("Erro", "Erro ao importar pagamentos.");
        } finally {
            setLoadingPayments(false)
        }
    }


    return <View style={styles.container}>
        <Text style={styles.title}>Manutenção do Banco de Dados</Text>
        <View style={styles.contentButtons}>
            <Button title="Zerar" onPress={handleReset} />
            {/* <Button title="Importar Usuários" onPress={handleImportUsers} /> */}
            <TouchableOpacity onPress={handleImportUsers} style={styles.touchableOpacity}>
                {
                    loadingUsers
                        ? <ActivityIndicator />
                        : <Text style={styles.buttonTitle}>Importar Usuários</Text>
                }
            </TouchableOpacity>
            {/* <Button title="Importar Pagamentos" onPress={handleImportPayments} /> */}
            <TouchableOpacity onPress={handleImportPayments} style={styles.touchableOpacity}>
                {
                    loadingPayments
                        ? <ActivityIndicator />
                        : <Text style={styles.buttonTitle}>Importar Pagamentos</Text>
                }
            </TouchableOpacity>
            <Button title="Voltar" onPress={() => { router.back() }} />
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
        fontFamily: "bold",
    },
    buttonTitle: {
        fontSize: 16,
        fontFamily: "bold",
        color: "#fff",
        textTransform: "uppercase",
    },
    contentButtons: {
        marginTop: 20,
        gap: 10,
    },
    touchableOpacity: {
        backgroundColor: "#007AFF",
        padding: 10,
        borderRadius: 3,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 10,
            height: 10,
        },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5,
    },
})