import React from 'react'
import { View, StyleSheet } from 'react-native'

import Calculator from './containers/Calculator'
import RegisterForm from './containers/RegisterForm'

import InputButton from './components/InputButton'
import InputField from './components/InputField'


export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Calculator />
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
