import { Image, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export function Card({
    title
}) {
    return (
        <View style={styles.container}>
            <View style={styles.containerInfosLeft}>
                <View>
                    <Text style={styles.textTitleInfo}>Total de Vendas Hoje</Text>
                    <Text style={styles.valueInformation}>R$125,35</Text>
                </View>
                <View style={styles.containerMoreSale}>
                    <Text style={styles.textTitleInfo}>Mais vendido do dia</Text>
                    <View style={styles.boxMoreSale}>
                        <Text style={styles.numberOfMoreSale}>3</Text>
                        <MaterialCommunityIcons 
                        onPress={null}
                        name={'beer-outline'}
                        size={18} 
                        color="#353535"
                        />
                        <Text style={styles.valueMoreSale}>Copos de 500ML</Text>
                    </View>
                </View>
            </View>
            <TouchableOpacity style={styles.contentNewSale}>
                <View style={styles.boxAbsolutNewSale}>
                    <Text style={styles.valueInformation}>Nova Venda</Text>
                </View>
                <MaterialCommunityIcons 
                onPress={null}
                name={'cash-register'}
                size={90} 
                color="rgba(56, 176, 0, 1)"
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        height: '30%',
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        shadowColor: '#240046',
        shadowOffset: { 
            width: 5, 
            height: 10 
        },
        shadowOpacity: 0.8,
        shadowRadius: 15,
        elevation: 10,
        padding: 8,
        opacity: 0.7,
        marginBottom: 20
    },

    containerInfosLeft: {
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'center'
    },

    textTitleInfo: {
        fontFamily: 'Inter-Bold',
        fontSize: 16,
        color: '#7b2cbf'
    },

    valueInformation: {
        fontFamily: 'Inter-Black',
        fontSize: 18,
        color: '#38b000'
    },

    boxMoreSale: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5
    },

    valueMoreSale: {
        fontFamily: 'Inter-Black',
        fontSize: 14,
        color: '#6c757d'
    },

    numberOfMoreSale: {
        fontFamily: 'Inter-SemiBold',
        fontSize: 18,
        color: '#6c757d'
    },

    containerMoreSale: {
        marginTop: 20
    },

    contentNewSale: {
        alignItems: 'center',
        paddingRight: 15
    },

    boxAbsolutNewSale: {
        flexDirection: 'row',
        alignItems: 'center'
    }

})