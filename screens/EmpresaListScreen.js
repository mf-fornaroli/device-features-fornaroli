import React, { useState } from 'react';
import { View, StyleSheet, FlatList, Text} from 'react-native';
import EmpresaList from '../components/EmpresaList';
import { FAB } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
//import de hooks de Redux
import { useSelector, useDispatch } from 'react-redux';
import { selectEmpresa } from '../store/actions/empresa.action';

const EmpresaListScreen = ({ navigation, route }) => {
    
    const dispatch = useDispatch();

    const listaEmpresas = useSelector(state => state.empresas.listaEmpresas);

    return (
        <View>
 
            <EmpresaList items={listaEmpresas} navigation={navigation}/>
  
        </View>);
}

const styles = StyleSheet.create({
 screen: {
  
 }
});

export default EmpresaListScreen;