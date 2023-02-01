
import React, { Component } from "react";
import { Text, View } from "react-native";
import Styles from "../components/styles"
import BtnPrincipal from "../components/btnPrincipal";


class TelaPrincipal extends Component{
    render(){
        return(
            
                <View style ={Styles.container}>
                    <Text>Olá mundo !</Text>
                    <BtnPrincipal/>
                </View>
           
        )
    }
}

export default TelaPrincipal;