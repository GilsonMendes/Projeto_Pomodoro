import React, { Component } from "react";
import { View, Text } from "react-native";
import BtnPrincipal from "./btnPrincipal";
import Styles from "./styles";
import Sound from "react-native-sound";


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
        this.tocar = this.tocar.bind(this)

        listening = null
        som = ''

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
            this.tocar()
            listening = setInterval(() => {
                this.setState({ timerSeg: this.state.timerSeg - 1 });
                num = parseInt(this.state.timerSeg.toFixed(0))
                if (num === 0) {
                    this.setState({ timerMin: this.state.timerMin - 1 })
                    this.state.timerSeg = 60;
                }
                num2 = parseInt(this.state.timerMin.toFixed(0));

                if (num2 < 0) {

                    this.descansar()
                    this.state.timerMin = 4
                    this.state.timerSeg = 59

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
        this.tocar()
        this.state.timerMin = 5
        this.state.timerSeg = 0
        if (listening != null) {
            clearInterval(listening)
            listening = null
            this.setState({ botao: 'START' })
        } else {

            this.setState({ botao: 'STOP' })
        }

    }

    tocar() {
        Sound.setCategory('Playback');
        Sound.setCategory('./sounds');
        var sound = new Sound('bell.mp3', Sound.MAIN_BUNDLE, (error) => {
            if (error) {
                console.warn('Falha ao carregar Audio!');
                return;
            }
            sound.play((sucess) => {

            })
        })


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