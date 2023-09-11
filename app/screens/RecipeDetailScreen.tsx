import { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import { Card, Text } from 'react-native-paper';
import { BackendService } from '../services/BackendService';
import { RecipeCard } from '../components/RecipeCard';

const RecipeDetailScreen = ({route}) => {

  const {title, description, ingredients} = route.params;
  return (
    <View
    style={{
      width: "100%",
      padding: 5,
    }}>
    <Text variant="displayLarge">{title}</Text>
    <Text>{description}</Text>
    <FlatList
        data={ingredients}
        renderItem={({item}) => <Text>{item.name}</Text>}
      />
    </View>
  );
};

export default RecipeDetailScreen;