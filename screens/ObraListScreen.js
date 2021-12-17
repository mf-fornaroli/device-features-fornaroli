import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ObraList from '../components/ObraList';

import { useSelector, useDispatch } from 'react-redux';



const ObraListScreen = ({navigation, route}) => {

  const dispatch = useDispatch();

  const listaObras = useSelector(state => state.obras.listaObras);


 return (
  <View>
     <ObraList navigation={navigation} items={listaObras} />
 </View>)
}

const styles = StyleSheet.create({
 screen: {
  
 }
});

export default ObraListScreen;