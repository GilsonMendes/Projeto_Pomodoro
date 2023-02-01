
import React, { Component } from "react";
import { Image, Text, View } from "react-native";
import Styles from "../components/styles"
import BtnPrincipal from "../components/btnPrincipal";


class TelaPrincipal extends Component{
    render(){
        return(
            
                <View style ={Styles.container}>
                    <Image
                    source={require('../assets/cronometro.png')}
                    />
                    <Text style={Styles.txtTimer}>00:00</Text>
                    <BtnPrincipal/>
                </View>
           
        )
    }
}

export default TelaPrincipal;