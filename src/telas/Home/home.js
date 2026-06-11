import { FlatList, Image, ScrollView, Text, View } from "react-native";
import { styleHome } from "../style/styleHome";
import { useEffect, useState } from "react";
import api from "../../services/api";
// import Cabecalho from "../../components/Cabecalho/cabecalho";
import Navegacao from "../../components/Navegacao/navegacao";

export default function Home({ navigation }){

    const [mangas, setMangas] = useState([]);

    const carregarMangas = async () => {

        try {

            const response = await api.get("/manga", {
                params: {
                    limit: 100,
                    "includes[]": ["cover_art",
                    "author"]
                }       
            });

            setMangas(response.data.data);

        } catch (error) {
            console.log(error);
        }

    };

    useEffect(() => {carregarMangas();}, []);

    return(
        <View style={styleHome.container}>
            {/* <Cabecalho /> */}
            <FlatList
                style={styleHome.container}
                data={mangas}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {

            const autor = item.relationships?.find(rel => rel.type === "author");

            return (
                <View style={styleHome.card}>

                    <Image
                        source={{uri: `https://uploads.mangadex.org/covers/${item.id}/${item.relationships?.find(rel => rel.type === "cover_art")?.attributes?.fileName}`}}
                            style={styleHome.imagem}
                            resizeMode="contain"
                    />

                    <Text style={styleHome.titulo}>
                        Título: {item.attributes.title.en || Object.values(item.attributes.title)[0]}
                    </Text>
                    {/* <Text style={styleHome.texto}>
                        Sinopse: {item.attributes.description?.en || Object.values(item.attributes.description || {})[0]}
                    </Text> */}
                    <Text style={styleHome.texto}>
                        Ano: {item.attributes.year}
                    </Text>
                    <Text style={styleHome.texto}>
                        Autor: {autor?.attributes?.name || "Desconhecido"}
                    </Text>
                    <Text style={styleHome.texto}>
                        Gêneros: {item.attributes.tags?.map(tag => tag.attributes.name.en).join(", ")}</Text>
                    </View>
            );
            }}
            />
            <Navegacao navigation={navigation} />
        </View>
    );
}