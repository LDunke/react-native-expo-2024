import { router } from "expo-router";
import { Button, Text, View, Image } from "react-native";

export default function About() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#e0f2f1' }}>
            <Image
                source={{
                    uri: 'https://avatars.githubusercontent.com/u/159555008?s=400&u=4c797ad0deecbc3d32f90c0c3d8ac20dc24f5ab7&v=4',
                }}
                style={{ width: 100, height: 100, borderRadius: 50, marginBottom: 20 }} 
            />
            <Text style={{ fontFamily: 'monospace', fontSize: 24, color: 'green', marginBottom: 10 }}>Sobre mim</Text>
            <Text style={{ fontFamily: 'monospace', fontSize: 16, color: 'green', textAlign: 'center', marginHorizontal: 20, marginBottom: 20 }}>
                Me chamo Lucas Dunke Ramalho, tenho 16 anos, estou matriculado no 2°ano do informática, e sou o responsável por desenvolver esse app utilizando as aulas do professor Graziani como base.
            </Text>
            <Text style={{ fontFamily: 'monospace', fontSize: 24, color: 'green', marginBottom: 10 }}>Sobre o Projeto</Text>
            <Text style={{ fontFamily: 'monospace', fontSize: 16, color: 'green', textAlign: 'center', marginHorizontal: 20, marginBottom: 20 }}>
                O tema deste app é uma bula eletrônica, onde você pode pesquisar por medicamentos e ver informações sobre eles.
            </Text>
            <Button title="Voltar" onPress={() => router.back()} color="green" />
        </View>
    );
}
