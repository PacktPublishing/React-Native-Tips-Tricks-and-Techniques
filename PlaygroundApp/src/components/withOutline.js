import React from 'react'
import { View } from 'react-native'


const withOutline = (config = { color: 'red', radius: 0 }) => Component => {
    return (props) => (
        <View
            style={{
                borderWidth: 2,
                borderColor: config.color,
                borderRadius: config.radius,
            }}
        >
            <Component {...props} />
        </View>
    )
}
export default withOutline
