import React from 'react';

import {
  NavigationContainer,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {BottomNavigation} from 'react-native-paper';
import MealPlannerScreen from '../screens/MealPlannerScreen';
import ListsScreen from '../screens/ListsScreen';
import RecipesScreen from '../screens/RecipesScreen';


const Stack = createNativeStackNavigator();

const HomeScreen = () => {

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: 'recipes',
      title: 'Recipes',
      focusedIcon: 'book',
      unfocusedIcon: 'book-outline',
    },
    {
      key: 'planner',
      title: 'Planner',
      focusedIcon: 'calendar-text',
      unfocusedIcon: 'calendar-text-outline',
    },
    {
      key: 'lists',
      title: 'Lists',
      focusedIcon: 'format-list-bulleted-square',
      unfocusedIcon: 'format-list-checkbox',
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    recipes: RecipesScreen,
    planner: MealPlannerScreen,
    lists: ListsScreen,
  });

  return (
    <BottomNavigation
      navigationState={{index, routes}}
      onIndexChange={setIndex}
      renderScene={renderScene}
      sceneAnimationType={'shifting'}
    />
  );
}


const StackNavigator = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name={'home'}
          component={HomeScreen}
          options={{
            gestureEnabled: false,
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;