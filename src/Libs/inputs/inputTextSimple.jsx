import { useState } from "react";
import { 
    StyleSheet, 
    Text, 
    TextInput, 
    TouchableOpacity, 
    View 
} from "react-native";

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export function InputTextSimple({
    label,
    secureText,
    changeText,
    setChangeText
}) {
    const [visiblePassword, setVisiblePassword] = useState(false);
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.contentInput}>
                <TextInput 
                style={[styles.input, secureText && {width: '89%'}]}
                secureTextEntry={!visiblePassword ? secureText : false}
                value={changeText}
                onChangeText={setChangeText}
                />
                {secureText && 
                <TouchableOpacity>
                    <MaterialCommunityIcons 
                    onPress={() => setVisiblePassword(!visiblePassword)}
                    name={!visiblePassword ? 'eye-off' : 'eye'}
                    size={30} 
                    color="#4e2160"
                    />
                </TouchableOpacity>
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginTop: 10
    },
    contentInput: {
        backgroundColor: '#fff6f7',
        borderColor: '#4e2160',
        borderWidth: 1,
        borderRadius: 5,
        flexDirection: 'row',
    },
    label: {
        fontFamily: 'Inter-Bold',
        color: '#4e2160',
        fontSize: 20
    },
    input: {
        width: '100%',
        height: 35,
        paddingLeft: 5,
        paddingRight: 5,
    }
})