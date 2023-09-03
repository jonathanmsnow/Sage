import { View } from 'react-native';
import { Text } from 'react-native-paper';

const ListsScreen = () => {

  return (
    <View
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <Text variant="displayLarge">Lists</Text>
    </View>
  );
};

export default ListsScreen;