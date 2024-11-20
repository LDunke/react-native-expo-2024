import { router, useLocalSearchParams } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";
import { usePaymentsDatabase } from "../../database/usePaymentsDatabase";
import { useEffect } from "react";

export default function Details() {
  const { id } = useLocalSearchParams()
  const { getPayment } = usePaymentsDatabase();

  const fetchData = async () => {
    try {
      const payment = await getPayment(id)
      console.log(payment)
    } catch (error) {
      Alert.alert("Erro ao buscar pagamento")
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData()
  },[])

  return (
    <View style={style.container}>
      <Text>Details - {id ? id : "Sem id"}  </Text>
      <View>
        <Text>Nome</Text>
        <Text>Data do Pagamento</Text>
        <Text>Num Recibo</Text>
        <Text>Valor Pago</Text>
        <Text>Observação</Text>
      </View>
      <View style={{ flex: 1 }}>
        <Text>Não há imagem cadastrada</Text>
      </View>
      <View style={style.containerButtons}>
        <Button title="Editar" />
        <Button title="IMAGEM" />
        <Button title="REMOVER IMAGEM" />
        <Button title="VOLTAR" onPress={() => router.push("List")} />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  containerButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
})