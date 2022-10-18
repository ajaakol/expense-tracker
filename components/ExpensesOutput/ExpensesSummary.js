import { View, Text } from 'react-native'
import React from 'react'

const ExpensesSummary = ({ periodName, expenses }) => {
  const expensesTotal = expenses.reduce((total, expense) => {
    return total + expense.amount
  }, 0)
  return (
    <View>
      <Text>{periodName}</Text>
      <Text>{expensesTotal.toFixed(2)}€</Text>
    </View>
  )
}

export default ExpensesSummary
