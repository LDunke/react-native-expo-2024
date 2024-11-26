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
          Medicamento : Clonazepam
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
              INFORMAÇÃO AO PACIENTE Ação esperada do medicamento O clonazepam
              pertence a uma família de remédios chamados benzodiazepínicos, que
              possuem como principais propriedades inibição leve de várias
              funções do sistema nervoso permitindo com isto uma ação
              anticonvulsivante, alguma sedação, relaxamento muscular e efeito
              tranquilizante. Em estudos feitos em animais o clonazepam foi
              capaz de inibir crises convulsivas de diferentes tipos, tanto por
              agir diretamente sobre o foco epiléptico como por impedir que este
              interfira na função do restante do sistema nervoso. Cuidados de
              armazenamento Manter à temperatura ambiente (15º C a 30º C).
              Proteger da luz e manter em lugar seco. Prazo de validade O número
              do lote e as datas de fabricação e validade estão impressos no
              cartucho. Não use o medicamento com o prazo de validade vencido.
              Antes de usar observe o aspecto do medicamento. Não tome o
              medicamento após a data de validade indicada na embalagem; pode
              ser prejudicial a sua saúde. Gravidez e lactação Este medicamento
              não deve ser utilizado por mulheres grávidas sem orientação
              médica. Informe seu médico a ocorrência de gravidez na vigência do
              tratamento ou após o seu término. Informar ao médico se está
              amamentando. Você não deverá amamentar durante o tratamento com
              clonazepam. Cuidados de administração Siga a orientação do seu
              médico, respeitando sempre os horários, as doses e a duração do
              tratamento. Interrupção do tratamento Não interromper o tratamento
              sem o conhecimento do seu médico. A interrupção abrupta deste
              medicamento em pacientes com epilepsia pode precipitar crises
              recorrentes, portanto, somente seu médico poderá orientar a
              interrupção do tratamento com redução gradual da dose utilizada.
              Reações adversas Informe o seu médico sobre o aparecimento de
              reações desagradáveis. Sendo as mais comumente observadas:
              cansaço, sonolência, fraqueza, diminuição de força muscular,
              tontura, sensação de vazio na cabeça, incoordenação motora e
              lentificação. TODO MEDICAMENTO DEVE SER MANTIDO FORA DO ALCANCE
              DAS CRIANÇAS. Ingestão concomitante com outras substâncias
              Pacientes em tratamento com clonazepam não devem em hipótese
              alguma consumir álcool uma vez que isto pode reduzir a eficácia do
              remédio ou produzir efeitos indesejáveis imprevisíveis. Quando em
              uso combinado com outras substâncias com efeito inibidor do
              sistema nervoso central, como outras drogas antiepilépticas
              (hidantoínas, carbamazepina, etc.) efeitos sedativos podem se
              tornar mais pronunciados. Contraindicações e precauções Você não
              deverá tomar este medicamento se for alérgico ao clonazepam ou a
              qualquer substância contida nos comprimidos. Durante o tratamento
              o paciente não deve dirigir veículos ou operar máquinas, pois sua
              habilidade e atenção podem estar prejudicadas. Informe seu médico
              sobre qualquer medicamento que esteja usando, antes do início, ou
              durante o tratamento. Informe seu médico a ocorrência de gravidez.
              Não deve ser utilizado durante a gravidez e lactação. Estudos
              epidemiológicos não puderam excluir a possibilidade de indução de
              malformações congênitas com o uso de clonazepam. Também há a
              possibilidade de fatores genéticos ligados à epilepsia causar
              problemas com o feto. Para assegurar o uso seguro e eficaz dos
              benzodiazepínicos, uma vez que estes podem causar dependência
              física e psicológica, é aconselhável consultar seu médico antes de
              aumentar a dose ou interromper abruptamente esta medicação. NÃO
              USE MEDICAMENTO SEM O CONHECIMENTO DO SEU MÉDICO. PODE SER
              PERIGOSO PARA A SAÚDE. INFORMAÇÕES TÉCNICAS Características
              Químicas e Farmacológicas Farmacocinética O clonazepam é quase
              completamente absorvido após administração oral. A
              biodisponibilidade absoluta dos comprimidos de clonazepam é maior
              do que 90%. As concentrações plasmáticas máximas de clonazepam são
              alcançadas dentro de 2-3 horas após a administração oral. O
              clonazepam é eliminado por biotransformação, com a eliminação
              subsequente de metabólitos na urina e bile. Menos que 2% de
              clonazepam inalterado é excretado na urina. A biotransformação
              ocorre principalmente pela redução do grupo 7-nitro para o
              derivado 4-amino. O produto pode ser acetilado para formar
              7-acetamido-clonazepam ou glucuronizado. O 7-acetamido-clonazepam
              e o 7-aminoclonazepam podem ser adicionalmente oxidados e
              conjugados. Os citocromos P-450 da família 3 A desempenham um
              importante papel no metabolismo de clonazepam. A meia-vida de
              eliminação de clonazepam é de 33 a 40 horas. O clonazepam está
              ligado em 82% a 88% às proteínas plasmáticas. Os dados disponíveis
              indicam que a farmacocinética de clonazepam é dose-independente.
              Em voluntários participantes de estudos com dose múltipla, as
              concentrações plasmáticas de clonazepam são proporcionais à dose.
              A farmacocinética de clonazepam após a administração repetida é
              previsível por estudos de dose única. Isto não representa
              evidência de que o clonazepam induz seu próprio metabolismo ou o
              metabolismo de outras drogas em humanos. Não foram realizados
              estudos controlados para examinar a influência do sexo e idade
              sobre a farmacocinética de clonazepam. Não foi estudado o efeito
              das doenças renais e hepáticas sobre a farmacocinética de
              clonazepam. Indicações Distúrbio Epiléptico: O clonazepam está
              indicado isoladamente ou como adjuvante no tratamento das crises
              epilépticas mioclônicas, acinéticas, ausências típicas (petit
              mal), ausências atípicas (síndrome de Lennox-Gastaut). Em crises
              epilépticas clônicas (grande mal), parciais simples, parciais
              complexas e tônico-clônico generalizadas secundárias. O clonazepam
              está indicado como tratamento de terceira linha. Transtornos de
              Ansiedade: • Como ansiolítico em geral; • Distúrbio do pânico com
              ou sem agorafobia; • Fobia social. Transtornos do Humor: •
              Transtorno afetivo bipolar: tratamento da mania; • Depressão
              maior: como coadjuvante de antidepressivos (depressão ansiosa e na
              fase inicial de tratamento). Emprego em síndromes psicóticas: •
              Tratamento da acatisia. Tratamento da síndrome das pernas
              inquietas Tratamento da vertigem e sintomas relacionados à
              perturbação do equilíbrio, como náuseas, vômitos, pré-síncopes ou
              síncopes, quedas, zumbidos, hipoacusia, hipersensibilidade a sons,
              hiperacusia, plenitude aural, distúrbio da atenção auditiva,
              diplacusia e outros. Tratamento da síndrome da boca ardente
              ContraIndicações O clonazepam não deve ser usado por pacientes com
              história de sensibilidade aos benzodiazepínicos, nem em pacientes
              com evidência significativa clínica ou bioquímica de doenças
              hepáticas. Pode ser usado em pacientes com glaucoma de ângulo
              aberto quando estão recebendo terapia apropriada, mas é
              contraindicado em glaucoma agudo de ângulo fechado. Precauções e
              Advertências Considerando que o clonazepam causa depressão do SNC,
              os pacientes que estão recebendo esta droga devem ser advertidos
              quanto a realizar ocupações perigosas que requerem agilidade
              mental, como operar máquinas ou dirigir veículos. Também devem ser
              advertidos sobre o uso concomitante de álcool ou outras drogas
              depressoras do SNC durante a terapia com clonazepam (vide
              “Interações Medicamentosas”). Em alguns estudos, até 30% dos
              pacientes apresentaram perda da atividade anticonvulsiva,
              frequentemente é dentro de três meses iniciais da administração.
              Em alguns casos, o ajuste de dose pode restabelecer a eficácia.
              Quando usado em pacientes nos quais coexistem vários tipos de
              distúrbios epiléticos, o clonazepam pode aumentar a incidência ou
              precipitar o aparecimento de crises tônico-clônicas generalizadas
              (grande mal). Isso pode requerer a adição de anticonvulsivos
              adequados ou um aumento de suas dosagens. O uso concomitante de
              ácido valpróico e clonazepam pode causar estado de mal de
              ausência. Recomenda-se realizar exames de sangue periódicos e
              testes da função hepática durante a terapia a longo prazo com
              clonazepam. A interrupção abrupta de clonazepam, particularmente
              naqueles pacientes recebendo terapia a longo prazo e em doses
              altas, pode precipitar o estado de mal epilético. Portanto, ao
              descontinuar o clonazepam, é essencial a descontinuação gradual.
              Enquanto o clonazepam está sendo descontinuado gradulamente, a
              substituição concomitantemente por outro anticonvulsivante deve
              ser indicado. Os metabólitos do clonazepam são excretados pelos
              rins; para evitar seu acúmulo excessivo, cuidados especiais devem
              ser tomados na administração da droga para pacientes com
              insuficiência renal. O clonazepam pode causar aumenta da
              salivação. Isto deve ser considerado antes da administração da
              medicação para pacientes que tem dificuldade para manipular as
              secreções. Por essa razão e pela possibilidade de depressão
              respiratória, o clonazepam deve ser usado com precaução em
              pacientes com doenças respiratórias crônicas. Uso em pacientes
              deprimidos: O clonazepam deve ser administrado com precauções para
              pacientes apresentando sinais ou sintomas de depressão, de maneira
              similar a outros benzodiazepínicos. Gravidez e lactação Em
              diversos estudos foi sugerido malformação congênita associado ao
              uso de drogas benzodiazepínicas (diazepam e clordiazepóxido). O
              clonazepam só deve ser administrado a mulheres grávidas se os
              benefícios potenciais superarem os riscos potenciais para o feto.
              Deve ser considerada a possibilidade de que uma mulher em idade
              fértil pode estar grávida por ocasião do início da terapia. Caso
              esta droga for usada durante a gravidez a paciente deve ser
              avisada do perigo potencial ao feto. As pacientes também devem ser
              avisadas que se engravidarem ou pretenderem engravidar durante a
              terapia devem consultar seu médico sobre a possibilidade de
              descontinuar a droga. Distúrbio epiléptico Relatórios recentes
              sugerem uma associação entre o uso de drogas anticonvulsivas por
              mulheres com epilepsia e a incidência elevada de deficiência
              congênita nas crianças nascidas dessas mulheres. Os dados são mais
              abrangentes em relação à difenil- hidantoína e ao fenobarbital,
              mas esses também são os anticonvulsivos prescritos mais comumente;
              relatórios menos sistemáticos ou históricos sugerem uma possível
              associação similar com o uso de todas as drogas anticonvulsivas
              conhecidas. Os relatórios que sugerem uma elevada incidência de
              deficiência congênitas em crianças nascidas de mulheres grávidas
              epiléticas tratadas com drogas anticonvulsivantes não podem ser
              considerados adequados para provar uma relação causa-efeito
              definitiva. Existem problemas metodológicos intrínsecos para a
              obtenção de dados adequados sobre teratogenicidade em humanos,
              também existe a possibilidade de outros fatores, p. ex. fatores
              genéticos ou a própria condição epilética, que podem ser mais
              importantes que a terapia com medicamentos para causar defeitos
              congênitos. A grande maioria das gestantes recebendo medicação
              anticonvulsivante geram crianças normais. È importante notar que
              as drogas anticonvulsivantes não devem ser descontinuadas em
              pacientes para as quais a droga é administrada para prevenir
              ataques epiléticos por causa da forte possibilidade de precipitar
              estados epiléticos, com hipóxia e risco de vida. Em casos
              individuais, onde a gravidade e frequência da disfunção epilética
              é tal que a interrupção do medicamento não represente serio risco
              para a paciente, a descontinuação da droga pode ser considerada
              antes e durante a gravidez, embora não se possa dizer com
              confiança que mesmo ataques epiléticos moderados não possam
              representar perigo para o desenvolvimento do embrião ou feto. Essa
              informações devem ser consideradas no tratamento ou aconselhamento
              de mulheres epiléticas com potencial para procriar. Recomendações
              Gerais O uso de clonazepam em mulheres em idade fértil deve ser
              considerado somente quando a situação clínica permita o risco.
              Lactação: Mães recebendo clonazepam não devem amamentar seus
              bebês. Não há experiência de estudos clínicos com clonazepam em
              pacientes com distúrbio do pânico com idade inferior a 18 anos.
              Ocorreram sintomas de descontinuação do tipo barbiturato após a
              descontinuação dos benzodiazepínicos (vide “Abuso e dependência da
              droga”). Interações Medicamentosas Farmacocinética: Em geral um
              número limitado de estudos, o clonazepam não alterou a
              farmacocinética de outras drogas. O fenobarbital, fenitoína e
              carbamazepina induzem o metabolismo de clonazepam. A propantelina
              pode diminuir levemente a absorção de clonazepam. A fluoxetina e a
              ranitidina não afetam a farmacocinética do clonazepam. Apesar de
              não terem sido realizados estudos clínicos com base no
              envolvimento da família do citocromo P450 3A no metabolismo de
              clonazepam, os inibidores dessa enzima, especialmente antifúngicos
              orais, devem ser usados cuidadosamente em pacientes recebendo
              clonazepam. Farmacodinâmica: A ação de depressão do SNC da classe
              de drogas dos benzodiazepínicos pode ser potencializada pelo
              álcool, narcóticos, barbitúricos, hipnóticos não barbitúricos,
              agentes ansiolíticos, as fenotiazinas, agentes antipsicóticos das
              classes do tioxanteno e butirofenona, inibidores da
              monoaminoxidase e antidepressivos tricíclicos e por outras drogas
              anticonvulsivas. Carcinogenicidade, mutagenicidade, infertilidade
              Não foram realizados estudos de carcinogenicidade com clonazepam,
              porém, um estudo com o medicamento oral administrado cronicamente
              por 18 meses em ratos não revelou nenhum tipo de tumor relacionado
              ao clonazepam. Adicionalmente, não há evidência de potencial
              mutagênico, conforme confirmado pelos três testes de reparo (rec.
              Pol, Uvr.) e testes de reversão (Ames) ambos in vitro ou em ratos
              (in vitro/in vivo). Em um estudo de fertilidade de duas gerações
              com clonazepam administrado oralmente para ratos em doses de 10 ou
              100 mg/kg/dia, foi constatada diminuição do número de gravidez e
              diminuição da sobrevivência de crias até desmamar. Esses efeitos
              não foram observados em nível de dose de 5 mg/kg/dia. Reações
              Adversas/ Colaterais Os efeitos colaterais que ocorreram com maior
              frequência com clonazepam são referentes à depressão do SNC.
              Outras reações, relacionadas por sistema são: Neurológico
              Sonolência, ataxia, movimentos anormais dos olhos, afonia,
              movimentos coreiformes, coma, diplopia, disartria,
              disdiadococinesia, aparência de "olho-vítreo", enxaqueca,
              hemiparesia, hipotonia, nistagmo, depressão respiratória, fala mal
              articulada, tremor, vertigem, perda do equilíbrio, coordenação
              anormal, sensação de cabeça leve, letargia, parestesia.
              Psiquiátrico Confusão, depressão, amnésia, alucinações, histeria,
              libido aumentada, insônia, psicose, tentativa de suicídio (os
              efeitos sobre o comportamento podem ocorrer com maior
              probabilidade em pacientes com história de distúrbios
              psiquiátricos), irritabilidade, concentração prejudicada,
              ansiedade, ataque de ansiedade, despersonalização, disforia,
              labilidade emocional, distúrbio de memória, libido diminuída,
              nervosismo, desinibição orgânica, ideias suicidas, lamentações.
              Respiratório Congestão pulmonar, rinorreia, respiração ofegante,
              hipersecreção nas vias respiratórias superiores, infecções das
              vias aéreas superiores, tosse, bronquite, dispneia, rinite,
              congestão nasal, faringite. Cardiovascular Palpitações, dor
              torácica. Dermatológico Perda de cabelo, hirsutismo, erupção
              cutânea, urticária, prurido, edema facial e do tornozelo.
              Gastrintestinal Anorexia, língua saburrosa, constipação, diarreia,
              boca seca, encoprese, gastrite, hepatomegalia, apetite aumentado,
              náusea, gengivas doloridas, desconforto ou dor abdominal,
              inflamação gastrintestinal, dor de dente. Genitourinária Disúria,
              enurese, noctúria, retenção urinária, incontinência urinária;
              cistite, infecção do trato urinário, dismenorreia.
              Musculoesquelético Fraqueza muscular, dores, lombalgia, fratura
              traumática, mialgia, nucalgia, deslocamentos e tensões.
              Hematopoiético Anemia, leucopenia, trombocitopenia, eosinofilia.
              Hepático Elevações temporárias das transaminases séricas e da
              fosfatase alcalina. Distúrbios auditivos e vestibulares Otite,
              vertigem. Diversos Desidratação, deterioração geral, cefaleia,
              febre, linfadenopatia, ganho ou perda de peso, reação alérgica,
              fadiga, infecção viral. A experiência no tratamento de crises
              epilépticas demonstrou a ocorrência de sonolência em
              aproximadamente 50% dos pacientes e ataxia em aproximadamente 30%.
              Em alguns casos, esses sintomas e sinais podem diminuir com o
              tempo; foram observados problemas comportamentais em
              aproximadamente 25% dos pacientes. Abuso e dependência da droga
              Ocorreram sintomas de descontinuação, com características
              similares àquelas notadas com barbitúricos e álcool (p. ex.,
              convulsões, psicoses, alucinações, distúrbio comportamental,
              tremor, câimbras musculares) após a descontinuação abrupta de
              clonazepam. Os sintomas de descontinuação mais graves normalmente
              foram limitados àqueles pacientes que receberam doses excessivas
              durante um período de tempo prolongado. Sintomas de descontinuação
              geralmente moderados (p. Ex., disforia e insônia) foram relatados
              após a descontinuação abrupta de benzodiazepínicos administrados
              continuamente em níveis terapêuticos durante vários meses.
              Consequentemente, após a terapia prolongada, a interrupção abrupta
              deve ser geralmente evitada e deve ser realizada diminuição
              gradual e programada (vide Posologia). Os indivíduos à adquirir
              dependência (como os viciados em drogas ou álcool) devem ser
              vigiados com cuidado quando recebem clonazepam ou outros agentes
              psicotrópicos, devido à pré-disposição desses pacientes em
              adquirir hábito e dependências. Posologia A posologia depende da
              indicação e deve ser individualizada de acordo com a resposta do
              paciente. Recomenda-se, de modo geral que o tratamento seja
              iniciado com doses mais baixas, que poderão ser aumentadas
              conforme necessário. As doses insuficientes não produzem o efeito
              desejado e por outro lado, doses muito elevadas ou excessivas
              acentuam os efeitos adversos de clonazepam, e por isso, a
              titulação apropriada da dose deve sempre ser realizada
              individualmente, de acordo com a indicação. Distúrbios epilépticos
              A dose inicial para adultos com crises epilépticas não deve
              exceder 1,5 mg/dia dividida em três doses. A dosagem pode ser
              aumentada com acréscimos de 0,5 a 1 mg a cada três dias até que as
              crises epilépticas estejam adequadamente controladas ou até que os
              efeitos colaterais tornem qualquer incremento adicional
              indesejável. A dosagem de manutenção deve ser individualizada para
              cada paciente dependendo da resposta. A dose diária máxima
              recomendada é de 20 mg. O uso de múltiplos anticonvulsivantes pode
              resultar no aumento dos efeitos adversos depressores. Isto deve
              ser considerado antes de adicionar clonazepam ao regime
              anticonvulsivo existente. Tratamento dos transtornos de ansiedade:
              • Distúrbio do pânico: A dose inicial para adultos com distúrbio
              do pânico é de 0,5 mg/dia, dividida em duas doses. A dose pode ser
              aumentada com acréscimos de 0,25 a 0,5 mg/dia a cada três dias até
              que o distúrbio do pânico esteja controlado ou até que os efeitos
              colaterais tornem qualquer acréscimo adicional indesejável. A dose
              de manutenção deve ser individualizada para cada paciente
              dependendo da resposta. A maioria dos pacientes pode esperar o
              equilíbrio desejado, entre a eficácia e os efeitos colaterais com
              doses de 1 a 2 mg/dia, mas alguns poderão necessitar de doses de
              até 4 mg/dia. A administração de uma dose ao se deitar, além de
              reduzir a inconveniência da sonolência pode ser desejável
              especialmente durante o início do tratamento. O tratamento deve
              ser descontinuado gradativamente, com a diminuição de 0,25 mg/dia
              a cada três dias até que a droga seja totalmente descontinuada. •
              Como ansiolítico em geral: 0,25 mg até 4,0 mg ao dia. Em geral, a
              dose recomendada deve variar entre 0,5 a 1,5 mg/dia (dividida em 3
              vezes ao dia). • Tratamento da fobia social: 0,25 mg/dia até 6,0
              mg/dia (2,0 mg 3 vezes ao dia). Em geral, a dose recomendada deve
              variar entre 1,0 e 2,5 mg/dia. Tratamento dos Transtornos do
              Humor: • Transtorno afetivo bipolar (tratamento da mania): 1,5 mg
              a 8 mg/dia. Em geral, a dose recomendada deve variar entre 2,0 e
              4,0 mg/dia. • Depressão maior (como adjuvante de antidepressivos):
              0,5 a 6,0 mg/dia. Em geral, a dose recomendada deve variar entre
              2,0 e 4,0 mg/dia. Para o emprego em síndromes psicóticas: •
              Tratamento da acatisia: 0,5 mg a 4,5 mg ao dia. Em geral, a dose
              recomendada deve variar entre 0,5 e 3,0 mg/dia. Tratamento da
              síndrome das pernas inquietas: 0,5 mg a 2,0 mg ao dia. Tratamento
              dos movimentos periódicos das pernas durante o sono: 0,5 mg a 2,0
              mg ao dia. Tratamento da vertigem e sintomas relacionados à
              perturbação do equilíbrio, como náuseas, vômitos, pré-síncopes ou
              síncopes, quedas, zumbidos, hipoacusia, hipersensibilidade a sons,
              hiperacusia, plenitude aural, distúrbio da atenção auditiva,
              diplacusia e outros: 0,5 mg a 1,0 mg ao dia (2 vezes ao dia). O
              aumento da dose não aumenta o efeito antivertiginoso e doses
              diárias superiores a 1,0 mg não são recomendáveis, pois podem
              exercer efeito contrário, ou seja piorar a vertigem. O aumento da
              dose pode ser útil no tratamento de hipersensibilidade a sons
              intensos, pressão nos ouvidos e zumbido. Tratamento da síndrome da
              boca ardente: 0,25 a 6,0 mg/dia ao dia. Em geral a dose a ser
              recomendada deve variar entre 1,0 e 2,0 mg/dia. Superdosagem Os
              sintomas de superdosagem de clonazepam, similares àqueles causados
              por outros depressores do SNC, incluem sonolência, confusão, coma
              e reflexos diminuídos. O tratamento inclui monitorização da
              respiração, frequência cardíaca e pressão arterial, medidas de
              suporte geral e lavagem gástrica imediata. Devem ser administrados
              fluidos intravenosos e deve ser mantida a via aérea patente. A
              hipotensão pode ser combatida pelo uso de levarterenol ou
              metaraminol. Não é conhecido o valor da diálise. O flumazenil, um
              antagonista específico de receptor benzodiazepínico, é indicado
              para a reversão completa ou parcial dos efeitos sedativos dos
              benzodiazepínicos e pode ser usado em situações conhecidas ou
              suspeitas de superdosagem com um benzodiazepínico. Antes da
              administração de flumazenil, devem ser instituídas medidas
              necessárias para assegurar a respiração e acesso intravenoso. O
              flumazenil é considerado como um suplemento e não como um
              substituto para o tratamento formal da superdosagem por
              benzodiazepínicos. Os pacientes tratados com flumazenil devem ser
              monitorados para sedação, depressão respiratória e outros efeitos
              benzodiazepínicos residuais por um período adequado após
              tratamento. Os médicos devem estar atentos ao risco de crise
              epiléptica em associação ao tratamento com flumazenil,
              particularmente em usuários de benzodiazepínicos de longo prazo e
              na superdosagem por antidepressivo cíclico. A bula completa da
              embalagem de flumazenil, incluindo CONTRAINDICAÇÕES, ADVERTÊNCIAS
              e PRECAUÇÕES, deve ser consultada antes de seu uso. Pacientes
              Idosos O uso em pacientes idosos não requer adaptação da
              posologia, recomendando-se as mesmas doses do adulto, a menos que
              outras doenças estejam presentes concomitantemente, quando as
              precauções e advertências gerais do uso do clonazepam devem ser
              respeitadas. VENDA SOB PRESCRIÇÃO MÉDICA. O ABUSO DESTE
              MEDICAMENTO PODE CAUSAR DEPÊNDENCIA
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
            fontSize: 22,
            color: "green",
            marginHorizontal: 10,
            marginBottom: 20,
            alignSelf: "flex-start",
          }}
        >
          Medicamento : Dipirona
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
          fontSize: 22,
          color: "green",
          marginHorizontal: 10,
          marginBottom: 20,
          alignSelf: "flex-start",
        }}
      >
        Medicamento : Enalapril
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
        fontSize: 22,
        color: "green",
        marginHorizontal: 10,
        marginBottom: 20,
        alignSelf: "flex-start",
      }}
    >
      Medicamento : Hidroclorotiazida
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
