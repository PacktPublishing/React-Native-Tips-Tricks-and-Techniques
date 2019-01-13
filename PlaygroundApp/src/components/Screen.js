import React from 'react'
import {
    View,
    Text,
    TextInput,
    StyleSheet,
} from 'react-native'

const Screen = props => (
    <View style={styles.container}>
        {props.Header}
        {props.children}
    </View>
)
Screen.defaultProps = {
    Header: false,
}
export default Screen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})
