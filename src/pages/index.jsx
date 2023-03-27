import { ImageBackground, ScrollView, StyleSheet, Text, View } from "react-native";

import { Header } from "../components/Header/Header";
import backGroudImg from '../../assets/backGround.png';
import { Card } from "../components/Cards/Card";
import { CardChart } from "../components/Cards/CardChart";
import { CardQuickAcces } from "../components/Cards/quickAccess";

export function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <ImageBackground source={backGroudImg} style={styles.imageBackGround}>
            <Header 
            navigation={navigation}
            />
                <ScrollView style={styles.containerCardsHome}>
                    <Card />
                    <CardChart 
                    title='Mais vendidos do mês'
                    />
                    <CardChart 
                    title='Vendas por periodo'
                    amount
                    isHeight
                    />
                </ScrollView>
                <ScrollView 
                style={styles.QuickAccesContainer}
                horizontal={true}
                >
                    <CardQuickAcces 
                    textCard={'Cadastrar Produto'}
                    iconCard={'archive-plus-outline'}
                    />
                    <CardQuickAcces 
                    textCard={'Nova venda'}
                    iconCard={'cash-register'}
                    />
                    <CardQuickAcces 
                    textCard={'Clientes'}
                    iconCard={'account-cash-outline'}
                    />
                    <CardQuickAcces 
                    textCard={'Financeiro'}
                    iconCard={'finance'}
                    />
                </ScrollView>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%'
    },

    imageBackGround: {
        resizeMode: 'cover',
        height: '100%'
    },

    QuickAccesContainer: {
        height: '19%',
        width: '93%',
        paddingTop: 5,
        display: 'flex',
        flexDirection: 'row',
        paddingBottom: 25,
        marginLeft: 25
    },

    containerCardsHome: {
        paddingTop: 25,
        paddingLeft: 25,
        paddingRight: 25,
        paddingBottom: 0,
        height: '80%',
    }
})