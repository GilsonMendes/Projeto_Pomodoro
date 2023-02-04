import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import React from "react";


export default props => {
    return (

        <View style = {styles.line}>
            <View style={styles.btnArea} >
                <TouchableOpacity style={
                    styles.btn = {
                        marginTop: props.marginTop,
                        backgroundColor: '#FFF',
                        borderRadius: 10,
                        width: 105,
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 105,
                        height: 40,
                    }} onPress={props.click}>
                    <Text style={styles.btnTxt}>{props.txtBtn}</Text>
                </TouchableOpacity>
            </View>
        </View>

    )
}