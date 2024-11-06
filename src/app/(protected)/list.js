import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { usePaymentsDatabase } from "../../database/usePaymentsDatabase";
import { FlashList } from "@shopify/flash-list";
import { formatCurrencyBRL } from "../../utils/formatCurrent";
import { formatDateToBrazilian } from "../../utils/formatData";

export default function List() {
    const [data, setData] = useState([])
    const { getPayments } = usePaymentsDatabase();

    async function fetchData() {
        //Vai buscar no banco de dados os pagamentos
        const payments = await getPayments();
        console.log(payments);
        setData(payments)
    }

    useEffect(() => {
        //Execute a primeira fez a busca de dados
        fetchData()
    }, [])

    renderItem = ({ item }) => (
        <View style={{ flexDirection: "row", margin: 5 }}>
            <View style={{ flex: 1 }}>
                <Text>{item.nome}</Text>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <Text>{formatDateToBrazilian (item.data_pagamento || new Date())}</Text>
                    <Text>{item.numero_recibo}</Text>
                </View>
            </View>
            <View><Text>{formatCurrencyBRL(item.valor_pago || 0)}</Text></View>
        </View>
    );

    return (
        <View style={{ flex: 1 }}>
            <Text>Pagamentos</Text>
            <View style={{ flex: 1 }}>
                <FlashList
                    data={data}
                    renderItem={renderItem}
                    estimatedItemSize={200}
                />
            </View>
        </View>
    )
}