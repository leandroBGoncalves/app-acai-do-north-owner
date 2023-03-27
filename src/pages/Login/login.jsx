import React, { useState } from "react";
import { 
    Image, 
    ImageBackground, 
    StyleSheet, 
    Text, 
    TouchableOpacity, 
    View 
} from "react-native";

import backGroudImg from '../../../assets/backGround.png';
import iconLogo from '../../../assets/logoRoxaFruta.png';
import { ButtonTypeLogin } from "../../Libs/Buttons/buttonsRadiusTypeLogin";
import { InputTextSimple } from "../../Libs/inputs/inputTextSimple";

export function LoginPage({navigation}) {
    const [changeLogin, setChangeLogin] = useState('');
    const [changePassword, setChangePassword] = useState('');

    function redirectLogin() {
        console.log('cheguei na function login')
        if (changePassword === '123') {
            navigation.navigate('Home')
        }
    }
    return (
        <View style={styles.container}>
            <ImageBackground source={backGroudImg} style={styles.imageBackGround}>
                <View style={styles.content}>
                    <View style={styles.contentLogo}>
                        <Image style={styles.imageLogo} source={iconLogo}/>
                    </View>
                    <View style={styles.boxCredentials}>
                        <View style={styles.boxInputs}>
                            <InputTextSimple 
                            label='Login'
                            changeText={changeLogin}
                            setChangeText={setChangeLogin}
                            />
                            <InputTextSimple 
                            label='PassWord'
                            secureText={true}
                            changeText={changePassword}
                            setChangeText={setChangePassword}
                            />
                            <TouchableOpacity 
                            style={styles.BtnForgotPassword}
                            >
                                <Text style={styles.textBtnForgotPassword}>
                                    Forgot Password?
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <ButtonTypeLogin 
                    text={'Login'}
                    onpress={() => redirectLogin()}
                    />
                    <View style={styles.contentOr}>
                        <View style={styles.lineOr}></View>
                        <Text style={styles.textOr}>Or</Text>
                        <View style={styles.lineOr}></View>
                    </View>
                    <ButtonTypeLogin 
                    text='Login with Google'
                    customBackGround={'transparent'}
                    customBorderColor={'#4e2160'}
                    customColorText={'#4e2160'}
                    iconOrImage={<Image source={require('../../../assets/Google.png')}/>}
                    />
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
      },
    content: {
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    imageBackGround: {
      resizeMode: 'cover',
      justifyContent: 'center',
    },
    imageLogo: {
        width: '60%',
        height: 200
    },
    contentLogo: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        paddingTop: 100
    },
    boxCredentials: {
        display: 'flex',
        alignItems: 'center',
    },
    boxInputs: {
        width: '70%'
    },
    BtnForgotPassword: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: 10
    },
    textBtnForgotPassword: {
        fontFamily: 'Inter-Medium',
        color: '#4e2160'
    },
    contentOr: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 30,
        marginBottom: 30,
        paddingLeft: 20,
        paddingRight: 20
    },
    lineOr: {
        width: '45%',
        height: 2,
        backgroundColor: '#4e2160'
    },
    textOr: {
        fontFamily: 'Inter-Bold',
        fontSize: 15
    }
})