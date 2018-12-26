import React from 'react'
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
} from 'react-native'

import InputField from '../components/InputField'


export default
class RegisterForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            username: null,
            password: null,
            fullname: null,
        }
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Text style={styles.title}>Register Form</Text>
                <InputField
                    title='Username'
                    placeholder='username'
                    required
                    value={this.state.username}
                    onChangeText={text => this.setState({ username: text })}
                />
                <InputField
                    title='Password'
                    placeholder='password'
                    required
                    protected
                    value={this.state.password}
                    onChangeText={text => this.setState({ password: text })}
                />
                <InputField
                    title='Full name'
                    placeholder='Full Name'
                    value={this.state.fullname}
                    onChangeText={text => this.setState({ fullname: text })}
                />
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontSize: 40,
        textAlign: 'center',
    },
})
