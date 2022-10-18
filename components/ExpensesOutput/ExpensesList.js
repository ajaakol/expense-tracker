import { FlatList, Text } from 'react-native'
import React from 'react'

const Item = (itemData) => {
  return <Text>{itemData.item.description}</Text>
}

const ExpensesList = ({ expenses }) => {
  return (
    <FlatList
      data={expenses}
      renderItem={Item}
      keyExtractor={(item) => item.id}
    />
  )
}

export default ExpensesList
