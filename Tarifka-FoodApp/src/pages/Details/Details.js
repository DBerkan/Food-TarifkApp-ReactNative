import React from 'react'
import { SafeAreaView,View,Text, FlatList } from 'react-native'
import useData from '../../hooks/useData';
import DetailsCard from '../../components/DetailsCard/DetailsCard';
import LoadingAnimation from '../../components/LoadingAnimaton/LoadingAnimation';

const urlMeals = 'https://www.themealdb.com/api/json/v1/1/search.php?s='



function Details({route}){
    const detail = route.params.meals
    const {dataAPI,loading,error} = useData(urlMeals+`${detail}`)

    if(loading){
        return <LoadingAnimation/>
    }
    if(error){
        return <Text>error</Text>
    }

    const renderDetails = ({item})=> <DetailsCard details = {item}/>
    return(
        <SafeAreaView>
            <FlatList
                data={dataAPI.meals}
                renderItem={renderDetails}
            />
        </SafeAreaView>
    )
}

export default Details;