import { TouchableOpacity, View } from "react-native";
import { styleNavegacao } from "../style/styleNavegacao";
import { BookOpenText, ChartColumnStacked, House, Menu } from "lucide-react-native";

export default function Navegacao(){
    return(
        <View style={styleNavegacao.container}>
            <View style={styleNavegacao.btns}>
                <TouchableOpacity>
                    <House 
                        color={'#ffff'}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <BookOpenText />
                </TouchableOpacity>
                <TouchableOpacity>
                    <ChartColumnStacked />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Menu />
                </TouchableOpacity>
            </View>
        </View>
    );
}