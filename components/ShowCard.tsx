import { View, Text, StyleSheet,Image } from 'react-native'
import React from 'react'

const ShowCard = () => {
  return (
    <View>
      <Text style={styles.headingText}>ShowCard</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
        style={{height:200,borderRadius:16,}}
        src='https://www.apnamechanic.com/wp-content/uploads/2022/06/bullet-service-online-1024x683.jpg'
        />
        <View>
            <Text style={{fontSize:20, color:'black',fontWeight:'bold',margin:4}}>Lo ametadipisici apiente.</Text>
            <Text>Lorem ipsum, dolor sit amet consectetur  laboriosam vitae molestiae nostrum ipsam omnis reprehenderit tempore enim?</Text>
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
    cardElevated:{

    },
    card:{
        backgroundColor:'grey',
        padding:20,
        borderRadius:6
    }
})

export default ShowCard