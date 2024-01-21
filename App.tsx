import React from 'react';
//import SupplierScreen from './src/screens/SupplierScreen';
import AddProductScreen from './src/screens/AddProductScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SupplierScreen from './src/screens/SupplierScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Anasayfa" component={SupplierScreen} />
        <Tab.Screen name="Ürün Ekle" component={AddProductScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
