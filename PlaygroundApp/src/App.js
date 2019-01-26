import React from 'react'
import { View, StyleSheet, Text, FlatList } from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import Reactotron from 'Reactotron'
import FeatureToggles from 'FeatureToggles'
import rootReducer from './reducers'

import { Calculator, RegisterForm } from 'containers'
import RegisterFormRedux from 'registerFormDuck'

import { Screen, InputField, InputButton } from 'components'
import ourHOC, { logProps } from './examples/HOCExample'


class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                {/* <Calculator /> */}
                <RegisterFormRedux />
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


let createStoreFn = createStore
if (FeatureToggles.reactotron) {
    createStoreFn = Reactotron.createStore
}
const store = createStoreFn(rootReducer, composeWithDevTools(
    // if we have any middleware or enhancers:
    // applyMiddleware(..middleware),
    // other enhancers
))

export default class ReduxApp extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        )
    }
}
