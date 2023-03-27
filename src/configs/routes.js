import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { Home } from '../pages/index'
import { LoginPage } from '../pages/Login/login';
import { Dashboard } from '../pages/Dashboard/dashboard';

const Drawer = createDrawerNavigator();

export function DrawerNavigation() {
  return (
      <Drawer.Navigator 
      initialRouteName={"Login"} 
      screenOptions={{ 
        headerShown: false, 
        drawerPosition: "right" 
      }} 
      >
        <Drawer.Screen 
        name="Login" 
        component={LoginPage} 
        options={{ 
          drawerItemStyle: {display: 'none'}
        }}
        />
        <Drawer.Screen 
        name="Home" 
        component={Home} 
        />
        <Drawer.Screen 
        name="Dashboard" 
        component={Dashboard} 
        />
      </Drawer.Navigator>
  );
}