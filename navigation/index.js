import React, { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './tabs/TabNavigator';
import AuthNavigator from "./AuthNavigator";

const MainNavigator = () => {
 const [user, setUser] = useState(null);
 return (
  <NavigationContainer>
   {/*
    user 
     ? < TabNavigator />
     : <AuthNavigator />*/
     < TabNavigator />
   }
  </NavigationContainer>
 )
};

export default MainNavigator;