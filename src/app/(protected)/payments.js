import { router } from "expo-router";
import { useEffect, useRef, useState } from "react";
import { Button, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { z } from "zod";
import {useAuth} from "../../hooks/Auth/index"

const paymentSchema = z.object({
  valor_pago: z.number().gt(0),
  user_id: z.number().int().positive(),
  user_cadastro: z.number().int().positive(),
  data_pagamento: z.date(),
  observacao: z.string(),
});

export default function Payment() {
  const [valor, setValor] = useState("0,00");
  const [sugestoes, setSugestoes] = useState([
    {
      "id": 1,
      "nome": "Netti Comport"
    }, {
      "id": 2,
      "nome": "Eden Lambot"
    }, {
      "id": 3,
      "nome": "Tabatha Gazey"
    }, {
      "id": 4,
      "nome": "Brina Beaney"
    }, {
      "id": 5,
      "nome": "Ulrika Brody"
    }, {
      "id": 6,
      "nome": "Alys Bowkley"
    }, {
      "id": 7,
      "nome": "Sharyl Allam"
    }, {
      "id": 8,
      "nome": "Kristopher Faye"
    }, {
      "id": 9,
      "nome": "Kristy Tenpenny"
    }, {
      "id": 10,
      "nome": "Archibold Wheater"
    }, {
      "id": 11,
      "nome": "Agnese Fenelow"
    }, {
      "id": 12,
      "nome": "Renae Gilpillan"
    }, {
      "id": 13,
      "nome": "Shelly Carmody"
    }, {
      "id": 14,
      "nome": "Dulci Bauld"
    }, {
      "id": 15,
      "nome": "Kori Hucklesby"
    }, {
      "id": 16,
      "nome": "Layne Summerlie"
    }, {
      "id": 17,
      "nome": "Karole Reek"
    }, {
      "id": 18,
      "nome": "Valaria Itzhak"
    }, {
      "id": 19,
      "nome": "Regen Croker"
    }, {
      "id": 20,
      "nome": "Sara-ann Portlock"
    }, {
      "id": 21,
      "nome": "Alyosha Wanstall"
    }, {
      "id": 22,
      "nome": "Ezequiel Hopkyns"
    }, {
      "id": 23,
      "nome": "Carlo Lufkin"
    }, {
      "id": 24,
      "nome": "Desmund Cornhill"
    }, {
      "id": 25,
      "nome": "Ashly Stilling"
    }, {
      "id": 26,
      "nome": "Shell Louthe"
    }, {
      "id": 27,
      "nome": "Humfried Membry"
    }, {
      "id": 28,
      "nome": "Kariotta Montgomery"
    }, {
      "id": 29,
      "nome": "Derrik Dand"
    }, {
      "id": 30,
      "nome": "Edgar Gotmann"
    }, {
      "id": 31,
      "nome": "Noel Swyn"
    }, {
      "id": 32,
      "nome": "Christina Keepe"
    }, {
      "id": 33,
      "nome": "Josepha Pohl"
    }, {
      "id": 34,
      "nome": "Lucio Goggins"
    }, {
      "id": 35,
      "nome": "Sanderson Legge"
    }
  ]);
  const [id, setId] = useState(1);
  const [data, setData] = useState(new Date());
  const [viewCalendar, setViewCalendar] = useState(false);
  const [observacao, setObservacao] = useState("");
  const valueRef = useRef();
  const {user} = useAuth()

  const handleCalendar = (event, selectedDate) => {
    setViewCalendar(false);
    setData(selectedDate);
  };

  useEffect(() => {
    valueRef?.current?.focus();
  }, []);

  const handleChangeValor = (value) => {
    try {
      let valorLimpo = value.replace(",", "").replace(".", "");
      let valorConvertido = Number(valorLimpo) / 100;
      if (valorConvertido === 0 || isNaN(valorConvertido)) {
        setValor("0,00");
        return;
      }
      let valorPtBR = Intl.NumberFormat("pt-BR", {
        style: "decimal",
        minimumFractionDigits: 2,
      }).format(valorConvertido);
      setValor(valorPtBR);

    } catch (error) {
      setValor("0,00")
    }
  };

  const convertValue = (value) => {
    try {
      let valorLimpo = value.replace(",", "").replace(".", "");
      let valorConvertido = Number(valorLimpo) / 100;
      if (valorConvertido === 0 || isNaN(valorConvertido)) {
        return 0
      }
      return valorConvertido
    } catch (error) {
      return valorConvertido
    }
  }

  const handleSubmit = async () => {
    const payment = {
      user_id: id,
      user_cadastro: Number(user.user.id),
      valor_pago: convertValue(valor),
      data_pagamento: data,
      observacao,
    };

    try {
      const result = await paymentSchema.parseAsync(payment);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.content}>
        <Text>Inserir Pagamentos</Text>
        <View style={styles.inputView}>
          <Ionicons name="wallet-outline" size={24} color="black" />
          <TextInput
            placeholder="Valor"
            keyboardType="decimal-pad"
            style={styles.inputValor}
            value={valor}
            onChangeText={(newValue) => handleChangeValor(newValue)}
            ref={valueRef}
          />
        </View>
        <View style={styles.inputView}>
          <Picker
            selectedValue={id}
            onValueChange={(itemValue, index) => {
              setId(itemValue);
            }}
            style={{ width: "100%" }}
          >
            {sugestoes?.map((item) => {
              return (
                <Picker.Item key={item.id} label={item.nome} value={item.id} />
              );
            })}
          </Picker>
        </View>
        <View style={styles.inputView}>
          <Text onPress={() => setViewCalendar(true)} style={styles.inputData}>
            {data.toLocaleDateString().split("T")[0]}
          </Text>
          {viewCalendar && (
            <DateTimePicker
              value={data}
              onChange={handleCalendar}
              mode="date"
              testID="dateTimePicker"
            />
          )}
        </View>
        <View style={styles.inputView}>
          <TextInput
            placeholder="Observações"
            style={styles.inputObservacao}
            value={observacao}
            onChangeText={setObservacao}
            multiline={true}
          />
        </View>
        <View style={styles.contentButtons}>
          <Button title="Salvar" color="green" onPress={handleSubmit}/>
          <Button title="Continuar" color="green" />
          <Button title="Cancelar" onPress={() => router.back()} color="green" />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#e0f2f1",
  },
  inputView: {
    borderColor: "black",
    borderWidth: 1,
    width: "100%",
    margin: 10,
    alignItems: "center",
    flexDirection: "row",
    padding: 10,
    borderColor: "green",
  },
  contentButtons: {
    flexDirection: "row",
    gap: 10,
    justifyContent: "space-around",
  },
  inputValor: {
    flex: 1,
    textAlign: "right",
    padding: 10,
  },
  inputData: {
    width: "100%",
    textAlign: "center",
    fontFamily: "regular",
    fontSize: 20,
    padding: 10,
  },
  inputObservacao: {
    fontFamily: "regular",
    fontSize: 16,
    flex: 1,
    lineHeight: 20,
  }
})
