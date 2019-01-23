import React from 'react'
import {
    Text,
    TouchableHighlight,
    StyleSheet,
} from 'react-native'
import { Fonts, Colors } from '../ui';

export default
class InputButton extends React.PureComponent {
    render() {
        const neutralColor = Colors.button
        const highlightColor = Colors.buttonInverse

        const buttonColor = this.props.inverted
            ? neutralColor
            : highlightColor
        const textColor = this.props.inverted
            ? highlightColor
            : neutralColor

        return (
            <TouchableHighlight
                {...this.props}
                underlayColor='yellow'
                style={[
                    this.props.style,
                    styles.button,
                    { backgroundColor: buttonColor },
                ]}
            >
                <Text style={[styles.text, { color: textColor }]}>
                    {this.props.value}
                </Text>
            </TouchableHighlight>
        )

    }
}
InputButton.defaultProps = {
    inverted: false,
}

const styles = StyleSheet.create({
    button: {
        width: 60,
        height: 60,
        borderRadius: 30,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: Fonts.size.veryBig,
        fontFamily: Fonts.secondary.base,
    },
})
