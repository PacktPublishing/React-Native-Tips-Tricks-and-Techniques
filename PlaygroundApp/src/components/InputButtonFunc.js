import React from 'react'
import {
    Text,
    TouchableHighlight,
    StyleSheet,
} from 'react-native'

const InputButton = (props) => {
    const neutralColor = '#000'
    const highlightColor = '#f77b2e'

    const buttonColor = props.inverted
        ? neutralColor
        : highlightColor
    const textColor = props.inverted
        ? highlightColor
        : neutralColor

    return (
        <TouchableHighlight
            style={[styles.button, { backgroundColor: buttonColor }]}
            onPress={props.onPress}
        >
            <Text style={[styles.text, { color: textColor }]}>
                {props.value}
            </Text>
        </TouchableHighlight>
    )
}
InputButton.defaultProps = {
    inverted: false,
}
export default React.memo(InputButton)

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
        fontSize: 20,
    },
})
