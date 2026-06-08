import { FlatList, Image, ScrollView, Text, View } from "react-native";
import { styleHome } from "../style/styleHome";
import { useEffect, useState } from "react";
import api from "../../services/api";

export default function Home({ navigation }){

    const [mangas, setMangas] = useState([]);

    const carregarMangas = async () => {

        try {

            const response = await api.get("/manga", {
                params: {
                    limit: 100,
                    "includes[]": ["cover_art",
                    "author"
                ]
                }       
            });

            setMangas(response.data.data);

        } catch (error) {
            console.log(error);
        }

    };

    useEffect(() => {carregarMangas();}, []);

    return(
        // <ScrollView style={styleHome.container}>
        //     <FlatList
        //         data={mangas}
        //         renderItem={({ item }) => {

        //         const cover = item.relationships.find(
        //             rel => rel.type === "cover_art"
        //         );

        //         const imageUrl = cover
        //             ? `https://uploads.mangadex.org/covers/${item.id}/${cover.attributes.fileName}`
        //             : null;

        //         return (
        //             <View>
        //                 <Image
        //                     source={{ uri: imageUrl }}
        //                     style={{
        //                         width: 120,
        //                         height: 180
        //                     }}
        //                 />

        //             <Text>
        //                 {Object.values(item.attributes.title)[0]}
        //             </Text>
        //         </View>
        //             );
        //         }}
        //     />
        // </ScrollView>


<View style={styleHome.container}>
    <FlatList
        style={styleHome.container}
        data={mangas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {

    const autor = item.relationships?.find(rel => rel.type === "author");

    return (
        <View style={{
            margin: 10,
            padding: 10,
            borderWidth: 1
        }}>

            <Image
                source={{uri: `https://uploads.mangadex.org/covers/${item.id}/${item.relationships?.find(rel => rel.type === "cover_art")?.attributes?.fileName}`}}
                    style={{
                        width: 120,
                        height: 180
                    }}
            />

            <Text>
                Título: {item.attributes.title.en || Object.values(item.attributes.title)[0]}
            </Text>
            <Text>
                Sinopse: {item.attributes.description?.en || Object.values(item.attributes.description || {})[0]}
            </Text>
            <Text>
                Ano: {item.attributes.year}
            </Text>
            <Text>
                Autor: {autor?.attributes?.name || "Desconhecido"}
            </Text>
            <Text>
                Gêneros: {item.attributes.tags?.map(tag => tag.attributes.name.en).join(", ")}</Text>
            </View>
    );
    }}
    />
</View>
    );
}