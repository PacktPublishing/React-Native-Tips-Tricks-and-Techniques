import React from 'react'
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    SafeAreaView,
} from 'react-native'


const Screen = props => (
    <SafeAreaView style={styles.container}>
        {props.Header}
        <View style={styles.container}>
            {props.children}
        </View>
        {props.TabBar}
    </SafeAreaView>
)
Screen.defaultProps = {
    Header: undefined,
    TabBar: undefined,
}
export default Screen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})
