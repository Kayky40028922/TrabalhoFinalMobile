import { TouchableOpacity, View } from "react-native";
import { styleNavegacao } from "../style/styleNavegacao";
import { BookOpenText, ChartColumnStacked, House, Menu } from "lucide-react-native";

export default function Navegacao({ navigation }){
    return(
        <View style={styleNavegacao.container}>
            <View style={styleNavegacao.btns}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <House 
                        color={'#ffff'}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <BookOpenText 
                        color={'#ffff'}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Categorias')}>
                    <ChartColumnStacked 
                        color={'#ffff'}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Perfil')}>
                    <Menu 
                        color={'#ffff'}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
}