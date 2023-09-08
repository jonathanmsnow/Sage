import { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import { Card, Text } from 'react-native-paper';
import { BackendService } from '../services/BackendService';
import { RecipeCard } from '../components/RecipeCard';

const RecipesScreen = () => {
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    const recipes = BackendService.retrieveRecipes();
    setRecipes(recipes);
  }, [])

  return (
    <View
    style={{
      width: "100%",
      padding: 16,
      paddingTop: 100,
    }}>
    <Text variant="displayLarge">Recipes</Text>
    <FlatList
        data={recipes}
        renderItem={({item}) => 
        <RecipeCard
         title={item.title} 
         description={item.description} 
         prepTimeMin={item.prepTimeMin} 
         cookTimeMin={item.cookTimeMin}
         />}
      />
    </View>

  );

};

export default RecipesScreen;