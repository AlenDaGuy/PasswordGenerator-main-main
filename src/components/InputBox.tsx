import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const InputBox = ({ inputLength, setInputLength }: { isComplexitySelected: boolean, inputLength: string, setInputLength: React.Dispatch<React.SetStateAction<string>> }) => {

  return (
    <TextInput
      style={style.textInput}
      value={inputLength}
      onChangeText={input => setInputLength(input)}
      placeholder="Password Length (8-16)"
    />
  )
}

const style = StyleSheet.create({
  textInput: {
    fontSize: 20,
    padding:10,
    borderColor:"gray",
    borderWidth: 2,
    borderRadius: 15,
    width:"100%"
  }
})


export default InputBox;
