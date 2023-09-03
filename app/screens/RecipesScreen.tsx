import { View } from 'react-native';
import { Text } from 'react-native-paper';

const RecipesScreen = () => {

  return (
    <View
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <Text variant="displayLarge">Recipes</Text>
    </View>

  );

};

export default RecipesScreen;