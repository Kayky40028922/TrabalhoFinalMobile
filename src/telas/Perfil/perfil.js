import { View, Text, Image } from "react-native";
import { stylePerfil } from "../style/stylePerfil";
import Navegacao from "../../components/Navegacao/navegacao";
import { LogOut } from "lucide-react-native";

export default function Perfil({ navigation }) {
  return (
    <View style={stylePerfil.container}>
      <View style={stylePerfil.tela}>
        <View style={stylePerfil.usuario}>
          <View style={stylePerfil.foto}></View>

          <View style={stylePerfil.info}>
            <Text style={stylePerfil.nome}>
              Nome imaginário
            </Text>

            <Text style={stylePerfil.email}>
              E-mail imaginário
            </Text>
          </View>
            <LogOut color={'#ffff'}/>
        </View>

        <View style={stylePerfil.opcao}>
          <Text style={stylePerfil.tituloOpcao}>
            Editar perfil
          </Text>

          <Text style={stylePerfil.subtituloOpcao}>
            Deixe sua conta do seu jeito
          </Text>
        </View>

        <View style={stylePerfil.opcao}>
          <Text style={stylePerfil.tituloOpcao}>
            Configurações
          </Text>

          <Text style={stylePerfil.subtituloOpcao}>
            Ajustes do Tomato
          </Text>
        </View>

        <View style={stylePerfil.opcao}>
          <Text style={stylePerfil.tituloOpcao}>
            Entre no nosso Discord!
          </Text>

          <Text style={stylePerfil.subtituloOpcao}>
            Fique por dentro das novidades
          </Text>
        </View>

        <View style={stylePerfil.cardManga}>
          <Image
            source={require("../../img/sbd.png")}
            style={stylePerfil.capa}
          />

          <View style={stylePerfil.textoManga}>
            <Text style={stylePerfil.top10}>
              Top 10: novo anime para você
            </Text>

            <Text style={stylePerfil.descricao}>
              Descubra Anjos perto de mim e conheça uma história divertida e emocionante.
            </Text>
          </View>
        </View>
        {/* <View style={styleCategorias.espaco}></View> */}
      </View>
      <Navegacao navigation={navigation} />
    </View>
  );
}