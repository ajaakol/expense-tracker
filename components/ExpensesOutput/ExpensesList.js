import { FlatList, Text } from 'react-native'
import React from 'react'
import ExpenseItem from './ExpenseItem'

const Item = (itemData) => {
  return <ExpenseItem {...itemData.item} />
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
