import React from "react";
import { StyleSheet, Text, Dimensions, TouchableHighlight } from "react-native";

const estilos = StyleSheet.create({
    butao:{
        fontSize: 40,
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4,
        padding:20,
        backgroundColor:'#f0f0f0',
        textAlign:'center',
        borderWidth:1,
        borderColor:'#888'
    },
    botaoOperar:{
        color:'#fff',
        backgroundColor:'#fa8231',
    },
    duploBotao:{
        width:(Dimensions.get('window').width / 4 * 2)
    },
    botaoTriplo:{
        width:(Dimensions.get('window').width / 4 * 3)
    },
})

export default props =>{
    const estiloBotao = [estilos.butao]
    if (props.double) estiloBotao.push(estilos.duploBotao)
    if (props.triple) estiloBotao.push(estilos.botaoTriplo)
    if (props.operation) estiloBotao.push(estilos.botaoOperar)
    return(
        <TouchableHighlight onPress={()=>props.onClick(props.label)}>
            <Text style={estiloBotao}>{props.label}</Text>
        </TouchableHighlight>
    )
}