import { useState } from "react";
import { Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";

export default function List() {
    const [payments, setPayments] = useState([
        {id: 1, user_id: 1},
        {id: 2, user_id: 2},
        {id: 3, user_id: 3},
        {id: 4, user_id: 4},
    ]);
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#e0f2f1' }}>
            <View style={{flex: 1}}>
                <FlatList 
                data={payments}
                keyExtractor={item => item.id.toString()}
                renderItem={({item}) => <Text>{item.user_id}</Text>}
                />
            </View>
        </View>
    );
}
