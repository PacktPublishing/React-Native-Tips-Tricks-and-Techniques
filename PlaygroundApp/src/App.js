import React from 'react'
import { View, StyleSheet, Text, FlatList } from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import rootReducer from './reducers'

import Calculator from './containers/Calculator'
import RegisterForm from './containers/RegisterForm'
import RegisterFormRedux from './registerFormDuck'


import InputButton from './components/InputButton'
import InputField from './components/InputField'
import Screen from './components/Screen'
import ourHOC, { logProps } from './examples/HOCExample'


class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Calculator />
                {/* <RegisterFormRedux /> */}
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


const store = createStore(rootReducer)

export default class ReduxApp extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        )
    }
}
