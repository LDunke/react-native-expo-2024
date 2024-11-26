import { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import PagerView from "react-native-pager-view";

export function Banner() {
  const [showView, setShowView] = useState(false);

  const [page, setPage] = useState(0);

  const onPageSelected = (e) => {
    setPage(e.nativeEvent.position);
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ flexGrow: 1 }} // Garante que o conteúdo ocupe espaço suficiente
    >
      <PagerView
        initialPage={0}
        style={styles.content}
        onPageSelected={onPageSelected}
      >
        <View key="1" style={styles.page}>
          <Image
            source={require("../../assets/loratadina.png")}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
        <View key="2" style={styles.page}>
          <Image
            source={require("../../assets/paracetamol.png")}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
        <View key="3" style={styles.page}>
          <Image
            source={require("../../assets/ibupril.png")}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
      </PagerView>
      <View style={styles.bulletContent}>
        <View style={[styles.bullet, page === 0 && styles.activeBullet]}></View>
        <View style={[styles.bullet, page === 1 && styles.activeBullet]}></View>
        <View style={[styles.bullet, page === 2 && styles.activeBullet]}></View>
      </View>
      <Text style={styles.textPrincipal}> Remédios </Text>
      <View
        style={{
          justifyContent: "center",
          alignItems: "flex-end",
          backgroundColor: "#e0f2f1",
        }}
      >
        <Image
          source={require("../../assets/atenolol.png")}
          style={styles.image2}
          resizeMode="contain"
        />
        <Text
          style={{
            fontFamily: "bold",
            fontSize: 22,
            color: "green",
            marginHorizontal: 10,
            marginBottom: 20,
            alignSelf: "flex-start",
          }}
        >
          Medicamento : Atenolol
        </Text>

        <TouchableOpacity
          style={[
            styles.customButton, // Estilo base
            { backgroundColor: showView ? "#28a745" : "#218838" }, // Cor verde condicional
          ]}
          onPress={() => setShowView(!showView)}
        >
          <Text style={styles.customButtonText}>
            {showView ? "Esconder Bula" : "Ver Bula"}
          </Text>
        </TouchableOpacity>
        {/* A View que será exibida ou escondida */}
        {showView && (
          <View style={styles.hiddenView}>
            <Text style={styles.text}>
              Informações sobre o medicamento: Atenolol Excipientes: carbonato
              de magnésio, amido, gelatina, laurilsulfato de sódio,
              amidoglicolato de sódio e estearato de magnésio. Cada comprimido
              de atenolol 50 mg contém: atenolol
            </Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e0f2f1",
  },
  content: {
    marginTop: 20,
    height: 150,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    borderRadius: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  page: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 15,
  },
  bulletContent: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  bullet: {
    width: 12,
    height: 12,
    borderRadius: 6,
    margin: 8,
    backgroundColor: "#ccc",
  },
  activeBullet: {
    backgroundColor: "green",
  },
  text: {
    fontSize: 16,
    fontWeight: "monospace",
    color: "green",
  },
  text2: {
    fontFamily: "monospace",
    fontSize: 16,
    color: "green",
    marginHorizontal: 10,
    marginBottom: 20,
    alignItems: "flex-end",
  },
  image: {
    width: 700,
    height: 250,
    marginBottom: 5,
  },
  image2: {
    width: 700,
    height: 250,
  },
  textPrincipal: {
    fontSize: 24,
    fontWeight: "bold",
    color: "green",
    fontFamily: "monospace",
    marginBottom: 10,
    alignSelf: "center",
  },
  container2: {
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    padding: 10, // Adicione um pouco de padding para acomodar a View.
  },
  hiddenView: {
    marginTop: 20,
    padding: 20,
    backgroundColor: "#e0e0e0",
    borderRadius: 10,
    alignItems: "center",
    alignSelf: "center",
  },
  customButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
    alignSelf: "center",
  },
  customButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
