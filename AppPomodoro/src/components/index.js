import React, { Component } from "react";
import { View, Text } from "react-native";
import BtnPrincipal from "./btnPrincipal";
import Styles from "./styles";

class Pomodoro extends Component {

    constructor(props) {
        super(props);
        this.state = {
            timerSeg: 59,
            timerMin: 0
        }

        this.vai = this.vai.bind(this);

    }

    vai() {
        setInterval(() => {
            this.setState({ timerSeg: this.state.timerSeg - 1 })
        }, 1000)
    }

    render() {
        return (

            <View>
                <Text style={Styles.txtTimer}>
                    {this.state.timerMin.toString().padStart(2, '0')}
                    :
                    {this.state.timerSeg.toString().padStart(2, '0')}
                </Text>
                <BtnPrincipal click ={this.vai}/>
            </View>
        )
    }
}

export default Pomodoro;