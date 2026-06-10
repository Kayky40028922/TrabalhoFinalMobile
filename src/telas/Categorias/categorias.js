import { Image, Text, View } from "react-native";
import { styleCategorias } from "../style/styleCategorias";
import Navegacao from "../../components/Navegacao/navegacao";

export default function Categorias({ navigation }) {
  return (
    <View style={styleCategorias.container}>
      <View style={styleCategorias.grid}>

        <View style={styleCategorias.card}>
          <Text style={styleCategorias.titulo}>Herói</Text>
          <Image
            source={require("../../img/mha.png")}
            style={styleCategorias.imagem}
            resizeMode="cover"
          />
        </View>

        <View style={styleCategorias.card}>
          <Text style={styleCategorias.titulo}>Romance</Text>
          <Image
            source={require("../../img/dois.png")}
            style={styleCategorias.imagem}
            resizeMode="cover"
          />
        </View>

        <View style={styleCategorias.card}>
          <Text style={styleCategorias.titulo}>Comédia</Text>
          <Image
            source={require("../../img/dy.png")}
            style={styleCategorias.imagem}
            resizeMode="cover"
          />
        </View>

        <View style={styleCategorias.card}>
          <Text style={styleCategorias.titulo}>Ação</Text>
          <Image
            source={require("../../img/aot.png")}
            style={styleCategorias.imagem}
            resizeMode="cover"
          />
        </View>

        <View style={styleCategorias.card}>
          <Text style={styleCategorias.titulo}>Slice of Life</Text>
          <Image
            source={require("../../img/csm.png")}
            style={styleCategorias.imagem}
            resizeMode="cover"
          />
        </View>

        <View style={styleCategorias.card}>
          <Text style={styleCategorias.titulo}>Aventura</Text>
          <Image
            source={require("../../img/op.png")}
            style={styleCategorias.imagem}
            resizeMode="cover"
          />
        </View>

      </View>

      <Navegacao />
    </View>
  );
}