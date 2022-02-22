import { View, Text } from 'react-native'
import React from 'react'
import { Card, Paragraph, Title } from 'react-native-paper'

type Props = {

}

export const StarShipCard = ({item}) => {
    
  return (
    <Card elevation={2} style={{marginBottom:24}}>
      <Card.Content>
        <Title>{item.name}</Title>
        <Paragraph>{item.model}</Paragraph>
        <Text>{item.manufacturer}</Text>
        <Text>{item.cost_in_credits} credits</Text>
        <Text>Buy this SpaceShip</Text>
      </Card.Content>
    </Card>
  )
}





