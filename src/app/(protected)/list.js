import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { usePaymentsDatabase } from "../../database/usePaymentsDatabase";
import { FlashList } from "@shopify/flash-list";

export default function List() {
    const [data, setData] = useState([])
    const { getPayments } = usePaymentsDatabase();

    async function fetchData() {
        //Vai buscar no banco de dados os pagamentos
        const payments = await getPayments();
        setData(payments)
    }

    useEffect(() => {
        //Execute a primeira fez a busca de dados
        fetchData()
    }, [])

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>Listagem</Text>
            <FlashList
                data={data}
                renderItem={({ item }) => <Text>{item.id}</Text>}
                estimatedItemSize={200}
                style={{ flex: 1 }}
            />
        </View>
    )
}