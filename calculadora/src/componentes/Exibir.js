import React from "react";
import { StyleSheet, Text,View } from "react-native";

const estilos = StyleSheet.create({
    Exibição:{
        flex:1,
        padding:20,
        justifyContent:'center',
        backgroundColor:'rgba(0,0,0,0.6)',
        alignItems:'flex-end'
    },
    ValorExibir:{
        fontSize:60,
        color:'#fff',

    }
})

export default props =>
<View style={estilos.Exibição}>
    <Text style={estilos.ValorExibir} 
    numberOfLines={1}>{props.value}</Text>
</View>