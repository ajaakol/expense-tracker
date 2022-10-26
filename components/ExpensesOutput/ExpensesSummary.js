import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { GlobalStyles } from '../../constants/styles'

const ExpensesSummary = ({ periodName, expenses }) => {
  const expensesTotal = expenses.reduce((total, expense) => {
    return total + expense.amount
  }, 0)

  return (
    <View style={styles.container}>
      <Text style={styles.period}>{periodName}</Text>
      <Text style={styles.sum}>{expensesTotal.toFixed(2)}€</Text>
    </View>
  )
}

export default ExpensesSummary

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: GlobalStyles.colors.primary50,
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  period: {
    fontSize: 12,
    color: GlobalStyles.colors.primary400,
  },
  sum: {
    fontSize: 16,
    fontWeight: 'bold',
    color: GlobalStyles.colors.primary500,
  },
})
