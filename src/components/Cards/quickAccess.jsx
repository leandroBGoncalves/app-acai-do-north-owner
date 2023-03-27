import { 
    StyleSheet, 
    Text, 
    TouchableOpacity, 
    View 
} from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export function CardQuickAcces({
    textCard,
    iconCard
}) {
    return (
        <TouchableOpacity style={styles.containerCard}>
            <View style={styles.boxIcon}>
                <MaterialCommunityIcons 
                onPress={() => setVisiblePassword(!visiblePassword)}
                name={iconCard}
                size={35} 
                color="#FFFFFF"
                />
            </View>
            <Text style={styles.textCard}>
                {textCard}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    containerCard: {
        backgroundColor: 'rgba(114, 9, 183, 0.7)',
        width: 120,
        borderRadius: 8,
        padding: 8,
        marginRight: 10,
    },

    boxIcon: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },

    textCard: {
        fontFamily: 'Inter-Bold',
        color: '#FFFFFF',
        fontSize: 18,
        marginTop: 'auto'
    }
})