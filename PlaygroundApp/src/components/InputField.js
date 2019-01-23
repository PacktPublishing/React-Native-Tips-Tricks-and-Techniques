import React from 'react'
import {
    View,
    Text,
    TextInput,
    StyleSheet,
} from 'react-native'
import { Fonts, Metrics } from '../ui';

export default
class InputField extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.label}>
                    {this.props.title}{this.props.required && '*'}
                </Text>
                <TextInput
                    {...this.props}
                    style={[styles.input, this.props.style]}
                    secureTextEntry={this.props.protected}
                />
            </View>
        )
    }
}
InputField.defaultProps = {
    required: false,
    protected: false,
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: 8,
    },
    label: {
        flex: 1,
        fontFamily: Fonts.primary.bold,
        fontSize: Fonts.size.inputFieldLabel,
    },
    input: {
        flex: 2,
        height: 30,
        borderWidth: Metrics.borderThin,
    },
})
