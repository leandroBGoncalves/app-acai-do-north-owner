import { 
    Image, 
    StyleSheet, 
    Text, 
    TouchableHighlight, 
    TouchableOpacity, 
    Dimensions,
    View 
} from "react-native";

import {
    PieChart,
    BarChart
  } from 'react-native-chart-kit';

export function CardChart({
    title,
    amount,
    isHeight
}) {

    return (
        <View style={isHeight ? styles.containerBigger : styles.container}>
            <View>
                <Text style={styles.textTitleInfo}>{title}</Text>
            </View>
            {!amount &&
            <PieChart
              data={[
                {
                  name: '300ML',
                  population: 10,
                  color: 'rgba(143, 124, 163, 1)',
                  legendFontColor: '#7F7F7F',
                  legendFontSize: 15,
                },
                {
                  name: '500ML',
                  population: 8,
                  color: 'rgba(60, 9, 108, 1)',
                  legendFontColor: '#7F7F7F',
                  legendFontSize: 15,
                },
                {
                  name: '700ML',
                  population: 8,
                  color: 'rgba(72, 191, 227, 1)',
                  legendFontColor: '#7F7F7F',
                  legendFontSize: 15,
                },
                {
                  name: 'Marnita',
                  population: 18,
                  color: '#7209b7',
                  legendFontColor: '#7F7F7F',
                  legendFontSize: 15,
                },
              ]}
              width={Dimensions.get('window').width - 16}
              height={150}
              yAxisLabel={'Rs'}
              chartConfig={{
                backgroundColor: '#1cc910',
                backgroundGradientFrom: '#eff3ff',
                backgroundGradientTo: '#efefef',
                decimalPlaces: 2,
                color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                style: {
                  borderRadius: 16,
                },
              }}
            //   style={{
            //     marginVertical: 8,
            //     borderRadius: 16,
            //   }}
              accessor="population"
              backgroundColor="transparent"
            //   paddingLeft="15"
            //   absolute //for the absolute number remove if you want percentage
            />}
            {amount && 
            <BarChart
              data={{
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [
                  {
                    data: [20, 45, 28, 80, 99, 43],
                  },
                ],
              }}
              width={Dimensions.get('window').width - 70}
              height={180}
              yAxisLabel={'R$'}
              showValuesOnTopOfBars
              chartConfig={{
                backgroundGradientFrom: '#eff3ff',
                backgroundGradientTo: '#efefef',
                decimalPlaces: 2,
                color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                style: {
                  borderRadius: 16,
                },
              }}
              style={{
                paddingBottom: 5
              }}
            />
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
        height: 200,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        shadowColor: '#240046',
        shadowOffset: { 
            width: 5, 
            height: 10 
        },
        shadowOpacity: 0.8,
        shadowRadius: 15,
        elevation: 5,
        padding: 8,
        opacity: 0.7,
        marginBottom: 20
    },

    containerBigger: {
      alignItems: 'center',
      justifyContent: 'flex-start',
      width: '100%',
      height: 310,
      backgroundColor: '#FFFFFF',
      borderRadius: 10,
      shadowColor: '#240046',
      shadowOffset: { 
          width: 5, 
          height: 10 
      },
      shadowOpacity: 0.8,
      shadowRadius: 15,
      elevation: 5,
      padding: 8,
      opacity: 0.7,
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
        marginTop: 10
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