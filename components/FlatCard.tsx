import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCard() {
  return (
    <View style={{marginBottom:4}}>
      <Text style={styles.headingText}>FlatCard</Text>
      <View style={styles.container}>
        <View style={[styles.card,styles.cardOne]}>
            <Text>red</Text>
        </View>
        <View style={[styles.card,styles.cardTwo]}>
            <Text>red</Text>
        </View>
        <View style={[styles.card,styles.cardThree]}>
            <Text>red</Text>
        </View>
      </View>
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
    flex:1,
    flexDirection:'row',
    margin:4
    },
    card:{
        flex:1,

        width:100,
        height:100,
        borderRadius:6,
        justifyContent:'center',
        alignItems:'center',
        margin:4
            
    },
    cardOne:{
        backgroundColor:'red'
    },
    cardTwo:{
        backgroundColor:'green'
    },
    cardThree:{
        backgroundColor:'grey'
    },
})