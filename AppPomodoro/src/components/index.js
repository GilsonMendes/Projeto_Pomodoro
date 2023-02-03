import React, { Component } from "react";
import { View, Text } from "react-native";
import BtnPrincipal from "./btnPrincipal";
import Styles from "./styles";

class Pomodoro extends Component {

    constructor(props) {
        super(props);
        this.state = {
            timerSeg: 0,
            timerMin: 25,
            botao: 'Start'
        }

        this.vai = this.vai.bind(this);

        listening = null

    }

    vai() {
        if (this.state.timerSeg === 0 && this.state.timerMin === 25) {
            this.state.timerSeg = 59;
            this.state.timerMin = 24;
        }
        if (listening != null) {
            clearInterval(listening)
            listening = null
            this.setState({ botao: 'Start' })
        } else {
            listening = setInterval(() => {
                this.setState({ timerSeg: this.state.timerSeg - 1 });
                num = parseInt(this.state.timerSeg.toFixed())
                if (num === 0) {
                    this.setState({ timerMin: this.state.timerMin - 1 })
                    this.state.timerSeg = 60;

                }
            }, 1000)
            this.setState({ botao: 'Stop' })
        }

    }

    limpar(){
        if(listening != null){
            clearInterval(listening)
            listening = null;
            this.state.timerSeg = 59;
            this.state.timerMin = 24;
        }
    }

    render() {
        return (

            <View>
                <Text style={Styles.txtTimer}>
                    {this.state.timerMin.toString().padStart(2, '0')}
                    :
                    {this.state.timerSeg.toString().padStart(2, '0')}
                </Text>
                <BtnPrincipal click={this.vai} txtBtn={this.state.botao} />
                <BtnPrincipal click={this.limpar} txtBtn='Restart'/>
            </View>
        )
    }
}

export default Pomodoro;