import { router, useLocalSearchParams } from "expo-router";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import { usePaymentsDatabase } from "../../database/usePaymentsDatabase";
import { useEffect, useState } from "react";
import { formatCurrencyBRL } from "../../utils/formatCurrent";
import { formatDateToBrazilian } from "../../utils/formatData";

export default function Details() {
  const { id } = useLocalSearchParams()
  const { getPayment } = usePaymentsDatabase();
  const [payment, setPayment] = useState({})

  const fetchData = async () => {
    try {
      const data = await getPayment(id)
     // console.log("Data:", data);
      setPayment(data)
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
      <View>
        <Text style={style.text}>Nome: {payment?.nome}</Text>
        <Text style={style.text}>Data do Pagamento: {formatDateToBrazilian(payment?.data_pagamento || new Date())}</Text>
        <Text style={style.text}>Num Recibo: {payment?.numero_recibo}</Text>
        <Text style={style.text}>Valor Pago: {formatCurrencyBRL(payment?.valor_pago || 0)}</Text>
        <Text style={style.text}>Observação: {payment?.observacao}</Text>
      </View>
      <View style={style.contentImage}>
        {
          !!payment?.imagem ? (
            <Image source={{uri: payment?.imagem}} style={{width: 200, height: 200}} />
          ) : <Text>Não há imagem cadastrada</Text>
        }
      </View>
      <View style={style.containerButtons}>
        <Button title="EDITAR" />
        <Button title="IMAGEM" />
        <Button title="REMOVER IMAGEM" />
        <Button title="VOLTAR" onPress={() => router.push("list")} />
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
  contentImage:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text:{
    fontFamily:"regular",
    fontSize: 18,
  },
})