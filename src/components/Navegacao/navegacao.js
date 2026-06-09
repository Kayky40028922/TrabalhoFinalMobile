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
                    <BookOpenText 
                        color={'#ffff'}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <ChartColumnStacked 
                        color={'#ffff'}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Menu 
                        color={'#ffff'}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
}