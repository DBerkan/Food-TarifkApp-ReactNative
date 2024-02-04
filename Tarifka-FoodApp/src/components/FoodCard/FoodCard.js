import React from 'react'
import { SafeAreaView, Text, View, Image, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';

import styles from './FoodCard.style';

function FoodCard({ food,onSelect }) {

  return (
    <TouchableWithoutFeedback onPress={onSelect}>

        <View style={styles.container}>
                <View style={styles.contentContainer}>

                    <Image style={styles.image} source={{uri:food.strCategoryThumb}} />

                <View style={styles.inner_container}>
                <Text style={styles.text}>{food.strCategory}</Text>
                </View>

                </View>
        </View>

    </TouchableWithoutFeedback>
  )
}

export default FoodCard;