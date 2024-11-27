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
  const [showViewBula1, setShowViewBula1] = useState(false);
  const [showViewBula2, setShowViewBula2] = useState(false);
  const [showViewBula3, setShowViewBula3] = useState(false);
  const [showViewBula4, setShowViewBula4] = useState(false);
  const [showViewBula5, setShowViewBula5] = useState(false);
  const [showViewBula6, setShowViewBula6] = useState(false);
  const [showViewBula7, setShowViewBula7] = useState(false);
  const [showViewBula8, setShowViewBula8] = useState(false);
  const [showViewBula9, setShowViewBula9] = useState(false);
  const [showViewBula10, setShowViewBula10] = useState(false);


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
            source={require("../../assets/banner1.png")}
            style={styles.image3}
            resizeMode="contain"
          />
        </View>
        <View key="2" style={styles.page}>
          <Image
            source={require("../../assets/banner2.png")}
            style={styles.image4}
            resizeMode="contain"
          />
        </View>
        <View key="3" style={styles.page}>
          <Image
            source={require("../../assets/banner3.png")}
            style={styles.image4}
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
            fontSize: 18,
            color: "green",
            marginHorizontal: 10,
            marginBottom: 20,
            alignSelf: "center",
          }}
        >
          Medicamento : Atenolol
        </Text>

        <TouchableOpacity
          style={[
            styles.customButton, // Estilo base
            { backgroundColor: showViewBula1 ? "#28a745" : "#218838" }, // Cor verde condicional
          ]}
          onPress={() => setShowViewBula1(!showViewBula1)}
        >
          <Text style={styles.customButtonText}>
            {showViewBula1 ? "Esconder Bula" : "Ver Bula"}
          </Text>
        </TouchableOpacity>
        {/* A View que será exibida ou escondida */}
        {showViewBula1 && (
          <View style={styles.hiddenView}>
            <Text style={styles.text}>
              <Text style={styles.text3}>Indicação: </Text>
              Controle da hipertensão arterial, angina pectoris, arritmias cardíacas, infarto do miocárdio (tratamento precoce e tardio).
              <Text style={styles.text3}>Como funciona: </Text>
              Atua reduzindo a pressão arterial e frequência cardíaca, com efeito inicial em 1 hora, máximo entre 2 a 4 horas e duração mínima de 24 horas.
              <Text style={styles.text3}>Contraindicações: </Text>
              <Text style={styles.text3}>Não usar em caso de: </Text>
              Alergia ao atenolol ou componentes da fórmula.
              Bradicardia, hipotensão grave, choque cardiogênico.
              Problemas graves de circulação periférica.
              Feocromocitoma não tratado.
              Insuficiência cardíaca descompensada.
              Algumas arritmias (bloqueios cardíacos de segundo ou terceiro grau).
              Acidose metabólica.
              <Text style={styles.text3}>Cuidados antes de usar: </Text>
              Usar com cautela em:
              Insuficiência cardíaca controlada.
              Problemas pulmonares (ex.: asma).
              Diabetes (pode mascarar sintomas de hipoglicemia).
              Histórico de reações alérgicas graves.
              Durante gravidez e amamentação (apenas com orientação médica).
              Informar médicos e anestesiologistas sobre o uso antes de cirurgias.
              <Text style={styles.text3}>Interações medicamentosas: </Text>
              Pode interagir com: verapamil, diltiazem, nifedipino, amiodarona, anti-inflamatórios (ibuprofeno), anestésicos, entre outros.
              <Text style={styles.text3}>Modo de uso: </Text>
              Administração oral, com água, no mesmo horário diário.
              Não usar em jejum prolongado.
              <Text style={styles.text3}>Posologia: </Text>
              Hipertensão: 50-100 mg/dia.
              Angina: 100 mg/dia ou 50 mg 2 vezes ao dia.
              Ajuste necessário para idosos ou pacientes com insuficiência renal.
              <Text style={styles.text3}>Reações adversas: </Text>
              Comuns: Fadiga, bradicardia, mãos/pés frios, depressão.
              Incomuns: Distúrbios do sono, aumento de enzimas hepáticas.
              Raras: Tontura, queda de cabelo, psoríase, impotência, broncoespasmo em asmáticos.
              Muito raras: Alterações imunológicas.
              O que fazer em caso de esquecimento:
              Tomar assim que lembrar, mas não dobrar a dose.
              <Text style={styles.text3}>Superdose: </Text>
              Sintomas: Bradicardia, pressão baixa, insuficiência cardíaca aguda, broncoespasmo.
              Procure socorro médico imediatamente.
              <Text style={styles.text3}>Armazenamento: </Text>
              Conservar em temperatura entre 15°C e 30°C, protegido de luz e umidade.
            </Text>
          </View>
        )}

        <Image
          source={require("../../assets/clonazepam.png")}
          style={styles.image2}
          resizeMode="contain"
        />

        <Text
          style={{
            fontFamily: "bold",
            fontSize: 18,
            color: "green",
            marginHorizontal: 10,
            marginBottom: 20,
            alignSelf: "center",
          }}
        >
          Medicamento : Clonazepam
        </Text>

        <TouchableOpacity
          style={[
            styles.customButton, // Estilo base
            { backgroundColor: showViewBula2 ? "#28a745" : "#218838" }, // Cor verde condicional
          ]}
          onPress={() => setShowViewBula2(!showViewBula2)}
        >
          <Text style={styles.customButtonText}>
            {showViewBula2 ? "Esconder Bula" : "Ver Bula"}
          </Text>
        </TouchableOpacity>
        {/* A View que será exibida ou escondida */}
        {showViewBula2 && (
          <View style={styles.hiddenView}>
            <Text style={styles.text}>
              <Text style={styles.text3}>Indicação: </Text>
              Tratamento de transtornos de ansiedade, transtornos do pânico, epilepsia (como parte do tratamento de crises convulsivas) e síndrome de pernas inquietas.
              <Text style={styles.text3}>Como funciona: </Text>
              O clonazepam pertence à classe dos benzodiazepínicos e age no sistema nervoso central, produzindo efeitos ansiolíticos, anticonvulsivantes, sedativos e relaxantes musculares.
              <Text style={styles.text3}>Contraindicações: </Text>
              <Text style={styles.text3}>Não usar em caso de: </Text>
              Alergia ao clonazepam ou a outros benzodiazepínicos.
              Miastenia gravis (fraqueza muscular).
              Insuficiência respiratória grave.
              Insuficiência hepática grave.
              Apneia do sono (dificuldade para respirar enquanto dorme).
              Gravidez e amamentação (exceto quando recomendado pelo médico).
              <Text style={styles.text3}>Cuidados antes de usar: </Text>
              <Text style={styles.text3}>Usar com cautela em: </Text>
              Dependência de substâncias, problemas de alcoolismo ou histórico de abuso de drogas.
              Pacientes com problemas hepáticos ou renais.
              Pacientes com histórico de depressão ou pensamentos suicidas.
              Idosos (podem ser mais sensíveis aos efeitos do medicamento).
              Gravidez: uso somente com orientação médica.
              Durante a amamentação: usar com precaução.
              <Text style={styles.text3}>Interações medicamentosas: </Text>
              Pode interagir com: álcool, antidepressivos, antipsicóticos, outros benzodiazepínicos, anticonvulsivantes, analgésicos opioides e medicamentos que afetam o sistema nervoso central, podendo intensificar os efeitos sedativos.
              <Text style={styles.text3}>Modo de uso: </Text>
              Administração oral, com ou sem alimentos.
              <Text style={styles.text3}>Posologia: </Text>
              Para ansiedade: geralmente 0,25 mg a 0,5 mg, duas vezes ao dia. A dose pode ser aumentada conforme necessário, até 4 mg/dia.
              Para epilepsia: a dose inicial pode variar entre 1,5 mg a 3 mg/dia, dividida em 2 ou 3 doses.
              A dose pode ser ajustada conforme orientação médica, dependendo da resposta e tolerância ao medicamento.
              <Text style={styles.text3}>Reações adversas: </Text>
              Comuns: Sonolência, tontura, cansaço, coordenação motora prejudicada.
              Incomuns: Alterações no apetite, boca seca, dificuldade de concentração, alterações no humor, amnésia (perda de memória), dificuldade de fala.
              Raras: Reações alérgicas graves, dificuldade para respirar, alteração do ritmo cardíaco, sintomas depressivos, confusão mental, convulsões (em casos extremos).
              O que fazer em caso de esquecimento:
              Tomar a dose esquecida assim que lembrar, mas não duplicar a dose.
              <Text style={styles.text3}>Superdose: </Text>
              Sintomas: Sedação excessiva, dificuldade respiratória, diminuição dos reflexos, coma.
              Procurar atendimento médico imediato. O tratamento pode incluir a administração de flumazenil (antagonista do benzodiazepínico) e suporte respiratório.
              <Text style={styles.text3}>Armazenamento: </Text>
              Conservar em temperatura ambiente, entre 15°C e 30°C, protegido da luz e umidade.
            </Text>
          </View>
        )}


        <Image
          source={require("../../assets/dipirona.png")}
          style={styles.image2}
          resizeMode="contain"
        />

        <Text
          style={{
            fontFamily: "bold",
            fontSize: 18,
            color: "green",
            marginHorizontal: 10,
            marginBottom: 20,
            alignSelf: "center",
          }}
        >
          Medicamento : Dipirona
        </Text>

        <TouchableOpacity
          style={[
            styles.customButton, // Estilo base
            { backgroundColor: showViewBula3 ? "#28a745" : "#218838" }, // Cor verde condicional
          ]}
          onPress={() => setShowViewBula3(!showViewBula3)}
        >
          <Text style={styles.customButtonText}>
            {showViewBula3 ? "Esconder Bula" : "Ver Bula"}
          </Text>
        </TouchableOpacity>
        {/* A View que será exibida ou escondida */}
        {showViewBula3 && (
          <View style={styles.hiddenView}>
            <Text style={styles.text}>
              <Text style={styles.text3}>Indicação: </Text>
              Dipirona é indicada para o alívio de dor (leve a moderada), febre e dor associada a condições inflamatórias (como em doenças musculoesqueléticas, cólica renal, entre outras).
              <Text style={styles.text3}>Como funciona: </Text>
              A dipirona possui ação analgésica, antipirética (reduz febre) e anti-inflamatória. Ela age inibindo a síntese de prostaglandinas, substâncias que causam dor e inflamação no corpo.
              <Text style={styles.text3}>Contraindicações: </Text>
              <Text style={styles.text3}>Não usar em caso de: </Text>
              Alergia à dipirona ou a outros medicamentos da classe dos anti-inflamatórios não esteroides (AINEs).
              Histórico de reação anafilática ou granulocitopenia (redução de glóbulos brancos no sangue).
              Disfunção hepática grave.
              Insuficiência renal grave.
              Hipotensão (pressão arterial baixa).
              Durante a gestação, especialmente no terceiro trimestre, e durante a amamentação (sem orientação médica).
              <Text style={styles.text3}>Cuidados antes de usar: </Text>
              <Text style={styles.text3}>Usar com cautela em: </Text>
              Pacientes com doenças hepáticas ou renais leves a moderadas.
              Pacientes com histórico de problemas hematológicos (como discrasias sanguíneas, que afetam a produção de células sanguíneas).
              Durante a gestação e amamentação, a dipirona só deve ser utilizada sob orientação médica.
              <Text style={styles.text3}>Interações medicamentosas: </Text>
              Pode interagir com outros medicamentos, como anticoagulantes, outros analgésicos e medicamentos que afetam o sistema nervoso. A interação pode alterar os efeitos dos medicamentos ou aumentar o risco de efeitos adversos.
              <Text style={styles.text3}>Modo de uso: </Text>
              Administração oral (com água), com ou sem alimentos.
              <Text style={styles.text3}>Posologia: </Text>
              Dor e febre: a dose usual é de 500 mg a 1.000 mg a cada 6-8 horas, conforme a necessidade, não excedendo a dose de 4.000 mg por dia.
              Uso pediátrico: para crianças, a dose deve ser ajustada conforme o peso e orientação médica. Não utilizar em crianças com menos de 3 meses sem orientação médica.
              <Text style={styles.text3}>Reações adversas: </Text>
              Comuns: Reações alérgicas (erupções cutâneas, coceira), tontura, dor abdominal, náuseas, vômitos.
              Incomuns: Queda na pressão arterial, dificuldade respiratória, reações cutâneas mais graves (como urticária ou angioedema).
              Raras: Agranulocitose (diminuição acentuada dos glóbulos brancos, que pode comprometer a defesa do organismo) e síndrome de Stevens-Johnson (reação grave na pele).
              <Text style={styles.text3}>O que fazer em caso de esquecimento: </Text>
              Caso esqueça de tomar uma dose, tome-a assim que lembrar, mas não tome duas doses ao mesmo tempo.
              <Text style={styles.text3}>Superdose: </Text>
              Sintomas: Sonolência excessiva, náuseas, vômitos, diminuição da pressão arterial.
              Em caso de overdose, procure atendimento médico imediatamente. O tratamento pode envolver lavagem gástrica e suporte médico.
              <Text style={styles.text3}>Armazenamento: </Text>
              Conservar em temperatura ambiente, entre 15°C e 30°C, protegido da luz e umidade.

            </Text>
          </View>
        )}


        <Image
          source={require("../../assets/enalapril.png")}
          style={styles.image2}
          resizeMode="contain"
        />

        <Text
          style={{
            fontFamily: "bold",
            fontSize: 18,
            color: "green",
            marginHorizontal: 10,
            marginBottom: 20,
            alignSelf: "center",
          }}
        >
          Medicamento : Enalapril
        </Text>

        <TouchableOpacity
          style={[
            styles.customButton, // Estilo base
            { backgroundColor: showViewBula4 ? "#28a745" : "#218838" }, // Cor verde condicional
          ]}
          onPress={() => setShowViewBula4(!showViewBula4)}
        >
          <Text style={styles.customButtonText}>
            {showViewBula4 ? "Esconder Bula" : "Ver Bula"}
          </Text>
        </TouchableOpacity>
        {/* A View que será exibida ou escondida */}
        {showViewBula4 && (
          <View style={styles.hiddenView}>
            <Text style={styles.text}>
              <Text style={styles.text3}>Indicação: </Text>
              Enapril é indicado para o tratamento de hipertensão arterial (pressão alta), insuficiência cardíaca congestiva, diminuição da função renal em pacientes com diabetes tipo 2, prevenção de acidente vascular cerebral (AVC) e infarto do miocárdio.
              <Text style={styles.text3}>Como funciona: </Text>
              Enapril pertence à classe dos inibidores da enzima conversora da angiotensina (IECA). Ele age bloqueando a conversão da angiotensina I em angiotensina II, uma substância que provoca vasoconstrição e aumento da pressão arterial. Isso resulta na dilatação dos vasos sanguíneos, redução da pressão arterial e melhora do funcionamento do coração.
              <Text style={styles.text3}>Contraindicações: </Text>
              <Text style={styles.text3}>Não usar em caso de: </Text>
              Alergia ao enalapril ou a outros inibidores da ECA.
              Angioedema (inchaço grave da face, boca ou garganta) relacionado ao uso de inibidores da ECA.
              Gravidez e amamentação (a menos que orientado pelo médico).
              Estreitamento da artéria renal (estenose da artéria renal).
              Insuficiência renal grave.
              Pacientes com hiperpotassemia (excesso de potássio no sangue).
              <Text style={styles.text3}>Cuidados antes de usar: </Text>
              <Text style={styles.text3}>Usar com cautela em: </Text>
              Pacientes com doenças renais, hipotensão (pressão arterial baixa) ou insuficiência cardíaca.
              Pacientes com histórico de angioedema, doenças cardíacas ou diabetes.
              Durante a gestação e amamentação, o uso do enalapril deve ser evitado ou feito sob orientação médica.
              <Text style={styles.text3}>Interações medicamentosas: </Text>
              <Text style={styles.text3}>Enapril pode interagir com: </Text>
              Medicamentos que aumentam o potássio no sangue (como suplementos de potássio, diuréticos poupadores de potássio).
              Anti-inflamatórios não esteroides (AINEs), que podem diminuir a eficácia do enalapril.
              Diuréticos, que podem aumentar o risco de hipotensão (pressão baixa).
              Outros medicamentos antihipertensivos (podem aumentar os efeitos de redução da pressão arterial).
              <Text style={styles.text3}>Modo de uso: </Text>
              Administração oral, com ou sem alimentos.
              <Text style={styles.text3}>Posologia: </Text>
              Hipertensão: a dose inicial é geralmente de 5 mg, uma vez ao dia. A dose pode ser ajustada conforme necessário, podendo chegar até 40 mg por dia.
              Insuficiência cardíaca: a dose inicial é de 2,5 mg, uma vez ao dia, com ajustes graduais.
              Outras condições: a dosagem deve ser ajustada conforme orientação médica, dependendo da gravidade da condição e da resposta ao tratamento.
              <Text style={styles.text3}>Reações adversas: </Text>
              Comuns: Tontura, dor de cabeça, fadiga, tosse seca persistente, náuseas.
              Incomuns: Alterações no paladar, dores musculares, erupções cutâneas, aumento do potássio no sangue.
              Raras: Angioedema (inchaço grave), hipotensão acentuada, alteração na função renal, aumento da creatinina no sangue, sintomas de reações alérgicas graves.
              <Text style={styles.text3}>O que fazer em caso de esquecimento: </Text>
              Caso se esqueça de tomar uma dose, tome-a assim que lembrar, mas não tome duas doses ao mesmo tempo. Mantenha a regularidade do horário.
              <Text style={styles.text3}>Superdose: </Text>
              Sintomas: Hipotensão grave (pressão arterial muito baixa), choque, diminuição acentuada da função renal.
              Em caso de overdose, procure imediatamente ajuda médica. O tratamento pode incluir a administração de líquidos intravenosos e outros cuidados para estabilizar a pressão arterial.
              <Text style={styles.text3}>Armazenamento: </Text>
              Conservar em temperatura ambiente, entre 15°C e 30°C, protegido da luz e umidade.
            </Text>
          </View>
        )}


        <Image
          source={require("../../assets/hidroclorotiazida.png")}
          style={styles.image2}
          resizeMode="contain"
        />

        <Text
          style={{
            fontFamily: "bold",
            fontSize: 18,
            color: "green",
            marginHorizontal: 10,
            marginBottom: 20,
            alignSelf: "center",
          }}
        >
          Medicamento : Hidroclorotiazida
        </Text>

        <TouchableOpacity
          style={[
            styles.customButton, // Estilo base
            { backgroundColor: showViewBula5 ? "#28a745" : "#218838" }, // Cor verde condicional
          ]}
          onPress={() => setShowViewBula5(!showViewBula5)}
        >
          <Text style={styles.customButtonText}>
            {showViewBula5 ? "Esconder Bula" : "Ver Bula"}
          </Text>
        </TouchableOpacity>
        {/* A View que será exibida ou escondida */}
        {showViewBula5 && (
          <View style={styles.hiddenView}>
            <Text style={styles.text}>
              <Text style={styles.text3}>Indicação: </Text>
              Hidroclorotiazida é indicada no tratamento de:
              Hipertensão arterial (pressão alta).
              Edema (retenção de líquidos) devido a insuficiência cardíaca congestiva, cirrose hepática ou doença renal.
              Insuficiência renal crônica e síndrome nefrótica.
              <Text style={styles.text3}>Como funciona: </Text>
              A Hidroclorotiazida é um diurético tiazídico que ajuda a reduzir a quantidade de líquido no corpo. Ela age nos rins, aumentando a excreção de sódio, cloro e água, o que resulta na redução da pressão arterial e no alívio de edemas.
              <Text style={styles.text3}>Contraindicações: </Text>
              Alergia à hidroclorotiazida ou a outros componentes da fórmula.
              Anúria (incapacidade dos rins de produzir urina).
              Hipersensibilidade a sulfonamidas (compostos relacionados ao medicamento).
              Insuficiência renal grave ou insuficiência hepática grave.
              Hipocalemia (baixa concentração de potássio no sangue) ou hiponatremia (baixa concentração de sódio no sangue).
              <Text style={styles.text3}>Cuidados antes de usar: </Text>
              <Text style={styles.text3}>Usar com cautela em: </Text>
              Pacientes com problemas renais ou hepáticos, diabetes, gotas ou desequilíbrios eletrolíticos (como baixos níveis de potássio ou sódio).
              Pacientes com hipotensão (pressão arterial baixa), já que a hidroclorotiazida pode reduzir ainda mais a pressão arterial.
              Durante a gestação e amamentação, o uso deve ser evitado ou realizado sob orientação médica.
              <Text style={styles.text3}>Interações medicamentosas: </Text>
              A Hidroclorotiazida pode interagir com:
              Lítio (usado para tratar transtornos bipolares), pois pode aumentar os níveis de lítio no sangue.
              Medicamentos que aumentam o potássio no sangue (suplementos de potássio, diuréticos poupadores de potássio).
              Anti-inflamatórios não esteroides (AINEs), que podem diminuir a eficácia do diurético.
              Medicamentos para o coração, como glicosídeos digitálicos, já que a redução de potássio pode aumentar o risco de efeitos tóxicos.
              Outros diuréticos, que podem ter efeitos aditivos, aumentando o risco de desidratação ou desequilíbrios eletrolíticos.
              <Text style={styles.text3}>Modo de uso: </Text>
              Administração oral, com ou sem alimentos.
              <Text style={styles.text3}>Posologia: </Text>
              Hipertensão: a dose inicial é geralmente de 12,5 a 25 mg por dia, podendo ser aumentada até 50 mg, dependendo da resposta ao tratamento.
              Edemas: a dose inicial varia entre 25 e 100 mg por dia, dependendo da gravidade da retenção de líquidos.
              A dose pode ser ajustada pelo médico, conforme a condição e resposta do paciente.
              <Text style={styles.text3}>Reações adversas: </Text>
              Comuns: Tontura, dor de cabeça, cãibras musculares, náuseas, vômitos, aumento da glicose no sangue (hiperglicemia).
              Incomuns: Diminuição dos níveis de potássio ou sódio no sangue, aumento do colesterol e dos triglicerídeos, distúrbios do ritmo cardíaco.
              Raras: Reações alérgicas graves (dificuldade para respirar, inchaço), alterações na função hepática ou renal, reações cutâneas como erupções.
              <Text style={styles.text3}>O que fazer em caso de esquecimento: </Text>
              Caso se esqueça de tomar uma dose, tome-a assim que lembrar, mas não tome duas doses ao mesmo tempo. Mantenha a regularidade do horário.
              <Text style={styles.text3}>Superdose: </Text>
              Sintomas: Hipotensão grave, desidratação, desequilíbrios eletrolíticos (como baixos níveis de potássio e sódio), diminuição da função renal.
              O tratamento envolve a reposição de líquidos e eletrólitos, além de cuidados médicos para estabilizar a pressão arterial.
              <Text style={styles.text3}>Armazenamento: </Text>
              Conservar em temperatura ambiente, entre 15°C e 30°C, protegido da luz e umidade.
            </Text>
          </View>
        )}

        <Image
          source={require("../../assets/ibuprofeno.png")}
          style={styles.image5}
          resizeMode="contain"
        />

        <Text
          style={{
            fontFamily: "bold",
            fontSize: 18,
            color: "green",
            marginHorizontal: 10,
            marginBottom: 20,
            alignSelf: "center",
          }}
        >
          Medicamento : Ibuprofeno
        </Text>

        <TouchableOpacity
          style={[
            styles.customButton, // Estilo base
            { backgroundColor: showViewBula6 ? "#28a745" : "#218838" }, // Cor verde condicional
          ]}
          onPress={() => setShowViewBula6(!showViewBula6)}
        >
          <Text style={styles.customButtonText}>
            {showViewBula6 ? "Esconder Bula" : "Ver Bula"}
          </Text>
        </TouchableOpacity>
        {/* A View que será exibida ou escondida */}
        {showViewBula6 && (
          <View style={styles.hiddenView}>
            <Text style={styles.text}>
              <Text style={styles.text3}>Indicação: </Text>
              Ibuprofeno é indicado para:
              Alívio de dores leves a moderadas, como dor de cabeça, dor de dente, cólica menstrual, dores musculares e dor nas articulações.
              Redução da febre.
              Tratamento de inflamações associadas a condições como artrite e lesões.
              <Text style={styles.text3}>Como funciona: </Text>
              O ibuprofeno é um anti-inflamatório não esteroide (AINE) que inibe a produção de substâncias chamadas prostaglandinas, responsáveis por causar dor, febre e inflamação. Sua ação começa em cerca de 30 minutos a 1 hora após a administração.
              <Text style={styles.text3}>Contraindicações: </Text>
              Alergia ao ibuprofeno ou a outros AINEs.
              Histórico de sangramento ou perfuração gastrointestinal.
              Úlceras no estômago ou inflamação intestinal ativa.
              Insuficiência renal, hepática ou cardíaca grave.
              Uso durante o terceiro trimestre da gravidez.
              <Text style={styles.text3}>Cuidados antes de usar: </Text>
              Usar com cautela em:
              Idosos, devido ao risco aumentado de efeitos adversos.
              Pacientes com problemas renais, hepáticos, cardíacos ou gastrointestinais.
              Pessoas com histórico de asma ou alergias a outros AINEs.
              Durante a gravidez e amamentação, somente com orientação médica.
              <Text style={styles.text3}>Interações medicamentosas: </Text>
              O ibuprofeno pode interagir com:
              Anticoagulantes (risco aumentado de sangramento).
              Corticosteroides e outros AINEs (risco aumentado de efeitos colaterais gastrointestinais).
              Anti-hipertensivos (pode reduzir sua eficácia).
              Lítio e metotrexato (aumenta os níveis dessas substâncias no sangue).
              Álcool, que pode potencializar irritações no estômago.
              <Text style={styles.text3}>Modo de uso: </Text>

              Administração oral, preferencialmente com alimentos para reduzir a irritação gástrica.
              <Text style={styles.text3}>Posologia: </Text>
              Adultos: 200 a 400 mg a cada 4-6 horas, conforme necessidade, sem exceder 3.200 mg por dia.
              Crianças: A dose deve ser ajustada pelo peso e orientada pelo médico.
              <Text style={styles.text3}>Reações adversas: </Text>
              Comuns: Náuseas, dores abdominais, tontura, dor de cabeça, e indigestão.
              Incomuns: Retenção de líquidos, aumento da pressão arterial, erupções cutâneas.
              Raras: Úlceras ou sangramentos gastrointestinais, insuficiência renal, reações alérgicas graves (inchaço, dificuldade para respirar).
              <Text style={styles.text3}>O que fazer em caso de esquecimento: </Text>
              Caso esqueça de tomar uma dose, tome-a assim que lembrar, mas não tome duas doses ao mesmo tempo.
              <Text style={styles.text3}>Superdose: </Text>
              Sintomas: Náuseas, vômitos, dor abdominal, sonolência, tontura e, em casos graves, insuficiência renal ou respiratória.
              Procure atendimento médico imediato, levando a embalagem do medicamento.
              <Text style={styles.text3}>Armazenamento: </Text>
              Conservar em temperatura ambiente, entre 15°C e 30°C, protegido da luz e umidade.
              Manter fora do alcance de crianças.
            </Text>
          </View>
        )}

        <Image
          source={require("../../assets/losartana.png")}
          style={styles.image5}
          resizeMode="contain"
        />

        <Text
          style={{
            fontFamily: "bold",
            fontSize: 18,
            color: "green",
            marginHorizontal: 10,
            marginBottom: 20,
            alignSelf: "center",
          }}
        >
          Medicamento : Losartana
        </Text>

        <TouchableOpacity
          style={[
            styles.customButton, // Estilo base
            { backgroundColor: showViewBula7 ? "#28a745" : "#218838" }, // Cor verde condicional
          ]}
          onPress={() => setShowViewBula7(!showViewBula7)}
        >
          <Text style={styles.customButtonText}>
            {showViewBula7 ? "Esconder Bula" : "Ver Bula"}
          </Text>
        </TouchableOpacity>
        {/* A View que será exibida ou escondida */}
        {showViewBula7 && (
          <View style={styles.hiddenView}>
            <Text style={styles.text}>
              <Text style={styles.text3}>Indicação: </Text>
              Losartana é indicada para:
              Tratamento da hipertensão arterial (pressão alta).
              Proteção dos rins em pacientes com diabetes tipo 2 e proteinúria (eliminação excessiva de proteínas pela urina).
              Tratamento da insuficiência cardíaca (quando não é possível utilizar outros medicamentos).
              Redução do risco de acidente vascular cerebral (AVC) em pacientes com hipertensão e hipertrofia ventricular esquerda.
              <Text style={styles.text3}>Como funciona: </Text>
              A losartana é um antagonista dos receptores de angiotensina II. Ela relaxa os vasos sanguíneos, diminuindo a pressão arterial e melhorando o fluxo sanguíneo. Além disso, protege os rins e o coração, especialmente em condições como diabetes e insuficiência cardíaca.
              <Text style={styles.text3}>Contraindicações: </Text>
              Alergia à losartana ou a qualquer componente da fórmula.
              Gravidez, especialmente no segundo e terceiro trimestres.
              Amamentação, salvo orientação médica específica.
              Pacientes com hipercalemia (níveis elevados de potássio no sangue) ou com insuficiência renal severa.
              <Text style={styles.text3}>Cuidados antes de usar: </Text>
              Usar com cautela em:
              Pacientes com doença renal ou hepática.
              Idosos, devido ao risco maior de efeitos colaterais.
              Pacientes com histórico de hipercalemia ou que fazem uso de medicamentos que aumentam o potássio no sangue.
              Durante a amamentação, o uso deve ser avaliado pelo médico.
              <Text style={styles.text3}>Interações medicamentosas: </Text>
              A losartana pode interagir com:
              Diuréticos poupadores de potássio e suplementos de potássio (risco de hipercalemia).
              Anti-inflamatórios não esteroides (AINEs), que podem reduzir a eficácia do medicamento e afetar a função renal.
              Lítio, aumentando os níveis dessa substância no sangue.
              Medicamentos para hipertensão, podendo causar queda excessiva da pressão arterial.
              <Text style={styles.text3}>Modo de uso: </Text>
              Administração oral, com ou sem alimentos.
              <Text style={styles.text3}>Posologia: </Text>
              Hipertensão: Dose inicial de 50 mg uma vez ao dia, podendo ser ajustada para até 100 mg por dia, dependendo da resposta.
              Proteção renal em diabéticos: 50 mg uma vez ao dia, podendo aumentar para 100 mg conforme orientação médica.
              Insuficiência cardíaca: Dose inicial de 12,5 mg uma vez ao dia, com ajuste gradual até 50 mg, conforme necessário.
              <Text style={styles.text3}>Reações adversas: </Text>
              Comuns: Tontura, cansaço, dor de cabeça, pressão baixa (hipotensão) e aumento dos níveis de potássio no sangue.
              Incomuns: Náusea, dor muscular ou articular, distúrbios do sono.
              Raras: Reações alérgicas graves (inchaço, dificuldade para respirar), alterações na função renal ou hepática.
              <Text style={styles.text3}>O que fazer em caso de esquecimento: </Text>
              Caso esqueça de tomar uma dose, tome-a assim que lembrar. Se estiver próximo do horário da próxima dose, pule a dose esquecida e siga o esquema regular. Não tome duas doses ao mesmo tempo.
              <Text style={styles.text3}>Superdose: </Text>
              Sintomas: Queda acentuada da pressão arterial, frequência cardíaca acelerada ou reduzida, tontura e confusão.
              Procure atendimento médico imediatamente.
              <Text style={styles.text3}>Armazenamento: </Text>
              Conservar em temperatura ambiente, entre 15°C e 30°C, protegido da luz e umidade.
              Manter fora do alcance de crianças.
            </Text>
          </View>
        )}

        <Image
          source={require("../../assets/metformina.png")}
          style={styles.image5}
          resizeMode="contain"
        />

        <Text
          style={{
            fontFamily: "bold",
            fontSize: 18,
            color: "green",
            marginHorizontal: 10,
            marginBottom: 20,
            alignSelf: "center",
          }}
        >
          Medicamento : Metformina
        </Text>

        <TouchableOpacity
          style={[
            styles.customButton, // Estilo base
            { backgroundColor: showViewBula8 ? "#28a745" : "#218838" }, // Cor verde condicional
          ]}
          onPress={() => setShowViewBula8(!showViewBula8)}
        >
          <Text style={styles.customButtonText}>
            {showViewBula8 ? "Esconder Bula" : "Ver Bula"}
          </Text>
        </TouchableOpacity>
        {/* A View que será exibida ou escondida */}
        {showViewBula8 && (
          <View style={styles.hiddenView}>
            <Text style={styles.text}>
              <Text style={styles.text3}>Indicação: </Text>
              Metformina é indicada para:
              Tratamento do diabetes mellitus tipo 2, especialmente em pacientes com excesso de peso, quando a dieta e os exercícios físicos não são suficientes para controlar os níveis de glicose no sangue.
              Pode ser utilizada em combinação com outros medicamentos antidiabéticos, incluindo insulina.
              <Text style={styles.text3}>Como funciona: </Text>
              A metformina pertence à classe dos biguanidas e atua reduzindo a produção de glicose pelo fígado, diminuindo a absorção de glicose pelo intestino e aumentando a sensibilidade das células à insulina. Isso ajuda a manter os níveis de glicose no sangue sob controle.
              <Text style={styles.text3}>Contraindicações: </Text>
              Alergia à metformina ou a qualquer componente da fórmula.
              Insuficiência renal grave ou alterações na função renal.
              Doenças agudas ou condições que podem causar redução da função renal, como desidratação, infecções graves ou choque.
              Acidose metabólica (incluindo cetoacidose diabética).
              Uso de contraste iodado para exames, salvo orientação médica.
              <Text style={styles.text3}>Cuidados antes de usar: </Text>
              Usar com cautela em:
              Pacientes com doenças hepáticas ou que consomem quantidades excessivas de álcool (risco de acidose láctica).
              Gestantes e lactantes, somente com orientação médica.
              Pacientes idosos, devido ao maior risco de disfunção renal.
              Realizar exames periódicos para avaliar a função renal.
              <Text style={styles.text3}>Interações medicamentosas: </Text>
              A metformina pode interagir com:
              Contrastes iodados, aumentando o risco de acidose láctica.
              Diuréticos e anti-hipertensivos, que podem afetar a função renal.
              Corticosteroides e outros medicamentos que elevam a glicose no sangue, reduzindo a eficácia da metformina.
              Álcool, que aumenta o risco de acidose láctica.
              <Text style={styles.text3}>Modo de uso: </Text>
              Administração oral, preferencialmente durante ou após as refeições, para reduzir efeitos colaterais gastrointestinais.
              <Text style={styles.text3}>Posologia: </Text>
              Dose inicial usual: 500 mg a 850 mg, uma ou duas vezes ao dia.
              Dose máxima recomendada: 2.000 mg a 2.500 mg por dia, dividida em 2 ou 3 doses.
              Ajustes são realizados de forma gradual para melhorar a tolerância.
              <Text style={styles.text3}>Reações adversas: </Text>
              Comuns: Náusea, vômitos, dor abdominal, diarreia, perda de apetite.
              Incomuns: Alterações no paladar.
              Raras: Acidose láctica (complicação grave, mas rara), deficiência de vitamina B12 (em uso prolongado).
              Muito raras: Reações alérgicas (erupção cutânea, coceira).
              O que fazer em caso de esquecimento:
              Caso se esqueça de tomar uma dose, tome-a assim que lembrar. Se estiver próximo do horário da próxima dose, pule a dose esquecida. Não tome duas doses juntas.
              <Text style={styles.text3}>Superdose: </Text>
              Sintomas: Acidose láctica, que pode causar fraqueza, cansaço extremo, dor abdominal, respiração acelerada, confusão ou sonolência.
              Procure atendimento médico imediatamente.
              <Text style={styles.text3}>Armazenamento: </Text>
              Conservar em temperatura ambiente, entre 15°C e 30°C, protegido da luz e umidade.
              Manter fora do alcance de crianças.
            </Text>
          </View>
        )}

        <Image
          source={require("../../assets/nimesulida.png")}
          style={styles.image5}
          resizeMode="contain"
        />

        <Text
          style={{
            fontFamily: "bold",
            fontSize: 18,
            color: "green",
            marginHorizontal: 10,
            marginBottom: 20,
            alignSelf: "center",
          }}
        >
          Medicamento : Nimesulida
        </Text>

        <TouchableOpacity
          style={[
            styles.customButton, // Estilo base
            { backgroundColor: showViewBula9 ? "#28a745" : "#218838" }, // Cor verde condicional
          ]}
          onPress={() => setShowViewBula9(!showViewBula9)}
        >
          <Text style={styles.customButtonText}>
            {showViewBula9 ? "Esconder Bula" : "Ver Bula"}
          </Text>
        </TouchableOpacity>
        {/* A View que será exibida ou escondida */}
        {showViewBula9 && (
          <View style={styles.hiddenView}>
            <Text style={styles.text}>
              <Text style={styles.text3}>Indicação: </Text>
              Nimesulida é indicada para:
              Alívio da dor aguda (leve a moderada).
              Tratamento de sintomas da osteoartrite (inflamação crônica das articulações).
              Redução da dor e inflamação associadas a processos inflamatórios.
              <Text style={styles.text3}>Como funciona: </Text>
              A nimesulida é um anti-inflamatório não esteroidal (AINE) que reduz a produção de substâncias químicas (prostaglandinas) responsáveis pela dor e inflamação. Sua ação alivia sintomas como dor, inchaço e febre.
              <Text style={styles.text3}>Contraindicações: </Text>
              Alergia à nimesulida ou a qualquer componente da fórmula.
              Histórico de reações alérgicas graves (como asma, rinite ou urticária) a outros AINEs, incluindo aspirina.
              Úlceras gástricas ou duodenais ativas, hemorragias gastrointestinais ou histórico dessas condições.
              Insuficiência hepática ou renal grave.
              Insuficiência cardíaca grave.
              Uso por crianças menores de 12 anos.
              Gestação e amamentação (exceto sob orientação médica).
              Pacientes com histórico de doenças hepáticas induzidas por medicamentos.
              <Text style={styles.text3}>Cuidados antes de usar: </Text>
              Usar com cautela em:
              Pacientes com problemas no fígado ou histórico de consumo excessivo de álcool.
              Pessoas com problemas gástricos, como gastrite, ou propensão a úlceras e sangramentos.
              Idosos, devido ao maior risco de efeitos colaterais.
              Não utilizar por períodos prolongados sem orientação médica.
              Evitar o consumo de álcool durante o tratamento, pois pode aumentar o risco de danos ao fígado.
              <Text style={styles.text3}>Interações medicamentosas: </Text>
              A nimesulida pode interagir com:
              Anticoagulantes (como varfarina), aumentando o risco de sangramentos.
              Corticosteroides e outros AINEs, que aumentam o risco de efeitos gástricos e hemorragias.
              Diuréticos e medicamentos para pressão arterial, reduzindo sua eficácia.
              Lítio, aumentando os níveis de lítio no sangue.
              Metotrexato, elevando o risco de toxicidade.
              <Text style={styles.text3}>Modo de uso: </Text>
              Administração oral, após as refeições, para reduzir irritação gástrica.
              <Text style={styles.text3}>Posologia: </Text>
              Dose usual para adultos: 100 mg a cada 12 horas.
              A dose máxima diária é de 200 mg.
              A duração do tratamento deve ser a mais curta possível, conforme orientação médica.
              <Text style={styles.text3}>Reações adversas: </Text>
              Comuns: Náuseas, vômitos, dor abdominal, diarreia.
              Incomuns: Tontura, sonolência, coceira, vermelhidão na pele.
              Raras: Problemas no fígado (icterícia, aumento das enzimas hepáticas), reações alérgicas graves, como inchaço e dificuldade para respirar.
              Muito raras: Hemorragias ou perfuração gastrointestinal, insuficiência renal.
              O que fazer em caso de esquecimento:
              Caso se esqueça de tomar uma dose, tome-a assim que lembrar. Se estiver próximo do horário da próxima dose, pule a dose esquecida. Não tome duas doses juntas.
              <Text style={styles.text3}>Superdose: </Text>
              Sintomas: Náuseas, vômitos, sonolência, tontura, sangramento gastrointestinal, dificuldade respiratória.
              Procure atendimento médico imediatamente.
              <Text style={styles.text3}>Armazenamento: </Text>
              Conservar em temperatura ambiente, entre 15°C e 30°C, protegido da luz e umidade.
              Manter fora do alcance de crianças.
            </Text>
          </View>
        )}

        <Image
          source={require("../../assets/sinvastatina.png")}
          style={styles.image5}
          resizeMode="contain"
        />

        <Text
          style={{
            fontFamily: "bold",
            fontSize: 18,
            color: "green",
            marginHorizontal: 10,
            marginBottom: 20,
            alignSelf: "center",
          }}
        >
          Medicamento : Sinvastatina
        </Text>

        <TouchableOpacity
          style={[
            styles.customButton, // Estilo base
            { backgroundColor: showViewBula10 ? "#28a745" : "#218838" }, // Cor verde condicional
          ]}
          onPress={() => setShowViewBula10(!showViewBula10)}
        >
          <Text style={styles.customButtonText}>
            {showViewBula10 ? "Esconder Bula" : "Ver Bula"}
          </Text>
        </TouchableOpacity>
        {/* A View que será exibida ou escondida */}
        {showViewBula10 && (
          <View style={styles.hiddenView}>
            <Text style={styles.text}>
              <Text style={styles.text3}>Indicação: </Text>
              Sinvastatina é indicada para:
              Reduzir níveis elevados de colesterol total, LDL (colesterol "ruim") e triglicerídeos.
              Aumentar os níveis de HDL (colesterol "bom").
              Prevenir doenças cardiovasculares, como infarto e derrame, especialmente em pessoas com fatores de risco, como diabetes, hipertensão ou histórico de doença arterial.
              <Text style={styles.text3}>Como funciona: </Text>
              A sinvastatina pertence à classe das estatinas e age bloqueando uma enzima no fígado responsável pela produção de colesterol. Isso ajuda a reduzir os níveis de colesterol no sangue e a prevenir o acúmulo de placas de gordura nas artérias.
              <Text style={styles.text3}>Contraindicações: </Text>
              Alergia à sinvastatina ou a qualquer componente da fórmula.
              Doenças hepáticas ativas ou aumento persistente das enzimas do fígado.
              Gravidez e amamentação.
              Uso concomitante de certos medicamentos, como:
              Antifúngicos azólicos (itraconazol, cetoconazol).
              Antibióticos macrolídeos (claritromicina, eritromicina).
              Inibidores da protease (usados no tratamento do HIV).
              Ciclosporina.
              <Text style={styles.text3}>Cuidados antes de usar: </Text>
              Informar ao médico se você possui:
              Histórico de doenças hepáticas ou aumento das enzimas do fígado.
              Doenças musculares ou histórico familiar de miopatia.
              Insuficiência renal.
              Evitar o consumo excessivo de álcool, pois pode aumentar o risco de problemas no fígado.
              Realizar exames periódicos para monitorar os níveis de colesterol e a função hepática.
              <Text style={styles.text3}>Interações medicamentosas: </Text>
              A sinvastatina pode interagir com:
              Antifúngicos e antibióticos, aumentando o risco de efeitos musculares.
              Varfarina e outros anticoagulantes, potencializando seus efeitos.
              Fibratos (outros medicamentos para colesterol), aumentando o risco de lesão muscular.
              Suco de toranja, que pode aumentar os níveis do medicamento no sangue.
              <Text style={styles.text3}>Modo de uso: </Text>
              Administração oral, geralmente à noite, com ou sem alimentos.
              <Text style={styles.text3}>Posologia: </Text>
              Dose inicial usual: 10 a 20 mg por dia.
              A dose pode ser ajustada pelo médico, conforme os níveis de colesterol e a resposta ao tratamento.
              Dose máxima: 40 mg por dia.
              <Text style={styles.text3}>Reações adversas: </Text>
              Comuns: Dor de cabeça, dor abdominal, náuseas, constipação, gases.
              Incomuns: Erupções cutâneas, coceira, tontura, elevação de enzimas hepáticas.
              Raras: Fraqueza muscular, dor muscular (miopatia), inflamação muscular grave (rabdomiólise).
              Muito raras: Reações alérgicas graves, como inchaço e dificuldade para respirar.
              O que fazer em caso de esquecimento:
              Caso se esqueça de tomar uma dose, tome-a assim que lembrar, mas não tome duas doses juntas.
              <Text style={styles.text3}>Superdose: </Text>
              Sintomas: Não há relatos específicos, mas é necessário monitoramento médico.
              Procure atendimento médico imediatamente em caso de ingestão excessiva.
              <Text style={styles.text3}>Armazenamento: </Text>
              Conservar em temperatura ambiente, entre 15°C e 30°C, protegido da luz e umidade.
              Manter fora do alcance de crianças.
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
  text3: {
    fontFamily: "bold",
  },
  image: {
    width: 700,
    height: 250,
    marginBottom: 5,
  },
  image2: {
    width: 700,
    height: 250,
    alignSelf: "center",

  },
  image3: {
    width: 340,
    height: 250,
    marginBottom: 5,
    alignSelf: "center",

  },
  image4: {
    width: 360,
    height: 250,
    marginBottom: 5,
    alignSelf: "center",

  },
  image5: {
    width: 360,
    height: 250,
    marginBottom: 5,
    alignSelf: "center",
  },
  textPrincipal: {
    fontSize: 24,
    fontWeight: "bold",
    color: "green",
    fontFamily: "bold",
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