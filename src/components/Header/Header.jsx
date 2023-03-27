import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export function Header({ navigation }) {
    console.log('Header', navigation)
    return (
        <View style={styles.containerHeader}>
            <View style={styles.contentProfile}>
                <Image 
                style={styles.imageProfile}
                source={require('../../../assets/images/profile.jpeg')}
                />
                <Text style={styles.textWhiteSemiBold}>Valéria Vaz</Text>
            </View>
            <View style={styles.contentButtonMenu}>
                <TouchableOpacity
                onPress={() => navigation.openDrawer()}
                >
                    <MaterialCommunityIcons 
                    onPress={null}
                    name={'menu'}
                    size={30} 
                    color="#FFFFFF"
                    />
                </TouchableOpacity>
            </View>
            <StatusBar style="light" />
        </View>
    )
}

const styles = StyleSheet.create({
    containerHeader: {
        width: '100%',
        height: 120,
        backgroundColor: '#4e2160',
        borderBottomEndRadius: 20,
        borderBottomStartRadius: 20,
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    imageProfile: {
        width: 45,
        height: 45,
        borderRadius: 45,
        borderWidth: 2,
        borderColor: '#FFFFFF',
        marginEnd: 5
    },

    contentProfile: {
        height: '100%',
        flexDirection: 'row',
        alignItems: 'flex-end'
    },

    textWhiteSemiBold: {
        fontFamily: 'Inter-SemiBold',
        fontSize: 16,
        color: '#FFFFFF'
    },

    contentButtonMenu: {
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center'
    }
})