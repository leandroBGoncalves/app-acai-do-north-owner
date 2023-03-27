import { 
    StyleSheet, 
    Text, 
    TouchableOpacity, 
    View 
} from "react-native"

let customStyles = {
    backgroundColor: null,
    borderColor: null,
    borderWidth: null,
    colorText: null
}

export function ButtonTypeLogin({
    text,
    customBackGround,
    customBorderColor,
    customBorderWidth,
    customColorText,
    iconOrImage,
    onpress
}) {

    customStyles = {
        backgroundColor: customBackGround ? customBackGround : null,
        borderColor: customBorderColor ? customBorderColor : null,
        borderWidth: customBorderWidth ? customBorderWidth : null,
        colorText: customColorText ? customColorText : null,
        marginTextLeft: iconOrImage ? 15 : null
    }

    const stylo = styles(customStyles)

    return (
        <View style={stylo.contentBtnLogin}>
            <TouchableOpacity
            style={stylo.btnLogin}
            onPress={onpress}
            >
                {iconOrImage && iconOrImage}
                <Text style={stylo.textBtnLogin}>{text}</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = (customStyles) => StyleSheet.create({
    contentBtnLogin: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
    },
    btnLogin: {
        width: '70%',
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: customStyles.backgroundColor ? customStyles.backgroundColor : '#4e2160',
        borderColor: customStyles.borderColor ? customStyles.borderColor : '#4e2160',
        borderWidth: customStyles.borderWidth ? customStyles.borderWidth : 1,
        borderRadius: 40
    },
    textBtnLogin: {
        fontFamily: 'Inter-Bold',
        color: customStyles.colorText ? customStyles.colorText : '#FFFFFF',
        marginLeft: customStyles.marginTextLeft
    },
})