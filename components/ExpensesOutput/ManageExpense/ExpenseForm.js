import { View } from 'react-native'
import React from 'react'
import Input from './Input'

const ExpenseForm = () => {
  const amountChanged = () => {}

  return (
    <View>
      <Input
        label='Amount'
        textInputConfig={{
          keyboardType: 'decimal-pad',
          onChangeText: amountChanged,
        }}
      />
      <Input
        label='Date'
        textInputConfig={{
          placeholder: 'YYYY-MM-DD',
          maxLength: 10,
          onChangeText: () => {},
        }}
      />
      <Input
        label='Description'
        textInputConfig={{
          multiline: true,
        }}
      />
    </View>
  )
}

export default ExpenseForm
