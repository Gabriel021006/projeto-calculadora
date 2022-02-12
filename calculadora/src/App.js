import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Component } from "react/cjs/react.production.min";
import Botao from "./componentes/Botao";
import Exibir from "./componentes/Exibir";


const estadoInicial = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0
}

export default class App extends Component {

    state ={...estadoInicial}

    digitar = n => {
        if(n === '.' && this.state.displayValue.includes('.')){
            return
        }
        const clearDisplay = this.state.displayValue === '0' 
        || this.state.clearDisplay
        const currentValue = clearDisplay ? '' : this.state.displayValue
        const displayValue = currentValue + n
        this.setState({displayValue, clearDisplay: false })

        if(n !== '.') {
            const newValue = parseFloat(displayValue)
            const values = [...this.state.values]
            values[this.state.current] = newValue
            this.setState({values})
        }
    }
    clearDisplay = () =>{
        this.setState({...estadoInicial})
    }

    setarOperacao = operation => {
        if(this.state.current === 0){
            this.setState({operation, current:1, clearDisplay:true})
        }else{
            const equals = operation === '='
            const values =[...this.state.values]
            try{
                values[0] = 
                eval(`${values[0]} ${this.state.operation} ${values[1]}`)
            }catch(e){
                values[0] = this.state.values[0]
            }

            values[1] = 0
            this.setState({
                displayValue:values[0],
                operation: equals ? null : operation,
                current: equals ? 0 : 1,
                clearDisplay: !equals,
                values,
            })
        }
    }

    render() {
        return(
            <View style={estilos.container}>
                <Exibir value={this.state.displayValue} />
                <View style={estilos.botoes}>
                    <Botao label='AC' triple onClick={this.clearDisplay} />
                    <Botao label='/' operation onClick={()=> this.setarOperacao} />
                    <Botao label='7' onClick={ this.digitar} />
                    <Botao label='8' onClick= {this.digitar} />
                    <Botao label='9' onClick= {this.digitar} />
                    <Botao label='*' operation onClick={ this.setarOperacao}/>
                    <Botao label='4' onClick= {this.digitar}/>
                    <Botao label='5' onClick= {this.digitar}/>
                    <Botao label='6' onClick= {this.digitar}/>
                    <Botao label='-' operation onClick={()=> this.setarOperacao}/>
                    <Botao label='1' onClick= {this.digitar}/>
                    <Botao label='2' onClick= {this.digitar}/>
                    <Botao label='3' onClick= {this.digitar}/>
                    <Botao label='+' operation onClick={()=> this.setarOperacao}/>
                    <Botao label='0' double onClick={this.digitar}/>
                    <Botao label='.' onClick={this.digitar}/>
                    <Botao label='=' operation onClick={ this.setarOperacao}/> 
                </View>
            </View>
        )
    }
}

const estilos = StyleSheet.create({
    container:{
        flex:1,
    },
    botoes:{
        flexDirection: 'row',
        flexWrap:'wrap'
    }
})