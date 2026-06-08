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
                    "includes[]": "cover_art"
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



<ScrollView style={styleHome.container}>
    <FlatList
        data={mangas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
            <View>
                <Text>titulo</Text>
                <Text>
                    {item.attributes.title.en}
                </Text>
            </View>
        )}
    />
</ScrollView>
    );
}