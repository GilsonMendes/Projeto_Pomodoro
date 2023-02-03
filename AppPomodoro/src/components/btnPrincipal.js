import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import React from "react";


export default props => {
    return(

        <View style={styles.btnArea}>
            <TouchableOpacity style={styles.btn} onPress={props.click}>
                <Text style={styles.btnTxt}>{props.txtBtn}</Text>
            </TouchableOpacity>
        </View>
        
    )
}