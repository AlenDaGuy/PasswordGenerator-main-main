import React, { useState } from "react";
import {
    Text,
    SafeAreaView,
    StyleSheet
} from "react-native"

import InputBox from "./components/InputBox";
import FormCheckBox from "./components/FormCheckBox";
import Output from "./components/Output";
import Btn, { btnType } from "./components/Btn";
import { generatePasswordString } from "./utility/passwordGenerator";
import { PasswordRequirement } from "./utility/Consts";
import { showErrorSnackbar, showSuccessSnackBar } from "./utility/utils"

function Main(): React.JSX.Element {

    const [password, setPassword] = useState("")

    const [inputLength, setInputLength] = useState<string>("")
    const [includeUpper, setIncludeUpper] = useState(false)
    const [includeLower, setIncludeLower] = useState(false)
    const [includeNumber, setIncludeNumber] = useState(false)
    const [includeSymbol, setIncludeSymbol] = useState(false)

    const isComplexitySelected = includeUpper || includeLower || includeNumber || includeSymbol

    return (
        <SafeAreaView style={style.containerView}>
            <Text style={style.title}>Password Generator</Text>

            <InputBox inputLength={inputLength} setInputLength={setInputLength} isComplexitySelected={isComplexitySelected} />

            <FormCheckBox
                isChecked={includeUpper}
                checkboxColor={'blue'}
                label={'Upper Case Letter'}
                id={'Upper Case Letter'}
                setIsChecked={setIncludeUpper}
            />

            <FormCheckBox
                isChecked={includeLower}
                checkboxColor={'green'}
                label={'Lower Case Letter'}
                id={'Lower Case Letter'}
                setIsChecked={setIncludeLower}
            />

            <FormCheckBox
                isChecked={includeSymbol}
                checkboxColor={'orange'}
                label={'Special Characters'}
                id={'Special Characters'}
                setIsChecked={setIncludeSymbol}
            />

            <FormCheckBox
                isChecked={includeNumber}
                checkboxColor={'purple'}
                label={'Numbers'}
                id={'Numbers'}
                setIsChecked={setIncludeNumber}
            />

            <Output generatedPassword={password} placeholder="Select Options" handleCopy={() => showSuccessSnackBar("Copied successfully")} />
            <Btn type={btnType.Primary} title="Generate Password" onPress={() => {

                const length = parseInt(inputLength, 10)

                if (inputLength === "") {
                    showErrorSnackbar("No password length is given")
                }

                else if (isNaN(length)) {
                    showErrorSnackbar('Please enter a valid number for password length.')
                }

                else if (length < 8 || length > 16) {
                    showErrorSnackbar('Password length must be between 8 and 16 characters.')
                }

                else if (!isComplexitySelected) {
                    showErrorSnackbar('Please select at least one complexity criteria.');
                }

                else {
                    setInputLength(inputLength)

                    const passwordRequirements: PasswordRequirement = {
                        length, includeLower, includeNumber, includeSymbol, includeUpper
                    }

                    setPassword(generatePasswordString(passwordRequirements))
                }
            }} />
            <Btn type={btnType.Danger} title="Reset" onPress={() => {
                setIncludeUpper(false)
                setIncludeLower(false)
                setIncludeSymbol(false)
                setIncludeNumber(false)
                setInputLength("")
                setPassword("")
            }} />
        </SafeAreaView>
    );
}

const style = StyleSheet.create({
    containerView: {
        alignItems: "center",
        paddingVertical: 5,
        paddingHorizontal: 10
    },

    flatListView: {
        marginTop: 20
    },

    title: {
        marginBottom: 15,
        fontSize: 30
    }
})

export default Main;