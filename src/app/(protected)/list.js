import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { usePaymentsDatabase } from "../../database/usePaymentsDatabase";
import { FlashList } from "@shopify/flash-list";
import { formatCurrencyBRL } from "../../utils/formatCurrent";
import { formatDateToBrazilian } from "../../utils/formatData";

export default function List() {
    const [data, setData] = useState([])
    const { getPayments } = usePaymentsDatabase();
    const [page, setPage] = useState(0); //controlar qual página o sistema já carregou
    const [loading, setLoading] = useState(true); //controlar se está carregando os dados do banco
    const [hasMore, setHasMore] = useState(true); //controlar se tem mais dados para carregar

    async function fetchData() {

        if (hasMore === false) return; //se esta flag for falsa, não tem mais dados para carregar
        console.log(page)
        setPage(page + 1)
        //Vai buscar no banco de dados os pagamentos
        const payments = await getPayments(page);

        if (payments.length < 5) setHasMore(false) //se retornar menos de 5 registros, não tem mais dados para carregar
        // console.log(payments);
        setData([...data, ...payments])
        setLoading(false)
    }

    useEffect(() => {
        //Execute a primeira fez a busca de dados
        setPage(0)
        fetchData()
    }, [])

    renderItem = ({ item }) => (
        <View style={{ flexDirection: "row", margin: 5, margin: 10, padding: 3, backgroundColor: "fff", height: 150 }}>
            <View style={{ flex: 1, gap: 5 }}>
                <Text style={{fontFamily:"bold", fontSize: 18, textTransform: "uppercase"}}>{item.nome}</Text>
                <View style={{ flexDirection: "row", gap: 10 }}>
                    <Text style={{fontFamily:"regular"}}>{formatDateToBrazilian (item.data_pagamento || new Date())}</Text>
                    <Text>{item.numero_recibo}</Text>
                </View>
            </View>
            <View><Text style={{flex: 1, justifyContent: "center", alignItems:"center"}}>{formatCurrencyBRL(item.valor_pago || 0)}</Text></View>
        </View>
    );

    return (
        <View style={{ flex: 1 }}>
            <Text>Pagamentos</Text>
            <View style={{ flex: 1 }}>
                <FlashList
                    data={data}
                    renderItem={renderItem}
                    estimatedItemSize={50}
                    onEndReached={fetchData}
                    onEndReachedThreshold={0.8}
                    keyExtractor={(item) => item.id.toString()}
                />
            </View>
        </View>
    )
}