import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

export default props => {
    return(

        <View style={styles.btnArea}>
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnTxt}>Start</Text>
            </TouchableOpacity>
        </View>
        
    )
}