import React, { Component } from "react";
import { View, Text } from "react-native";
import BtnPrincipal from "./btnPrincipal";
import styles from "./styles";
import Styles from "./styles";

class Pomodoro extends Component {

    constructor(props) {
        super(props);
        this.state = {
            timerSeg: 0,
            timerMin: 25,
            botao: 'START'
        }

        this.vai = this.vai.bind(this);
        this.limpar = this.limpar.bind(this);
        this.descansar = this.descansar.bind(this);

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
            this.setState({ botao: 'START' })
        } else {
            listening = setInterval(() => {
                this.setState({ timerSeg: this.state.timerSeg - 1 });
                num = parseInt(this.state.timerSeg.toFixed(0))
                if (num === 0) {
                    this.setState({ timerMin: this.state.timerMin - 1 })
                    this.state.timerSeg = 60;
                }
                num2 = parseInt(this.state.timerMin.toFixed());
                if (num === 0 && num2 === 0) {

                }
            }, 1000)
            this.setState({ botao: 'STOP' })
        }

    }

    limpar() {

        if (listening != null) {
            clearInterval(listening)
            listening = null;
            this.setState({ botao: 'START' })
        }
        this.setState({ timerMin: this.state.timerMin = 25 });
        this.setState({ timerSeg: this.state.timerSeg = 0 });

    }

    descansar() {
        this.state.timerMin = 4
        this.state.timerSeg = 59
        if (listening != null) {
            clearInterval(listening)
            listening = null
            this.setState({ botao: 'START' })
        } else {
            listening = setInterval(() => {
                this.setState({ timerSeg: this.state.timerSeg - 1 });
                num = parseInt(this.state.timerSeg.toFixed())
                if (num === 0) {
                    this.setState({ timerMin: this.state.timerMin - 1 })
                    this.state.timerSeg = 60;
                }
            }, 1000)
            this.setState({ botao: 'STOP' })
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

                <BtnPrincipal click={this.vai} txtBtn={this.state.botao} marginTop={100} />
                <BtnPrincipal click={this.limpar} txtBtn='RESET' marginTop={20} />


            </View>


        )
    }
}

export default Pomodoro;