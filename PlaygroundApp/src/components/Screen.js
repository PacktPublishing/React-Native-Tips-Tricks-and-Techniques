import React from 'react'
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    SafeAreaView,
} from 'react-native'

import { Styles } from '../ui'


const Screen = props => (
    <SafeAreaView style={Styles.flex}>
        {props.Header}
        <View style={Styles.flex}>
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
