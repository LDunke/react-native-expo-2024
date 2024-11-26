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
              de atenolol 50 mg contém: atenolol INFORMAÇÕES AO PACIENTE 1. PARA
              QUE ESTE MEDICAMENTO É INDICADO? O atenolol é indicado para o
              controle da hipertensão arterial (pressão alta), controle da
              angina pectoris (dor no peito ao esforço), controle de arritmias
              cardíacas, infarto do miocárdio e tratamento precoce e tardio após
              infarto do miocárdio. 2. COMO ESTE MEDICAMENTO FUNCIONA? O
              atenolol age preferencialmente sobre os receptores localizados no
              coração e na circulação, reduzindo a pressão arterial, quando
              usado continuamente. O atenolol começa a ter uma ação
              significativa dentro de 1 hora após sua administração por via
              oral, atingindo seu efeito máximo entre 2 e 4 horas. Esse efeito é
              mantido por no mínimo 24 horas. 3. QUANDO NÃO DEVO USAR ESTE
              MEDICAMENTO? Você não deve utilizar atenolol nas seguintes
              situações: - Conhecida hipersensibilidade (alergia) ao atenolol ou
              a qualquer um dos componentes da fórmula. - Bradicardia
              (batimentos lentos do coração). - Choque cardiogênico
              (comprometimento importante da função do coração em bombear sangue
              aos tecidos). - Hipotensão (pressão arterial baixa ou muito
              baixa). - Acidose metabólica (alteração metabólica na qual o pH do
              sangue é baixo). - Problemas graves de circulação arterial
              periférica (nas extremidades). - Bloqueio cardíaco de segundo ou
              terceiro grau (tipo de arritmia que causa bloqueio de impulsos
              elétricos para o coração). - Síndrome do nodo sinusal (doença no
              local de origem dos impulsos elétricos do coração). - Portadores
              de feocromocitoma (tumor benigno da glândula adrenal ou
              suprarrenal) não tratado. - Insuficiência cardíaca descompensada.
              4. O QUE DEVO SABER ANTES DE USAR ESTE MEDICAMENTO? O atenolol
              deve ser utilizado com cuidado nas seguintes situações: - Em
              pacientes com insuficiência cardíaca controlada (compensada). - Em
              pacientes que sofrem de um tipo particular de dor no peito
              (angina), chamada de angina de Prinzmetal. - Em pacientes com
              problemas na circulação arterial periférica (nas extremidades). -
              Em pacientes com bloqueio cardíaco de primeiro grau (tipo de
              arritmia que causa bloqueio de impulsos elétricos para o coração).
              - Em pacientes portadores de diabetes, pois o atenolol pode
              mascarar o aumento da taquicardia (frequência cardíaca) secundária
              à hipoglicemia (baixos níveis de glicose no sangue) e também os
              sinais de tireotoxicose (problemas na tireoide). - Em pacientes
              com histórico de reação anafilática a uma variedade de alérgenos,
              pois o atenolol pode fazer com que a reação a tais alérgenos seja
              mais grave. - Em pacientes grávidas, tentando engravidar ou
              amamentando. - Em pacientes com problemas pulmonares, como asma ou
              falta de ar. Se o paciente for internado, a equipe médica e em
              especial o anestesiologista (se o paciente for se submeter a uma
              cirurgia) devem ser informados que o paciente está tomando
              atenolol. Em pacientes que sofrem de doença isquêmica do coração
              (exemplos: angina e infarto), atenolol não deve ser descontinuado
              abruptamente. Não se espera que atenolol afete a capacidade de
              dirigir veículos ou operar máquinas. Entretanto, alguns pacientes
              podem sentir tontura ou cansaço. Este medicamento não deve ser
              utilizado por mulheres grávidas sem orientação médica. Informe
              imediatamente seu médico em caso de suspeita de gravidez. Não há
              experiência clínica em crianças, por esta razão, não é recomendado
              o uso de atenolol em crianças. Este medicamento pode causar
              doping.Interações medicamentosas O atenolol deve ser utilizado com
              cuidado em pacientes que estão tomando os seguintes medicamentos:
              verapamil, diltiazem, nifedipino, glicosídeos digitálicos,
              clonidina, disopiramida, amiodarona, adrenalina (agentes
              simpatomiméticos), indometacina ou ibuprofeno (para alívio da
              dor), anti-inflamatórios não esteroides (AINES), rivastigmina,
              fingolimode, lacosamida, iohexol e anestésicos. O resultado do
              tratamento poderá ser alterado se o atenolol for tomado ao mesmo
              tempo que estes medicamentos. Podem ocorrer alterações nos
              resultados de exames laboratoriais referentes aos níveis de
              transaminases (avaliação da função do fígado) e muito raramente
              alteração nos exames imunológicos (anticorpos antinucleares).
              Informe ao seu médico ou cirurgião-dentista se você está fazendo
              uso de algum outro medicamento. Não use medicamento sem o
              conhecimento do seu médico. Pode ser perigoso para a sua saúde. 5.
              ONDE, COMO E POR QUANTO TEMPO POSSO GUARDAR ESTE MEDICAMENTO?
              Conservar em temperatura ambiente (entre 15 e 30°C). Proteger da
              luz e umidade. Número de lote e datas de fabricação e validade:
              vide embalagem. Não use medicamento com o prazo de validade
              vencido. Guarde-o em sua embalagem original. Características
              físicas e organolépticas Atenolol 50 mg: comprimido branco de
              formato redondo, biconvexo, liso em um dos lados e com vinco do
              outro lado. Antes de usar, observe o aspecto do medicamento. Caso
              ele esteja no prazo de validade e você observe alguma mudança no
              aspecto, consulte o farmacêutico para saber se poderá utilizá-lo.
              TODO MEDICAMENTO DEVE SER MANTIDO FORA DO ALCANCE DAS CRIANÇAS. 6.
              COMO DEVO USAR ESTE MEDICAMENTO? Modo de usar O atenolol deve ser
              administrado por via oral, com água, de preferência no mesmo
              horário todos os dias. O paciente não deve utilizar o medicamento
              se estiver em jejum por tempo prolongado. Posologia - Hipertensão:
              a maioria dos pacientes responde a 1 dose única oral diária de 50
              a 100 mg. O efeito pleno será alcançado após 1 ou 2 semanas.
              Pode-se conseguir uma redução adicional na pressão arterial
              combinando-se atenolol com outros agentes anti-hipertensivos. -
              Angina: a maioria dos pacientes com angina pectoris responde a 1
              dose única oral diária de 100 mg ou 50 mg administrados 2 vezes ao
              dia. É improvável que se obtenha benefício adicional com o aumento
              da dose. - Arritmias Cardíacas: com a arritmia controlada, a dose
              de manutenção adequada é de 50 a 100 mg uma vez ao dia. - Infarto
              do Miocárdio: para pacientes após alguns dias da ocorrência de um
              infarto agudo do miocárdio, recomenda-se 1 dose oral de 100 mg
              diários de atenolol para profilaxia a longo prazo do infarto do
              miocárdio. - Idosos: os requisitos de dose podem ser reduzidos,
              especialmente em pacientes com função renal comprometida. -
              Crianças: não há experiência pediátrica com atenolol e, por esta
              razão, não é recomendado para uso em crianças. - Insuficiência
              Renal: uma vez que atenolol é excretado por via renal, a dose deve
              ser reduzida nos casos de comprometimento grave da função renal.
              Não ocorre acúmulo significativo do medicamento em pacientes que
              tenham clearance de creatinina superior a 35 mL/min/1,73m2 (a
              faixa normal é de 100-150 mL/min/1,73m2 ). Para pacientes com
              clearance de creatinina de 15-35 mL/min/1,73m2 (equivalente a
              creatinina sérica de 300- 600 μmol/L), a dose oral deve ser de 50
              mg diários. Para pacientes com clearance de creatinina menor que
              15 mL/min/1,73m2 (equivalente a creatinina sérica maior de 600
              μmol/L), a dose oral deve ser de 25 mg diários ou de 50 mg em dias
              alternados. Os pacientes que se submetem à hemodiálise devem
              receber 50 mg após cada diálise. A administração deve ser feita
              sob supervisão hospitalar, uma vez que podem ocorrer acentuadas
              quedas na pressão arterial. Se o paciente esquecer de tomar uma
              dose de atenolol, deve tomá-la assim que lembrar, mas o paciente
              não deve tomar duas doses ao mesmo tempo. Siga a orientação de seu
              médico, respeitando sempre os horários, as doses e a duração do
              tratamento. Não interrompa o tratamento sem o conhecimento de seu
              médico. 7. O QUE DEVO FAZER QUANDO EU ME ESQUECER DE USAR ESTE
              MEDICAMENTO? Caso você se esqueça de tomar uma dose de atenolol,
              deve tomá-la assim que lembrar, mas não tome duas doses ao mesmo
              tempo. Em caso de dúvidas, procure orientação do farmacêutico ou
              de seu médico, ou cirurgião-dentista. 8. QUAIS OS MALES QUE ESTE
              MEDICAMENTO PODE ME CAUSAR? Podem ocorrer as seguintes reações
              adversas com o uso de atenolol: Reação comum (ocorre entre 1% e
              10% dos pacientes que utilizam este medicamento): bradicardia
              (batimentos lentos do coração), mãos e pés frios, alterações
              gastrintestinais, depressão, embolia pulmonar e fadiga (cansaço).
              Reação incomum (ocorre entre 0,1% e 1% dos pacientes que utilizam
              este medicamento): distúrbios do sono e elevação de enzimas do
              fígado no sangue (transaminases). Reação rara (ocorre entre 0,01%
              e 0,1% dos pacientes que utilizam este medicamento): piora da
              insuficiência cardíaca, início de alteração do ritmo cardíaco
              (desencadeamento de bloqueio cardíaco), queda da pressão por
              mudança de posição (que pode estar associada a desmaio),
              claudicação intermitente (dor ao caminhar, devido à suspensão da
              circulação local no músculo da perna) pode ser aumentada se esta
              já estiver presente, em pacientes susceptíveis ao fenômeno de
              Raynaud (condição que reduz o fluxo sanguíneo nas extremidades),
              tontura, cefaleia (dor de cabeça), formigamento, alterações de
              humor, pesadelos, confusão, psicoses (distúrbio mental sério),
              alucinações, boca seca, alterações da função do fígado, púrpura
              (tipo de doença no sangue), trombocitopenia (redução das plaquetas
              do sangue), alopecia (queda de cabelo), reações na pele
              semelhantes à psoríase (com manchas escamosas duras e
              avermelhadas), exacerbação da psoríase, erupções na pele, olhos
              secos, distúrbios na visão, impotência sexual e broncoespasmo
              (chiado no peito) em pacientes com asma brônquica ou com histórico
              de queixas asmáticas. Reação muito rara (ocorre em menos de 0,01%
              dos pacientes que utilizam este medicamento): aumento de um tipo
              de fator imunológico no sangue (anticorpos antinucleares – ANA).
              Informe ao seu médico, cirurgião-dentista ou farmacêutico o
              aparecimento de reações indesejáveis pelo uso do medicamento.
              Informe também à empresa através do seu serviço de atendimento. 9.
              O QUE FAZER SE ALGUÉM USAR UMA QUANTIDADE MAIOR DO QUE A INDICADA
              DESTE MEDICAMENTO? Os seguintes sintomas podem ocorrer no caso de
              uso de uma quantidade maior do que a indicada de atenolol:
              bradicardia (batimento lento do coração), hipotensão (pressão
              baixa), insuficiência cardíaca aguda e broncoespasmo (chiado no
              peito). O tratamento geral deve incluir: monitorização cuidadosa,
              tratamento em unidade de terapia intensiva, uso de lavagem
              gástrica, carvão ativado e um laxante para prevenir a absorção de
              qualquer substância ainda presente no trato gastrintestinal, o uso
              de plasma ou substitutos do plasma para tratar hipotensão e
              choque. Hemodiálise ou hemoperfusão também podem ser consideradas.
              O médico poderá utilizar medicamentos específicos para controlar
              os sintomas de superdose de atenolol. Em caso de uso de grande
              quantidade deste medicamento, procure rapidamente socorro médico e
              leve a embalagem ou bula do medicamento, se possível. Ligue para
              0800 722 6001, se você precisar de mais orientações.
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
            <Text style={styles.text}>inserir bula </Text>
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
