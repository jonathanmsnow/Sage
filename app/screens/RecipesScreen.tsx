import { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import { Text } from 'react-native-paper';
import { BackendService } from '../services/BackendService';
import { RecipeCard } from '../components/RecipeCard';
import { useNavigation } from '@react-navigation/native';
import { Recipe } from '../constants/types';

const RecipesScreen = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([])

  const navigation = useNavigation();


  useEffect(() => {
    const recipes = BackendService.retrieveRecipes();
    setRecipes(recipes);
  }, [])

  return (
    <View
    style={{
      width: "100%",
      padding: 5,
      paddingTop: 50,
    }}>
    <Text variant="displayLarge">Recipes</Text>
    <FlatList
        data={recipes}
        renderItem={({item}) => 
        <View
        style={{
          width: "100%",
          padding: 5,
          marginTop: 10,
        }}>
          <RecipeCard
          title={item.title} 
          description={item.description} 
          prepTimeMin={item.prepTimeMin} 
          cookTimeMin={item.cookTimeMin}
          onPress={() => {
            navigation?.navigate("RecipeDetail", item);
          }}
          />
         </View>}
      />
    </View>

  );

};

export default RecipesScreen;