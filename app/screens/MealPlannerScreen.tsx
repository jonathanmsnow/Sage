import { View } from 'react-native';
import { Text } from 'react-native-paper';

const MealPlannerScreen = () => {

  return (
    <View
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <Text variant="displayLarge">Meal Planner</Text>
    </View>
  );
};

export default MealPlannerScreen;