import { View, StyleSheet } from 'react-native'
import { useContext, useLayoutEffect } from 'react'
import IconButton from '../components/ExpensesOutput/UI/IconButton'
import { GlobalStyles } from '../constants/styles'
import Button from '../components/ExpensesOutput/UI/Button'
import { ExpensesContext } from '../store/expenses-context'

const ManageExpense = ({ route, navigation }) => {
  const expensesCtx = useContext(ExpensesContext)
  const editedExpenseId = route.params?.expenseId
  const isEditing = !!editedExpenseId

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense',
    })
  }, [navigation, isEditing])

  const deleteExpense = () => {
    expensesCtx.deleteExpense(editedExpenseId)
    navigation.goBack()
  }

  const cancelExpense = () => {
    navigation.goBack()
  }

  const confirmExpense = () => {
    isEditing
      ? expensesCtx.updateExpense(editedExpenseId, {
          description: 'Test!!!!!!',
          amount: 89.99,
          date: new Date('2022-05-20'),
        })
      : expensesCtx.addExpense({
          description: 'Test',
          amount: 9.99,
          date: new Date('2022-05-19'),
        })
    navigation.goBack()
  }

  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <Button
          style={styles.button}
          mode='flat'
          onPress={cancelExpense}>
          Cancel
        </Button>
        <Button
          style={styles.button}
          onPress={confirmExpense}>
          {isEditing ? 'Update' : 'Add'}
        </Button>
      </View>
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon='trash'
            color={GlobalStyles.colors.error500}
            size={36}
            onPress={deleteExpense}
          />
        </View>
      )}
    </View>
  )
}

export default ManageExpense

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: 'center',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
})
