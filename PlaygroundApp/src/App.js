import React from 'react'
import { View, StyleSheet, Text, FlatList } from 'react-native'

import Calculator from './containers/Calculator'
import RegisterForm from './containers/RegisterForm'

import InputButton from './components/InputButton'
import InputField from './components/InputField'
import Screen from './components/Screen'
import ourHOC, { logProps } from './examples/HOCExample'

const InputButtonWithOurHOC = logProps(InputButton)


export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <InputButton inverted value={4} />
                <InputButtonWithOurHOC inverted value={5} />
                {/* <Calculator /> */}
                {/* <RegisterForm /> */}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'center',
    }
})
