import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCard() {
  return (
    <View>
      <Text style={styles.headingText}>Flat Cards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.card1]}>
            <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.card2]}>
            <Text>Green</Text>
        </View>
        <View style={[styles.card, styles.card3]}>
            <Text>Blue</Text>
        </View>
        <View style={[styles.card, styles.card4]}>
            <Text>Yellow</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize: 24,
        fontWeight: "bold",
        paddingHorizontal:8,
        marginTop:40,

    },
    container:{
        flex:1,
        flexDirection:'row',
        padding:8,

    },
    card:{
        justifyContent: 'center',
        alignItems:'center',
        width:'20%',
        height:100,
        borderRadius: 4,
        margin:8,
    },
    card1:{
        backgroundColor:'#F04A4A'
    },
    card2:{
        backgroundColor:'#50DBB4'
    },
    card3:{
        backgroundColor:'#5DA3FA'
    },
    card4:{
        backgroundColor: 'yellow'
    },
})