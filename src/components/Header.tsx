import { StyleSheet, View } from "react-native";
import { Text, Headline, Colors } from "react-native-paper";
import React from "react";


export const Header = (props: any) => {
  return (
    <View style={styles.container}>
      <Headline style={styles.header}>
        {props.title}
      </Headline>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  header: {
    // fontSize: 15,
    // lineHeight: 21,
    // textAlign: "center",
    // marginBottom: 12,
    backgroundColor:Colors.blue500,
    minHeight:40,
    borderColor:"black",
    textAlign:'center',
    borderBottomWidth: 3
  },
});