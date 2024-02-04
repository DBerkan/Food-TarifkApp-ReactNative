import React from 'react'
import { View,Image,Text, Pressable, Linking } from 'react-native';

import styles  from '../DetailsCard/DetailsCard.style'

function DetailsCard({details}){
    const handleButtonYoutube=()=>{
        const youtubeUrl = details.strYoutube;
        Linking.openURL(youtubeUrl);
    }
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={{uri:details.strMealThumb}}/>
            <View>
                <View >
                    <Text style={styles.text}>{details.strMeal}</Text>
                    <Text style={styles.text}>{details.strArea}</Text>

                </View>
            <Pressable style={styles.button} onPress={handleButtonYoutube}>
                    
                <Text style={styles.buttonText}>Watch on YouTube</Text>
            </Pressable>
                <Text style={styles.descrip}>{details.strInstructions}</Text>
            </View>
        </View>
    )
}
export default DetailsCard;