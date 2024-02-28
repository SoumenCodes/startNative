import { View, Text ,StyleSheet, ScrollView} from 'react-native'
import React from 'react'

const ElevatedCard = () => {
  return (
    <View>
      <Text style={styles.headingText}>Elevated Card</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card,styles.cardElevated]}>
            <Text>Card</Text>
        </View>
        <View style={[styles.card,styles.cardElevated]}>
            <Text>Card</Text>
        </View>
        <View style={[styles.card,styles.cardElevated]}>
            <Text>Card</Text>
        </View>
        <View style={[styles.card,styles.cardElevated]}>
            <Text>Card</Text>
        </View>
        <View style={[styles.card,styles.cardElevated]}>
            <Text>Card</Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:'bold',
        color:'black'
    },
    container:{
      padding:4,
        },
    card:{
        width:100,
        height:100,
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        margin:8,
        borderRadius:6
    },
    cardElevated:{
        backgroundColor:'black'
    }
})

export default ElevatedCard