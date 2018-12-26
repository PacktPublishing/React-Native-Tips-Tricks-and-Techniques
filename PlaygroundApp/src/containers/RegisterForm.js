import React from 'react'
import {
    Button,
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
            username: '',
            password: '',
            fullname: '',

            log: null,
        }
    }

    register = () => {
        const data = {
            username: this.state.username,
            password: this.state.password,
            fullname: this.state.fullname,
        }
        this.setState({ log: JSON.stringify(data) })
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

                <Button
                    title='Register'
                    onPress={this.register}
                />

                <Text>log</Text>
                <View style={{ borderWidth: 1 }}>
                    {this.state.log != null && (
                        <Text>{this.state.log}</Text>
                    )}
                </View>
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
