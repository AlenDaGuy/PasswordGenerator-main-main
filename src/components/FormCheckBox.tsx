import React from 'react'
import { View, StyleSheet } from 'react-native'
import BouncyCheckbox from 'react-native-bouncy-checkbox'

interface FormCheckBoxProps {
  id: string
  label: string
  checkboxColor: string,
  isChecked: boolean,
  setIsChecked: React.Dispatch<React.SetStateAction<boolean>>
}

const FormCheckBox: React.FC<FormCheckBoxProps> = ({ id, isChecked, label, checkboxColor, setIsChecked }) => {
  return (
    <View style={styles.checkBox}>
      <BouncyCheckbox
        id={id}
        fillColor={checkboxColor}
        text={label}
        isChecked={isChecked}
        textStyle={styles.checkBoxText}
        onPress={() => setIsChecked(isChecked)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  checkBox: {
    marginVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },

  checkBoxText: {
    marginLeft: 8
  }
})

export default FormCheckBox
