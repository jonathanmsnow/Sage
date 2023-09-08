import { Card, Text } from "react-native-paper"
import { Recipe } from "../constants/types"
import { Utils } from "../utilities/Utils"

export const RecipeCard = ({title, description, prepTimeMin, cookTimeMin}) => {
    return (
    <Card>
          <Card.Title title={title} subtitle={`Time: ${Utils.convertToHourMinuteFormat(prepTimeMin + cookTimeMin)}`}/>
          <Card.Content>
            <Text variant="titleLarge">{title}</Text>
            <Text variant="bodyMedium">{description}</Text>
          </Card.Content>
      </Card>)
}