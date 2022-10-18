import { View } from 'react-native'
import React from 'react'
import ExpensesSummary from './ExpensesSummary'
import ExpensesList from './ExpensesList'

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    description: 'A pair of shoes',
    amount: 50,
    date: new Date('2021-12-19'),
  },
  {
    id: 'e2',
    description: 'A pair of shirts',
    amount: 24.99,
    date: new Date('2022-01-05'),
  },
  {
    id: 'e3',
    description: 'Some bananas',
    amount: 3.99,
    date: new Date('2021-12-01'),
  },
]

const ExpensesOutput = ({ expenses, expensesPeriod }) => {
  return (
    <View>
      <ExpensesSummary
        expenses={DUMMY_EXPENSES}
        periodName={expensesPeriod}
      />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  )
}

export default ExpensesOutput
