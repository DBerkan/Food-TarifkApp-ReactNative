import React, { useState } from 'react'
import { SafeAreaView,Text,FlatList } from 'react-native';

import MealsCard from '../../components/MealsCard/MealsCard';

import useData from '../../hooks/useData';

import LoadingAnimation from '../../components/LoadingAnimaton/LoadingAnimation';

const urlCa = 'https://www.themealdb.com/api/json/v1/1/search.php?s='

function Meals({route,navigation}){

    const categories = route.params.category
    const {dataAPI,loading,error} = useData(urlCa+`${categories}`)


    const goDetails = meals =>{
        navigation.navigate('Details Screen',{meals})

    }
    if(loading){
        return <LoadingAnimation/>
    }
    if(error){
        return <Text>error</Text>
    }



    const renderMeals = ({item}) =><MealsCard meals={item} onPress={()=>goDetails(item.strMeal)}/>

    return(
       <SafeAreaView>

        <FlatList   
            data={dataAPI.meals}
            renderItem={renderMeals}
        />
       </SafeAreaView>
    )
}

export default Meals;