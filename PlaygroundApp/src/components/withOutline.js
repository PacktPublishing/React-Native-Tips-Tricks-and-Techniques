import React from 'react'
import { View } from 'react-native'
import hoistNonReactStatic from 'hoist-non-react-statics'

import { getDisplayName } from '../utils'
import { Metrics } from '../ui'


const withOutline = (config = { color: 'red', radius: 0 }) => Component => {
    const WithOutline = props => (
        <View
            style={{
                borderWidth: Metrics.border,
                borderColor: config.color,
                borderRadius: config.radius,
            }}
        >
            <Component {...props} />
        </View>
    )
    WithOutline.displayName = `WithOutline(${getDisplayName(Component)})`
    hoistNonReactStatic(WithOutline, Component)
    return WithOutline
}
export default withOutline
