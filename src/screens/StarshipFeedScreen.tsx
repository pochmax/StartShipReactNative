import React from "react";
import { SafeAreaView, StyleSheet, Text, StatusBar, View, FlatList, Image } from "react-native";
import { Card, Paragraph, Title, Colors } from 'react-native-paper';

import { default as data } from "../../api/data.json";
import { StarShipCard } from "../components/StarShipCard";
import { useStarships } from "../hook/UseStarships";




const renderItem = ({item}) => {
    return (
        <StarShipCard item={item}/>
    )
};

export const StarshipFeedScreen = () => {
    const { isLoading, isError, data } = useStarships();

    if(isLoading){
      return <Text>Les données chargent</Text>
    }
  
    if(isError){
      return <Text>Erreur sur les données</Text>
    }
    
    const datas = data.results;

    return (
        <SafeAreaView style={styles.safeContainer}>
            <View style={styles.container}>
                {/* <Text>{JSON.stringify(data.results)}</Text> */}
                <FlatList
                    data={datas}
                    renderItem={renderItem}
                    keyExtractor={item => item.name}

                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor:Colors.grey100,
  },
  container: {
    paddingHorizontal: 20,
    marginTop: 20,

  },
  images: {
    width:20
    },

    card:{
        margin:20,
        borderRadius:8,
        borderWidth:3,
        borderColor:'black',
        padding:5,
        elevation:5
    },

    name:{
        fontSize:30,

    },

    model:{
        opacity:0.3
    },

    manufacturer:{
        marginTop:20
    },


    credit:{
        marginTop:10,
        marginBottom:30,
        fontSize:25,
        fontWeight:'bold'
    },

    link:{
        marginBottom:10
    }
});