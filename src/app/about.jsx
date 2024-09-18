import { router } from "expo-router";
import { Button, Text, View, Image } from "react-native";

export default function About() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f5f5f5' }}>
            <Image
             
                style={{ width: 100, height: 100, borderRadius: 50, marginBottom: 20 }} 
            />
            <Text style={{ fontFamily: 'monospace', fontSize: 24, color: '#333', marginBottom: 10 }}>Sobre</Text>
            <Text style={{ fontFamily: 'monospace', fontSize: 16, color: '#666', textAlign: 'center', marginHorizontal: 20, marginBottom: 20 }}>
                Me chamo Lucas Dunke Ramalho, tenho 16 anos, estou matriculado no 2°ano do informática, e sou o responsável por desenvolver esse app utilizando as aulas do professor Graziani como base.
            </Text>
            <Text style={{ fontFamily: 'monospace', fontSize: 16, color: '#666', textAlign: 'center', marginHorizontal: 20, marginBottom: 20 }}>
                O tema deste app é uma bula eletrônica, onde você pode pesquisar por medicamentos e ver informações sobre eles.
            </Text>
            <Button title="Voltar" onPress={() => router.replace("/")} color="#007BFF" />
        </View>
    );
}
