import React from 'react'
import { View, StyleSheet, Text, FlatList } from 'react-native'

import Calculator from './containers/Calculator'
import RegisterForm from './containers/RegisterForm'

import InputButton from './components/InputButton'
import InputField from './components/InputField'
import Screen from './components/Screen'


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
