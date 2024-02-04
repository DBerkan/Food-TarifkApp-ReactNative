import React from 'react'
import { SafeAreaView,Text,View,Image, ImageBackground, Touchable, TouchableWithoutFeedback } from 'react-native';

import styles from './MealsCard.style';
import useData from '../../hooks/useData';

function MealsCard({meals,onPress}){
   
    return(
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container} >
                <Image source={{uri:meals.strMealThumb}} style={styles.image}/>
                <View style={styles.contentContainer}>
                    <Text style={styles.text}>{meals.strMeal}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}


export default MealsCard;
