import { Card, Text } from "react-native-paper"
import { Utils } from "../utilities/Utils"


export const RecipeCard = ({title, description, prepTimeMin, cookTimeMin, onPress}) => {

    return (
      <Card onPress={onPress}>
          <Card.Title title={title} subtitle={`Time: ${Utils.convertToHourMinuteFormat(prepTimeMin + cookTimeMin)}`}/>
          <Card.Content>
            <Text variant="bodyMedium">{description}</Text>
          </Card.Content>
      </Card>
      )
}