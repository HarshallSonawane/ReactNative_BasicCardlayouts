import { StyleSheet, Text, View ,Image } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Random Image</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image 
            source={{
                uri:'https://fastly.picsum.photos/id/20/3670/2462.jpg?hmac=CmQ0ln-k5ZqkdtLvVO23LjVAEabZQx2wOaT4pyeG10I',
            }}
            style={styles.cardImage}
        />
        <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>NAME GOES HERE...</Text>
        </View>
        <View style={styles.cardBody}>
            <Text style={styles.cardLabel}>Label GOES HERE...</Text>
        </View>
        <View style={styles.cardBody}>
            <Text style={styles.cardDescription}>fatert5rythgfbfg  ghth thththghgfgjkfkjbfbnkfbkfjdgjfhgjfhgjfjkgfjdgkjfhgfhgjfkgfkjghkjfhgkjfd</Text>
        </View>
        <View style={styles.cardBody}>
            <Text style={styles.cardFooter}>Footer GOES HERE...</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        margin:8,
        fontSize: 24,
        fontWeight: "bold",
        paddingHorizontal:8,
    },
    card:{
        width:350,
        height:360,
        borderRadius:6,
        marginVertical: 12,
        marginHorizontal:16,
        
    },
    cardElevated:{
        backgroundColor:'white',
        elevation:3,
        shadowOffset:{
            width:1,
            height:1,
        },
    },
    cardImage:{
        height:180,
        marginBottom:8,
        borderTopLeftRadius:6,
        borderTopRightRadius:6,
    },
    cardBody:{
        flex:1,
        flexGrow:1,
        paddingHorizontal:12,
    },
    cardTitle:{
        marginTop:10,
        fontSize:22,
        fontWeight:'bold',
        marginBottom:4,
    },
    cardLabel:{
        fontSize:14,
        marginBottom:6,
    },
    cardDescription:{
        fontSize:12,
        marginBottom:12,
        flexShrink:1,
    },
    cardFoter:{
        fontSize:16,
    },
})