
import React, { Component } from "react";
import { Image, Text, View } from "react-native";
import Styles from "../components/styles"
import Pomodoro from "../components";


class TelaPrincipal extends Component {
    render() {
        return (

            <View style={Styles.container}>
                <Image
                    source={require('../assets/cronometro.png')}
                />
                <Pomodoro/>
            </View>

        )
    }
}

export default TelaPrincipal;