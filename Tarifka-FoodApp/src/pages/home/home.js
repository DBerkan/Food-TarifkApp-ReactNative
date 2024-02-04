import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FlatList, SafeAreaView,Text } from 'react-native';
import FoodCard from '../../components/FoodCard';

import useData from '../../hooks/useData'
import LoadingAnimation from '../../components/LoadingAnimaton/LoadingAnimation';

const urlHome = 'https://www.themealdb.com/api/json/v1/1/categories.php'

function Home({navigation}){
    const {dataAPI,error,loading} = useData(urlHome)

    const goMeals = category =>{
        navigation.navigate('Meals Screen',{category})
    }

    if(error){
       return <Text>{error}</Text>
    }

   if(loading){
    return <LoadingAnimation/>
   }

    const renderData = ({item}) => (<FoodCard food={item} onSelect={()=>goMeals(item.strCategory)}/>)
   
                return(
        <SafeAreaView>
            <FlatList
                data={dataAPI.categories}
                renderItem={renderData}
            />
        </SafeAreaView>
    )
}

export default Home;