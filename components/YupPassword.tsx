import { ScrollView, SafeAreaView, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

import * as Yup from 'yup'
import { Formik } from 'formik';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const PasswordSchema = Yup.object().shape({
  passwordLenght: Yup.number()
    .min(4, 'Should be min 4 Charecters')
    .max(16, 'should be max 16 Characters')
    .required('Lenght is Required')
})


const YupPassword = () => {
  const [password, setPassword] = useState('')
  const [isPassGenerated, setIsPassGenerated] = useState(false)

  const [upperCase, setUpperCase] = useState(false)
  const [lowerCase, setLowerCase] = useState(true)
  const [number, setNumber] = useState(false)
  const [symbols, setSymbols] = useState(false)

  function generatePasswordString(passwordLenght: number) {
    let characterList = ''

    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz'
    const numberChars = '123456789'
    const symbols = '!@#$%^&'

    if (lowerCase) { characterList += lowerCaseChars }
    if (upperCaseChars) { characterList += upperCaseChars }
    if (number) { characterList += numberChars }
    if (symbols) { characterList += symbols }

    const passwordResult = createPassword(characterList, passwordLenght)

    setPassword(passwordResult)
    setIsPassGenerated(true)


  }

  function createPassword(Characters: string, passwordLenght: number) {
    let reasult = ''
    for (let i = 1; i < passwordLenght; i++) {
      const characterIndex = Math.round(Math.random() * Characters.length)
      reasult += Characters.charAt(characterIndex)
    }
    return reasult
    console.log("createPassword Function fire")
  }
  function resetPasswordState() {
    setPassword('')
    setIsPassGenerated(false)
    setUpperCase(false)
    setLowerCase(true)
    setNumber(false)
    setSymbols(false)

  }

  return (
    <ScrollView keyboardShouldPersistTaps='handled'>
      <SafeAreaView style={styles.appContainer}>
        <View style={styles.formContainer}>
          <Text style={styles.title2x}>Billon Doller App Break Down </Text>
          <Text style={styles.title}>Password Generater</Text>
          <Formik
            initialValues={{ passwordLenght: '' }}
            validationSchema={PasswordSchema}
            onSubmit={(values) => {
              console.log(values, 'onSubmit fire values')
              generatePasswordString(Number(values.passwordLenght))
            }}
          >
            {({
              values,
              errors,
              touched,
              isValid,
              handleChange,
              handleSubmit,
              handleReset,
              /* and other goodies */
            }) => (
              <>
                <View style={styles.inputWrapper}>
                  <View style={styles.inputColumn}>
                    <Text style={styles.heading}>Password Lenght</Text>
                    {touched.passwordLenght && errors.passwordLenght && (<Text style={styles.errorText}>
                      {errors.passwordLenght}
                    </Text>)}

                  </View>
                  <TextInput
                    style={styles.inputStyle}
                    value={values.passwordLenght}
                    onChangeText={handleChange('passwordLenght')}
                    placeholder="Example 8"
                    keyboardType='numeric'
                  />
                </View>
                <View style={styles.inputWrapper}><Text>Include Lowercase</Text>
                  <BouncyCheckbox
                    disableBuiltInState
                    isChecked={lowerCase}
                    onPress={() => setLowerCase(!lowerCase)}
                    fillColor='green'
                  />
                </View>
                <View style={styles.inputWrapper}><Text>Include upperCase</Text>
                  <BouncyCheckbox
                    disableBuiltInState
                    isChecked={upperCase}
                    onPress={() => setUpperCase(!upperCase)}
                    fillColor='green'
                  />
                </View>
                <View style={styles.inputWrapper}><Text>Include symbols</Text>
                  <BouncyCheckbox
                    disableBuiltInState
                    isChecked={symbols}
                    onPress={() => setSymbols(!symbols)}
                    fillColor='green'
                  />
                </View>
                <View style={styles.inputWrapper}><Text>Include number</Text>
                  <BouncyCheckbox
                    disableBuiltInState
                    isChecked={number}
                    onPress={() => setNumber(!number)}
                    fillColor='green'
                  />
                </View>

                <View style={styles.inputWrapper}>
                  <TouchableOpacity
                    disabled={isValid}
                    style={styles.primaryBtn}
                    onPress={() => handleSubmit()}
                  >
                    <Text>GeneratePassword</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.secondaryBtn}
                    onPress={() => {
                      handleReset()
                      resetPasswordState()
                    }}
                  ><Text>Reset</Text></TouchableOpacity>
                </View>
              </>
            )}
          </Formik>
        </View>
        {isPassGenerated ? (
          <View style={[styles.card, styles.cardElevated]}>
            <Text style={styles.subTitle}>Result :</Text>
            <Text style={styles.subTitle}>Long Press To Copy</Text>
            <Text style={styles.subTitle}>{password}</Text>
          </View>
        ) : null}
      </SafeAreaView>
    </ScrollView>
  )
}

export default YupPassword

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  formContainer: {
    margin: 8,
    padding: 8,
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
    marginBottom: 15,
  },
  subTitle: {
    fontSize: 26,
    fontWeight: '600',
    marginBottom: 2,
  },
  description: {
    color: '#758283',
    marginBottom: 8,
  },
  heading: {
    fontSize: 15,
  },
  inputWrapper: {
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  inputColumn: {
    flexDirection: 'column',
  },
  inputStyle: {
    padding: 8,
    width: '30%',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#16213e',
  },
  errorText: {
    fontSize: 12,
    color: '#ff0d10',
  },
  formActions: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  primaryBtn: {
    width: 120,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: '#5DA3FA',
  },
  primaryBtnTxt: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700',
  },
  secondaryBtn: {
    width: 120,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: '#CAD5E2',
  },
  secondaryBtnTxt: {
    textAlign: 'center',
  },
  card: {
    padding: 12,
    borderRadius: 6,
    marginHorizontal: 12,
  },
  cardElevated: {
    backgroundColor: '#ffffff',
    elevation: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  generatedPassword: {
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 12,
    color: '#000'
  },
  title2x: {}
});